import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostitService {
  apiURL: string = "https://api.keyvalue.xyz/a17766c6/myKey"

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    let x = this.http.get (this.apiURL);
    console.log (x);
    return this.http.get(x);
  }

}