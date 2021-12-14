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


  constructor(private apiService:ApiIntegrationService) { }
  
  ngOnInit(): void {
     this.callApi()
  }

  ngOnChanges(){
    // this.callApi()
  }

  callApi(){
    let catagories = ['Programming','Miscellaneous','Dark','Pun','Spooky','Christmas']
    let blackListFlags = ['nsfw','religious','political','racist','sexist','explicit']
    this.apiService.getApiResult(
      catagories,
      blackListFlags)
    .subscribe(result => {
      console.log(`SERVICE RESULT:: JOKE:${result.joke} CATEGORY:${result.category} ${result.safe} ${result.type}`)
      this.joke = result.joke 
  })
  }
}
