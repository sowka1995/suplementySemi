import { Component , OnInit } from '@angular/core';
import { NavigationEnd , Router} from '@angular/router';

@Component({
  selector: 'app-supplement',
  templateUrl: './supplement.component.html',
  styleUrls: ['./supplement.component.css']
})
export class SupplementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url !== '/') {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        document.body.scrollTop = 0;
      });
    }
  }
}
