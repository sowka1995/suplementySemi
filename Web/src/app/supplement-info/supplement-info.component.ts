import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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
  image: string;
  constructor(private route: ActivatedRoute, private router: Router, private supplementService: SupplementService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const supplementName = params['name'];

      this.supplementService.getSupplementByName(supplementName, (errors, supplement) => {
        this.supplementInfo = supplement;
		this.newOpinion.id = this.supplementInfo.id;
		this.image = '../../assets/images/' + this.supplementInfo.image;
      })
	  
    });
	
	this.newOpinion.rate = 3;
  }
  
  onSubmit(form) {
	let dateNow = new Date();
	this.newOpinion.commentDate = this.formatDate(dateNow);
    this.handleAddSupplementOpinion((result) => {
		if (result) {
			let op = new Opinion();
			op.comment = this.newOpinion.comment;
			op.commentDate = this.newOpinion.commentDate;
			op.rate = this.newOpinion.rate;
			this.supplementInfo.opinions.unshift(op);
			form.reset();
			this.newOpinion.rate = 3;
			this.newOpinion.comment = '';
		}
	});
  }

  handleDeleteSupplement() {
    this.supplementService.postDeleteSupplement(this.supplementInfo.id, (error, result) => {
        if (!error) {
            console.log(error);
        }
        this.router.navigate(['']);
    })
  }

  private formatDate(date: Date): string {
	return date.getDate() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();
  }

  private handleAddSupplementOpinion(callback) {
	this.supplementService.postAddSupplementOpinion(this.newOpinion, (errors, success) => {
	    if (success) {
            callback(true);
        } else {
	        callback(false);
        }
	})
	
  }
}
