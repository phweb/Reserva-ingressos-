import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Filme } from "../app/models/filme";
import { HttpClient } from "@angular/common/http";
import { AppService } from "./app.service";
import { MoviesService } from "./shared/service/moviedb.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ingressos: Array<any>;
  formulario: FormGroup;

  mostrarAcompanhate: boolean = false;
  filmes: any = [];
  constructor(
    private service: AppService,
    private movieservice: MoviesService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.validarFormulario();
    this.consultaFilmes();
  }

  validarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      ultimoNome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataDeNacimento: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      nomeAcompanhante: [null, Validators.required],
      ultimoNomeAcompanhante: [null, Validators.required],
      cpfAcompanhante: [null, Validators.required],
      dataDeNacimentoAcompanhante: [null, Validators.required],
      emailAcompanhante: [null, Validators.required, Validators.email],
      cep: [null, Validators.required],
      endereco: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      telefone: [null, Validators.required]
    });
  }
  async consultaFilmes(){
    try {
      const resultado = await this.movieservice
      .consultaApiFilmes()
      .subscribe(dados => {this.filmes = dados;});
      return resultado
    } catch (err) { return 'erro na chamada api filmes' }
}

  consultaCepEndereco(cep, formulario) {
    if (cep != null && cep !== "") {
      this.service
        .consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados, formulario));
    }
  }

  populaDadosForm(dados, form) {
    this.formulario = this.formBuilder.group({
      endereco: dados.logradouro,
      // cep: dados.cep,
      //complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }

  enviar() {
    this.service.enviarCompra(this.formulario.value).subscribe(resposta => {
      this.ingressos.push(resposta);
      this.formulario.reset();
    });
  }
}
