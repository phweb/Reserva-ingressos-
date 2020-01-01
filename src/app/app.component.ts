import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  Filmes: Array<any>;
  filme: any;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.filme = {};

    this.service.listar()
      .subscribe(resposta => this.Filmes = resposta);
  }

  criar(frm: FormGroup) {
    this.service.criar(this.filme).subscribe(resposta => {
      this.Filmes.push(resposta);

      frm.reset();
    });
  }
}
