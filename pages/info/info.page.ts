import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewserviceService } from 'src/app/services/newservice.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router, public newService: NewserviceService, private route: ActivatedRoute) { }

  Runtime:string;
  idmovie:string;
  movie:string;
  imagen:string;
  titulo:string;
  year:string;
  Plot:string;
  Genre:string;
  Director:string;
  Language:string;
  Country:string;

  ngOnInit() {
    this.idmovie = this.route.snapshot.paramMap.get("id");
    this.movie = this.route.snapshot.paramMap.get("movie");
    this.newService.getMovieById(this.idmovie).subscribe(
      rest=>{
        this.Runtime = rest.Runtime;
        this.imagen = rest.Poster;
        this.titulo = rest.Title;
        this.year = rest.Year;
        this.Plot = rest.Plot;
        this.Genre = rest.Genre;
        this.Director = rest.Director;
        this.Language = rest.Language;
        this.Country = rest.Country;
      }
    );
  }

  volverAtras(){
    this.router.navigateByUrl(`/lista/${this.movie}`);
  }
}
