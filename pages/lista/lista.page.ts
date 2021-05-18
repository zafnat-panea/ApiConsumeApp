import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewserviceService } from '../../services/newservice.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  results: Observable<any>;
  movie: string;

  constructor(private router: Router, public newService: NewserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = this.route.snapshot.paramMap.get("movie");

    this.buscarpeliculas(this.movie);
  }

  volverAtras(){
    this.router.navigateByUrl("/home");
  }

  navegar(film){
    this.results = null;
    this.movie = film;
    this.buscarpeliculas(this.movie);
  }

  buscarpeliculas(x){
    this.results = this.newService.searchMovie(x);
  }
  
  info(id){
    this.router.navigateByUrl(`/lista/${this.movie}/info/${id}`);
  }
}
