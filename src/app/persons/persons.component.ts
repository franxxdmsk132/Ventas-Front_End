import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api/api.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']  // Usa 'styleUrls' en lugar de 'styleUrl'
})
export class PersonsComponent implements OnInit {
  Persons: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPersons().subscribe((persons) => {
      this.Persons = persons;
    });
  }

  protected readonly parent = parent;
}
