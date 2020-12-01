import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl:'./produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits: Produit[];

  constructor(private produitService :ProduitService) {
    this.produits = produitService.listeProduits();
  }
  
  supprimerProduit(p: Produit)
  {
    let conf = confirm("Etes-vous sur ?");
    if (conf)
      this.produitService.supprimerProduit(p);
  }

  ngOnInit(): void {
    
  }

}
