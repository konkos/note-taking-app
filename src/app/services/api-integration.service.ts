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

  getApiResult(categories:String[], blackListFlags:String[], isdoubleJoke:Boolean){
    
    if(isdoubleJoke){
      return this.getApiResultDoubleJoke(categories,blackListFlags)
    }

    if(categories.length==0 && blackListFlags.length==0){
      return this.http.get<ApiResponse>(`${this.url}Any?type=single`,{observe:'body'})
    }
  
    this.addCategoriesIntoURL(categories)
    let areBlackFlagsAdded = this.addBlackListFlagsIntoURL(blackListFlags)
    this.finaliseSingleJokeRequest(areBlackFlagsAdded)

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

  private addBlackListFlagsIntoURL(blackListFlags:String[]):boolean {
    if(blackListFlags.length > 0){
      this.url += "?blacklistFlags="
      blackListFlags.map(flag => this.url += `${flag},`)
      this.url = this.removeLastComma(this.url)
      return true
    }else{ 
      return false
    }
  }

//last step to get a single joke
  private finaliseSingleJokeRequest(areBlackFlagsAdded:boolean){
    if(areBlackFlagsAdded){
      this.url += '&type=single'
    }else{
      this.url += '?type=single'
    }
  }

  //last step to get a single joke
  private finaliseTwoPartJokeRequest(areBlackFlagsAdded:boolean){
    if(areBlackFlagsAdded){
      this.url += '&type=twopart'
    }else{
      this.url += '?type=twopart'
    }
  }

  getApiResultDoubleJoke(categories:String[], blackListFlags:String[]){
    if(categories.length==0 && blackListFlags.length==0){
      let res = this.http.get<ApiResponse>(`${this.url}Any?type=twopart`,{observe:'body'})
      return res
    }
    
    this.addCategoriesIntoURL(categories)
    let areBlackListFlagsAdded = this.addBlackListFlagsIntoURL(blackListFlags)
    this.finaliseTwoPartJokeRequest(areBlackListFlagsAdded)

    let res = this.http.get<ApiResponse>(`${this.url}`,{observe:'body'})
    this.url = 'https://v2.jokeapi.dev/joke/' 
    return res
  }

}
