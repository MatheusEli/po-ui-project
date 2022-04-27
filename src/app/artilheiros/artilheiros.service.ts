import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Artilheiro } from "./artilheiro";

@Injectable()
export class ArtilheirosService{

    constructor(private http: HttpClient){}

    getItems(): Observable<Artilheiro[]>{
        return this.http.get<Artilheiro[]>('http://localhost:3000/artilheiros')
    }
}