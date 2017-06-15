import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import {
    listAllCategories, listAllProducers, listAllSupplements, listFilteredSupplementsByCategory,
    listFilteredSupplementsByProducer
} from './../api';
import { Supplement } from "../models/supplement";
import { Opinion } from "../models/opinion";

import 'rxjs/add/operator/toPromise';
import { isNullOrUndefined } from "util";
import {SupplementService} from "../services/supplementService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public supplementsList: Array<Supplement> = new Array<Supplement>();
  public categoriesList: Array<string> = new Array<string>();
  public producersList: Array<string> = new Array<string>();

  error: { messages: Array<string>} = { messages: null };

  constructor(private http: Http, private router: Router, private supplement: SupplementService) { }

  ngOnInit() {
    this.handleListAll();
    this.handleCategoriesList();
    this.handleProducersList();
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
      this.supplement.getFilteredSupplementByCategories(categoryFilter, (errors, supplements) => {
          if (!errors) {
              this.supplementsList = supplements;
          } else {
              console.log(errors);
          }
      })

  }

  handleFilterSupplementsByProducer(producerFilter: string) {
      this.supplement.getFilteredSupplementsByProducers(producerFilter, (errors, supplements) => {
          if (!errors) {
              this.supplementsList = supplements;
          } else {
              console.log(errors);
          }
      })

  }


}
