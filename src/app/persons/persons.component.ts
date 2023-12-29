import {Component, OnInit} from '@angular/core';
import {Persons} from "./Persons";
import {PersonsService} from "./persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']  // Usa 'styleUrls' en lugar de 'styleUrl'
})
export class PersonsComponent implements OnInit {
  Persons: Persons[] = [];

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personsService.getPersons().subscribe((persons) => {
      this.Persons = persons;
    });
  }

  protected readonly parent = parent;
}
