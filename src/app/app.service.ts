import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  reserva = "http://localhost/reserva";

  constructor(private http: HttpClient) {}

  consultaCEP(cep: string) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, "");

    // Verifica se campo cep possui valor informado.
    if (cep !== "") {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});
  }

  enviarCompra(formulario: any) {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + "#ASDFGW#ERWQERTRYT#%$%$@#$%==."
    });
    return this.http.post(this.reserva, { headers: reqHeader }, formulario);
  }
}
