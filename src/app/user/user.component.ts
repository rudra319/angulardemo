import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const {id, uid} = this.activeRoute.snapshot.params;
    console.log(id, uid);
  }

}
