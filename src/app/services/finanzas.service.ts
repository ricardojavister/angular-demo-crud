import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Factura } from "../models/factura";
import { Response } from "../models/response";

@Injectable({
  providedIn: "root",
})
export class FinanzasService {
  api = "/api/Factura";
  constructor(private http: HttpClient) {}

  getAllFactura(): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${environment.apiEndpoint}${this.api}`);
  }

  getByIdFactura(id: number): Observable<Factura> {
    return this.http.get<Factura>(
      `${environment.apiEndpoint}${this.api}GetById?Id=${id}`
    );
  }

  postFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(
      `${environment.apiEndpoint}${this.api}`,
      factura
    );
  }

  putFactura(factura: Factura): Observable<Factura> {
    return this.http.put<Factura>(
      `${environment.apiEndpoint}${this.api}`,
      factura
    );
  }

  deleteFactura(factura: Factura): Observable<any> {
    return this.http.post<Response>(
      `${environment.apiEndpoint}${this.api}/Delete`,
      factura
    );
  }
}
