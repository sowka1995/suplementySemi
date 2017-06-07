import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { listAllSupplements } from './../api';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public suppleItem: Object = new Object();
  handlingListAll: Boolean = false;
  error: { messages: Array<string>} = { messages: null };

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.handleListAll();
  }

  handleListAll() {
    this.handlingListAll = true;

    this.error = {messages: null};

    this.http.get(listAllSupplements)
        .toPromise()
        .then((response) => {
          console.log(response.json()[0].name)
          this.suppleItem = response.json()[0];
          console.log(this.suppleItem.);
        })
        .catch((errors) => {
            console.log(errors);
        });
  }
}
