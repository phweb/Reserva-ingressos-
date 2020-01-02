import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ingressos: Array<any>;
  formulario: FormGroup;

  constructor(private service: AppService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.validarFormulario();
    this.service.listar().subscribe(resposta => (this.ingressos = resposta));
  }

  validarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      ultimoNome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataDeNacimento: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      cep: [null, Validators.required],
      endereco: [null, Validators.required],
      pais: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      telefone: [null, Validators.required]
    });
  }

  mostrarAcompanhate: boolean = false;

  enviar() {
    this.service.buscarCep(this.formulario.value).subscribe(resposta => {
      this.ingressos.push(resposta);
      this.formulario.reset();
    });
  }
}
