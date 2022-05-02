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
    const stateParams = history.state;
    console.log(stateParams.user, stateParams.name);




    //console.log(this.router, this.routeActivate);
    //console.log(this.routeActivate.snapshot.url);
    //const [{path, parameters}] = this.routeActivate.snapshot.url;
    //const {user,name}= this.routeActivate.snapshot.params;
    //console.log(path, parameters['user']);
    //console.log(routeIndex, this.routeActivate.snapshot.params);
  }

}
