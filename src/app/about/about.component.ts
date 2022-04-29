import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private routeActivate: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router, this.routeActivate);
  }

}
