import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../shared/layout/layout.component";
import { FacturasCreateComponent } from "./facturas/facturas-create/facturas-create.component";
import { FacturasListComponent } from "./facturas/facturas-list/facturas-list.component";
import { ProductosCreateComponent } from "./productos/productos-create/productos-create.component";
import { ProductosListComponent } from "./productos/productos-list/productos-list.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "facturas/facturas-list", component: FacturasListComponent },
      { path: "facturas/facturas-create", component: FacturasCreateComponent },
      { path: "productos/productos-list", component: ProductosListComponent },
      {
        path: "productos/productos-create",
        component: ProductosCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanzasRoutingModule {}
