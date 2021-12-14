import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {

  url:String = 'https://v2.jokeapi.dev/joke/'
  public categoriesLIST:String[] = ['Programming','Miscellaneous','Dark','Pun','Spooky','Christmas']
  blackListFlagsLIST = ['nsfw','religious','political','racist','sexist','explicit']
  constructor(private http:HttpClient) { }

  getApiResult(categories:String[], blackListFlags:String[]){
    
    this.addCategoriesIntoURL(categories)
    this.addBlackListFlagsIntoURL(blackListFlags)

    console.log(`URL2:::  ${this.url}`);
    let res = this.http.get<ApiResponse>(`${this.url}`,{observe:'body'})
    this.url = 'https://v2.jokeapi.dev/joke/'
    return res
  }

  private removeLastComma(str:String):String {
    return str.slice(0,-1)
  }

  private addCategoriesIntoURL(categories:String[]) {
    if(categories.length <= 0){ return }

    categories.map(category => this.url += `${category},`)
    this.url = this.removeLastComma(this.url)
    console.log(`URL1:::  ${this.url}`);      
  }

  private addBlackListFlagsIntoURL(blackListFlags:String[]) {
    if(blackListFlags.length > 0){
      this.url += "?blacklistFlags="
      blackListFlags.map(flag => this.url += `${flag},`)
      this.url = this.removeLastComma(this.url)
      //last step to get a single joke
      this.url += '&type=single'
    }else{
      //last step to get a single joke
      this.url += '?type=single'
    }
  }

}
