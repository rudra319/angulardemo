import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router, private routeActivate: ActivatedRoute) { }

  ngOnInit(): void {
    const [routeIndex] = this.routeActivate.snapshot.url;
    const {path} = routeIndex;
    console.log(routeIndex.path, path);
  }

}
