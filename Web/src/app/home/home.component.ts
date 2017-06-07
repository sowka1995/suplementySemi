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

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.handleListAll();
    this.handleCategoriesList();
    this.handleProducersList();
  }

  handleListAll() {
    this.error = {messages: null};

    this.http.get(listAllSupplements)
        .toPromise()
        .then((response) => {
         // dodanie wszystkich itemow do listy
         response.json().forEach((supplement) => {
             let item = new Supplement();
             item.id = supplement._id;
             item.name = supplement.name;
             item.category = supplement.category;
             item.producer = supplement.producer;
             item.description = supplement.description;
             item.price = supplement.price;
             item.amount = supplement.amount;
             item.image = supplement.image;

             if (!isNullOrUndefined(supplement.opinions)) {
                 let count = 0;
                 let opinions: Array<Opinion> = new Array<Opinion>();
                 supplement.opinions.forEach(o => {
                    let opinion = new Opinion();
                    opinion.comment = o.comment;
                    opinion.commentDate = o.commentDate;
                    opinion.rate = o.rate;
                    opinions.push(opinion);
                    count += o.rate;
                 });
                 item.opinions = opinions;
                 item.rate = new Array(Math.round(count/supplement.opinions.length));
             }

             this.supplementsList.push(item);
         });
        })
        .catch((errors) => {
            console.log(errors);
        });
  }

  handleCategoriesList() {
    this.http.get(listAllCategories)
        .toPromise()
        .then((response) => {
            response.json().forEach((item) => {
               this.categoriesList.push(item.category)
            });
        })
        .catch((errors) => {
            console.log(errors);
        })
  }

  handleProducersList() {
    this.http.get(listAllProducers)
        .toPromise()
        .then((response) => {
            response.json().forEach((item) => {
                this.producersList.push(item.producer)
            });
        })
        .catch((errors) => {
            console.log(errors);
        })
  }

  handleFilterSupplementsByCategory(categoryFilter: string) {
      this.http.get(listFilteredSupplementsByCategory(categoryFilter))
          .toPromise()
          .then((response) => {
              this.supplementsList = new Array<Supplement>();
              // dodanie wszystkich itemow do listy
              response.json().forEach((supplement) => {
                  let item = new Supplement();
                  item.id = supplement._id;
                  item.name = supplement.name;
                  item.category = supplement.category;
                  item.producer = supplement.producer;
                  item.description = supplement.description;
                  item.price = supplement.price;
                  item.amount = supplement.amount;
                  item.image = supplement.image;

                  if (!isNullOrUndefined(supplement.opinions)) {
                      let count = 0;
                      let opinions: Array<Opinion> = new Array<Opinion>();
                      supplement.opinions.forEach(o => {
                          let opinion = new Opinion();
                          opinion.comment = o.comment;
                          opinion.commentDate = o.commentDate;
                          opinion.rate = o.rate;
                          opinions.push(opinion);
                          count += o.rate;
                      });
                      item.opinions = opinions;
                      item.rate = new Array(Math.round(count / supplement.opinions.length));
                  }

                  this.supplementsList.push(item);
              });
          })
          .catch((errors) => {

          })
  }

  handleFilterSupplementsByProducer(producerFilter: string) {
    this.http.get(listFilteredSupplementsByProducer(producerFilter.toString()))
        .toPromise()
        .then((response) => {
            this.supplementsList = new Array<Supplement>();
            // dodanie wszystkich itemow do listy
            response.json().forEach((supplement) => {
                let item = new Supplement();
                item.id = supplement._id;
                item.name = supplement.name;
                item.category = supplement.category;
                item.producer = supplement.producer;
                item.description = supplement.description;
                item.price = supplement.price;
                item.amount = supplement.amount;
                item.image = supplement.image;

                if (!isNullOrUndefined(supplement.opinions)) {
                    let count = 0;
                    let opinions: Array<Opinion> = new Array<Opinion>();
                    supplement.opinions.forEach(o => {
                        let opinion = new Opinion();
                        opinion.comment = o.comment;
                        opinion.commentDate = o.commentDate;
                        opinion.rate = o.rate;
                        opinions.push(opinion);
                        count += o.rate;
                    });
                    item.opinions = opinions;
                    item.rate = new Array(Math.round(count / supplement.opinions.length));
                }

                this.supplementsList.push(item);
            });
        })
        .catch((errors) => {

        })
    }


}
