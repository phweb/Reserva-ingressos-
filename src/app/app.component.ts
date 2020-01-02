import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Filme } from "../app/models/filme";
import { HttpClient } from "@angular/common/http";
import { AppService } from "./app.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ingressos: Array<any>;
  formulario: FormGroup;

  mostrarAcompanhate: boolean = false;
  filmes: Filme[] = [
    { id: 1, nome: "Frozen 2" },
    { id: 2, nome: "Star Wars - The Rise of Skywalker" },
    { id: 3, nome: "Avengers - Infinity War" }
  ];

  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.validarFormulario();
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
      pais: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      telefone: [null, Validators.required]
    });
  }

  consultaCEP(cep) {
    //Nova variavel "cep" somente com digitos.
    cep = cep.replace(/\D/g, "");
    // Verifica se campo cep possui valor informado
    if (cep != "") {
      // Expressão regular para validar o cep
      var validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        this.http
          .get(`http://viacep.com.br/ws/${cep}/json/`);

      }
    }
  }

  enviar() {
    this.service.enviarCompra(this.formulario.value).subscribe(resposta => {
      this.ingressos.push(resposta);
      this.formulario.reset();
    });
  }
}
