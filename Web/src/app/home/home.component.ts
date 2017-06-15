import { Component, OnInit } from '@angular/core';
import { Supplement } from '../models/supplement';
import { SupplementService } from '../services/supplementService';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  supplementsList: Array<Supplement> = new Array<Supplement>();
  categoriesList: Array<string> = new Array<string>();
  producersList: Array<string> = new Array<string>();
  suppNameFilter: string;
  selectedProducer: string;
  selectedCategory: string;
  error: { messages: Array<string>} = { messages: null };

  constructor(private supplement: SupplementService) { }

  ngOnInit() {
    this.handleListAll();
    this.handleCategoriesList();
    this.handleProducersList();
    this.suppNameFilter = '';
  }

  handleListAll() {
    this.error = {messages: null};

    this.supplement.getAllSupplements((errors, supplements) => {
        if (!errors) {
            this.supplementsList = supplements;
        } else {
            this.error.messages = errors;
        }
    })

  }

  handleCategoriesList() {
    this.supplement.getAllCategories((errors, categories) => {
        if (!errors){
            this.categoriesList = categories;
        } else {
            console.log(errors);
        }
    })

  }

  handleProducersList() {
    this.supplement.getAllProducers((errors, producers) => {
        if (!errors){
            this.producersList = producers;
        } else {
            console.log(errors);
        }
    })

  }

  handleFilterSupplementsByCategory(categoryFilter: string) {
      this.selectedCategory = categoryFilter;
      this.selectedProducer = null;
      this.supplement.getFilteredSupplementByCategories(categoryFilter, (errors, supplements) => {
          if (!errors) {
              this.supplementsList = supplements;
          } else {
              console.log(errors);
          }
      })

  }

  handleFilterSupplementsByProducer(producerFilter: string) {
      this.selectedProducer = producerFilter;
      this.selectedCategory = null;
      this.supplement.getFilteredSupplementsByProducers(producerFilter, (errors, supplements) => {
          if (!errors) {
              this.supplementsList = supplements;
          } else {
              console.log(errors);
          }
      })

  }


}
