import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {
  reserva = "http://localhost/reserva";

  constructor(private http: HttpClient) {}

  enviarCompra(formulario: any) {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + "#ASDFGW#ERWQERTRYT#%$%$@#$%==."
    });
    return this.http.post(this.reserva, { headers: reqHeader }, formulario);
  }
}
