import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplementService } from '../services/supplementService';
import { Supplement } from '../models/supplement';
import { Opinion } from '../models/opinion';

@Component({
  selector: 'app-supplement-info',
  templateUrl: './supplement-info.component.html',
  styleUrls: ['./supplement-info.component.css']
})
export class SupplementInfoComponent implements OnInit {
  supplementInfo: Supplement = new Supplement();
  newOpinion: Opinion = new Opinion();
  constructor(private route: ActivatedRoute, private supplementService: SupplementService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const supplementName = params['name'];

      this.supplementService.getSupplementByName(supplementName, (errors, supplement) => {
        this.supplementInfo = supplement;
      })

    })
	
	this.newOpinion.rate = 3;
  }

}
