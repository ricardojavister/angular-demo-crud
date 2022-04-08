import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatSortModule, Sort } from "@angular/material/sort";
import { Factura } from "src/app/models/factura";
import { FinanzasService } from "src/app/services/finanzas.service";
import { Router } from "@angular/router";
import { FacturasCreateComponent } from "../facturas-create/facturas-create.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "src/app/shared/confirm-dialog/confirm-dialog.component";
import { NotificationService } from "src/app/core/services/notification.service";

@Component({
  selector: "app-facturas-list",
  templateUrl: "./facturas-list.component.html",
  styleUrls: ["./facturas-list.component.css"],
})
export class FacturasListComponent implements OnInit {
  displayedColumns: string[] = [
    "idFactura",
    "fecha",
    "descripcion",
    "valor",
    "valorIva",
    "rutaFactura",
    "Editar",
    "Eliminar",
  ];
  facturaSorted!: Factura[];
  dataSource!: MatTableDataSource<Factura>;
  directionLast: String = "asc";

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private service: FinanzasService,
    public dialog: MatDialog,
    private notificationService: NotificationService,
    private _router: Router
  ) {
    this.service.getAllFactura().subscribe((data) => {
      this.facturaSorted = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getAllFactura().subscribe((data: Factura[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  sortData(sort: Sort) {
    const data = this.facturaSorted.slice();
    sort.direction = this.directionLast === "asc" ? "desc" : "asc";
    this.facturaSorted = data.sort((a, b) => {
      let propertyA: number | string = "";
      let propertyB: number | string = "";
      switch (sort.active) {
        case "idFactura":
          [propertyA, propertyB] = [a.idFactura, b.idFactura];
          break;
        case "valor":
          [propertyA, propertyB] = [a.valor, b.valor];
          break;
        case "valorIva":
          [propertyA, propertyB] = [a.valorIva, b.valorIva];
          break;
        case "descripcion":
          [propertyA, propertyB] = [a.descripcion, b.descripcion];
          break;
        default:
          return 0;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
    });
    this.directionLast = sort.direction;
    this.dataSource = new MatTableDataSource<Factura>(this.facturaSorted);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FacturasCreateComponent, {
      width: "450px",
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }

  edit(factura: any) {
    const dialogRef = this.dialog.open(FacturasCreateComponent, {
      width: "450px",
      data: factura,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }

  delete(factura: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "450px",
      data: {
        title: "Confirmacion",
        message: "Seguro de eliminar esta factura ?",
      },
    });

    dialogRef.afterClosed().subscribe((response: boolean) => {
      if (response) {
        this.service.deleteFactura(factura).subscribe((data) => {
          this.notificationService.openSnackBar("Registro eliminado con exito");
          this.loadData();
        });
      }
    });
  }
}
