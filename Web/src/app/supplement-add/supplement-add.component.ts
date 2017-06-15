import { Component, OnInit } from '@angular/core';
import { Supplement } from '../models/supplement';
import { SupplementService } from '../services/supplementService';

@Component({
  selector: 'app-supplement-add',
  templateUrl: './supplement-add.component.html',
  styleUrls: ['./supplement-add.component.css']
})
export class SupplementAddComponent implements OnInit {
  supplement: Supplement;
  producersList: Array<string>;
  categoriesList: Array<string>;
  imageAdded: boolean = false;
  constructor(private supplementService: SupplementService) {
    this.supplement = new Supplement();
  }

  ngOnInit() {
    this.prepareProducers();
    this.prepareCatgories();
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.handleAddSupplement();
  }

  private prepareProducers() {
    this.supplementService.getAllProducers((errors, producers) => {
      if (!errors) {
        this.producersList = producers;
      } else {
        this.producersList = new Array<string>();
      }
    })
  }

  private prepareCatgories() {
    this.supplementService.getAllCategories((errors, categories) => {
      if (!errors) {
        this.categoriesList = categories;
      } else {
        this.categoriesList = new Array<string>();
      }
    })
  }

  handleAddSupplement() {
    console.log(this.supplement)
    this.supplementService.postAddSupplement(this.supplement, (error, success) => {
      if (!error) {
        console.log(success)
      } else {
        console.log(error);
      }
    })
  }

  handleImage(event) {
    this.supplement.imageSource = event.src;
    this.supplement.image = event.file.name;
  }
}
