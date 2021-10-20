import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['../shared/shared-styles.css', './liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  titre = 'Liste produits';
  produit1 :Produit = {id:'1', nom:'Produit 1', description:'Description du produit 1...', prix : 100};
  produit2 :Produit = {id:'2', nom:'Produit 2', description:'Description du produit 2...', prix : 200};

  constructor() { }

  ngOnInit(): void {
  }

}
