import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../models/response.model';
import { ApiIntegrationService } from '../services/api-integration.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  joke:String = '' 
  setup:String = ''
  delivery:String = ''
  categoriesLIST:string[] = ['Programming','Miscellaneous','Dark','Pun','Spooky','Christmas']
  blackListFlagsLIST:string[] = ['nsfw','religious','political','racist','sexist','explicit']

  constructor(private apiService:ApiIntegrationService) { }
  
  ngOnInit(): void {
     //this.callApi()
  }

  ngOnChanges(){
    // this.callApi()
  }

  callApi(){
    let categories:string[] = []
    let blackListFlags:string[] = []

    this.blackListFlagsLIST.forEach((blackListFlag) => {
      let currentblackListFlag = <HTMLInputElement>document.getElementById(blackListFlag)
      if(currentblackListFlag && currentblackListFlag.checked){
        blackListFlags.push(blackListFlag)
      }
    })

    this.categoriesLIST.forEach((category) => {
      let currentCategory = <HTMLInputElement>document.getElementById(category)
      if(currentCategory && currentCategory.checked){
        categories.push(category)
      }
    })

    let isTwoPartjoke = <HTMLInputElement>document.getElementById('twopartJoke');
    this.apiService.getApiResult(
      categories,
      blackListFlags,
      isTwoPartjoke.checked
      )
    .subscribe(result => {
      console.log(`SERVICE RESULT:: JOKE:${result.joke} CATEGORY:${result.category} ${result.safe} ${result.type}`)
      if(result.type === 'single'){
        this.joke = result.joke 
        this.delivery = ''
        this.setup = ''
      }
      else{
        this.joke = ''
        this.delivery = result.delivery
        this.setup = result.setup
      }
  })
  }
}
