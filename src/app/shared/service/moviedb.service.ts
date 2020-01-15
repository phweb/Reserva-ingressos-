import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class MoviesService {

  // adiciona sua chave api exemplo:  private apiKey = "123456789";
  private apiKey = "";
  private language;
  constructor(private http: HttpClient) {
    if (localStorage.getItem("lang") == "pt") this.language = "pt";
    else this.language = "en";
  }

  consultaApiFilmes(){
    return this.http.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=${this.language}`
    );
  }



  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.language = lang;
  }

  getLanguage() {
    return this.language;
  }


}
