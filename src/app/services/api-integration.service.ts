import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {

  url:String = 'https://v2.jokeapi.dev/joke/'
  categoriesLIST:String[] = ['Programming','Miscellaneous','Dark','Pun','Spooky','Christmas']
  blackListFlagsLIST = ['nsfw','religious','political','racist','sexist','explicit']
  constructor(private http:HttpClient) { }

  getApiResult(categories:String[], blackListFlags:String[]){    

    if(categories.length > 0){
      categories.map(category => this.url += `${category},`)
      this.url = this.url.slice(0,-1) //remove last comma
      console.log(`URL1:::  ${this.url}`);      
    }

    if(blackListFlags.length > 0){
      this.url += "?blacklistFlags="
      blackListFlags.map(flag => this.url += `${flag},`)
      this.url = this.url.slice(0,-1) //remove last comma
      //last step to get a single joke
      this.url += '&type=single'
    }else{
      //last step to get a single joke
      this.url += '?type=single'
    }
    console.log(`URL2:::  ${this.url}`);
    
    return this.http
    .get<ApiResponse>(`${this.url}`,{observe:'body'})
  }

}
