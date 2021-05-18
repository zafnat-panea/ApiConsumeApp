import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  movie: string;

  constructor(private router:Router){}

  ngOnInit(){
    
  }

  buscar(){
    this.router.navigateByUrl(`/lista/${this.movie}`);
  }
}
