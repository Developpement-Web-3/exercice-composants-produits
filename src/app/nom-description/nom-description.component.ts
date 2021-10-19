import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nom-description',
  templateUrl: './nom-description.component.html',
  styleUrls: ['../shared/shared-styles.css', './nom-description.component.css']
})
export class NomDescriptionComponent implements OnInit {
  nom = 'Nom du produit'; 
  description = 'Description ....';

  constructor() { }

  ngOnInit(): void {
  }

}
