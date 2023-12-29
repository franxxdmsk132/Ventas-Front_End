import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Persons} from "./Persons";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {


  private urlEndPoint:string = 'http://localhost:8080/persons/list';
  constructor(private http: HttpClient) { }

  getPersons() : Observable<Persons[]>{
    //return of(Clientes);
    return this.http.get<Persons[]>(this.urlEndPoint);
  }
}
