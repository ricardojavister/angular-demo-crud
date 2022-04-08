import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FacturasListComponent } from "./facturas/facturas-list/facturas-list.component";
import { FinanzasRoutingModule } from "./finanzas-routing.module";
import { FacturasCreateComponent } from "./facturas/facturas-create/facturas-create.component";
import { ClientesCreateComponent } from "./clientes/clientes-create/clientes-create.component";
import { ClientesListComponent } from "./clientes/clientes-list/clientes-list.component";
import { ProductosListComponent } from "./productos/productos-list/productos-list.component";
import { ProductosCreateComponent } from "./productos/productos-create/productos-create.component";

@NgModule({
  declarations: [
    FacturasListComponent,
    FacturasCreateComponent,
    ClientesCreateComponent,
    ClientesListComponent,
    ProductosListComponent,
    ProductosCreateComponent,
  ],
  imports: [CommonModule, SharedModule, FinanzasRoutingModule],
})
export class FinanzasModule {}
