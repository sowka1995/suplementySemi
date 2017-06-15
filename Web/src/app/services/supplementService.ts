import { Injectable , } from '@angular/core';
import { Http } from '@angular/http';
import { Supplement } from './../models/supplement';
import { Opinion } from './../models/opinion';

import 'rxjs/add/observable/of';

import {
    listAllCategories, listAllProducers, listAllSupplements, listFilteredSupplementsByCategory,
    listFilteredSupplementsByProducer
} from '../api';
import { isNullOrUndefined } from 'util';

@Injectable()
export class SupplementService {

    constructor(private http: Http) { }

    getAllSupplements(callback) {
        this.http.get(listAllSupplements)
            .toPromise()
            .then((response) => {
                let productsList = new Array<Supplement>();
                // dodanie wszystkich itemow do listy
                response.json().forEach((supplement) => {
                    let item = this.assignValues(supplement);

                    productsList.push(item);
                });

                callback(null, productsList);
            })
            .catch((errors) => {
                callback(errors, null);
            });
    }

    getAllCategories(callback) {
        this.http.get(listAllCategories)
            .toPromise()
            .then((response) => {
                let categories = new Array<string>();
                response.json().forEach((item) => {
                    categories.push(item.category)
                });

                callback(null, categories);
            })
            .catch((errors) => {
                callback(errors, null);
            })
    }

    getAllProducers(callback) {
        this.http.get(listAllProducers)
            .toPromise()
            .then((response) => {
                let producers = new Array<string>();
                response.json().forEach((item) => {
                    producers.push(item.producer)
                });

                callback(null, producers);
            })
            .catch((errors) => {
                callback(errors, null);
            })
    }

    getFilteredSupplementByCategories(categoryFilter, callback) {
        this.http.get(listFilteredSupplementsByCategory(categoryFilter))
            .toPromise()
            .then((response) => {
                let supplements = new Array<Supplement>();
                // dodanie wszystkich itemow do listy
                response.json().forEach((supplement) => {
                    let item = this.assignValues(supplement);

                    supplements.push(item);
                });

                callback(null, supplements);
            })
            .catch((errors) => {
                callback(errors, null);
            })
    }

    getFilteredSupplementsByProducers(producerFilter, callback) {
        this.http.get(listFilteredSupplementsByProducer(producerFilter.toString()))
            .toPromise()
            .then((response) => {
                let supplements = new Array<Supplement>();
                // dodanie wszystkich itemow do listy
                response.json().forEach((supplement) => {
                    let item = this.assignValues(supplement);

                    supplements.push(item);
                });

                callback(null, supplements);
            })
            .catch((errors) => {
                callback(errors, null);
            })
    }

    private assignValues(supplement): Supplement {
        let item = new Supplement();
        item.id = supplement._id;
        item.name = supplement.name;
        item.weight = supplement.weight;
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

        return item;
    }
}
