import { Component, Inject, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as moment from "moment";
import { NotificationService } from "src/app/core/services/notification.service";
import { Cliente } from "src/app/models/cliente";
import { FinanzasService } from "src/app/services/finanzas.service";

@Component({
  selector: "app-clientes-create",
  templateUrl: "./clientes-create.component.html",
  styleUrls: ["./clientes-create.component.css"],
})
export class ClientesCreateComponent implements OnInit {
  message = "";
  form: any;
  errorMessage: any;
  readonly maxSize = 104857600;
  status: boolean = false;
  title: string = "";
  urlFactura: string = "";
  @Input() id?: number;

  constructor(
    private finanzasService: FinanzasService,
    public dialogRef: MatDialogRef<ClientesCreateComponent>,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: Cliente
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      valor: new FormControl("", Validators.required),
      valorIva: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required),
      fecha: new FormControl("", Validators.required),
      rutaFactura: new FormControl("", Validators.required),
    });
    this.loadData();
  }

  loadData() {
    if (this.data) {
      //Edit mode
      this.title = "Editar Factura";
      this.form.patchValue(this.data);
    } else {
      //New Mode
      this.title = "Registrar Factura";
    }
  }

  // onFormSubmit() {
  //   if (this.facturaForm.valid) {
  //     let data = this.getData();
  //     if (this.data) {
  //       this.updateFactura(data);
  //     } else {
  //       this.createFactura(data);
  //     }
  //   }
  // }

  // createFactura(factura: Factura) {
  //   this.finanzasService.postFactura(factura).subscribe(() => {
  //     this.notificationService.openSnackBar("Factura registrada con exito");
  //     this.facturaForm.reset();
  //     this.close();
  //   });
  // }

  // updateFactura(factura: Factura) {
  //   this.finanzasService.putFactura(factura).subscribe(() => {
  //     this.notificationService.openSnackBar("Factura actualizada con exito");
  //     this.facturaForm.reset();
  //     this.close();
  //   });
  // }

  // getData(): Factura {
  //   let data: Factura = {
  //     fecha: new Date(this.facturaForm.get("fecha").value),
  //     descripcion: this.facturaForm.get("descripcion").value,
  //     rutaFactura: this.facturaForm.get("rutaFactura").value,
  //     valor: Number(this.facturaForm.get("valor").value),
  //     valorIva: Number(this.facturaForm.get("valorIva").value),
  //     idFactura: this.data?.idFactura > 0 ? this.data?.idFactura : 0,
  //   };
  //   return data;
  // }

  // close() {
  //   this.facturaForm.reset();
  //   this.dialogRef.close();
  // }

  // updateUrlFactura(urlFactura: string) {
  //   this.facturaForm.controls["rutaFactura"].setValue(urlFactura);
  //   this.urlFactura = urlFactura;
  // }
}
