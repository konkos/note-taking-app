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

    this.apiService.getApiResult(
      categories,
      blackListFlags)
    .subscribe(result => {
      console.log(`SERVICE RESULT:: JOKE:${result.joke} CATEGORY:${result.category} ${result.safe} ${result.type}`)
      this.joke = result.joke 
  })
  }
}
