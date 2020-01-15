import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../shared/service/moviedb.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title = "Clique Para Alterar o Idioma Filme";
  language: string;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.language = this.moviesService.getLanguage();
  }
  changeLanguage(lang : string) {
    if (lang === 'pt') this.moviesService.changeLanguage('pt');
    else this.moviesService.changeLanguage('en');
    location.reload();
  }
}
