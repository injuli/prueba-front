import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  lastname: string;
  id: number;
  rol: string;
  status: string;
  telephon: number;
  email: string;
  action: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Andrés Felipe', lastname: 'Garcia Castro' , id: 114485404, rol: 'Administrador', status: 'Activo', telephon: 3165303978, email: 'afgarcia@refinal.com', action: ''},
  { name: 'Elizabeth', lastname: 'Arboleda' , id: 665789080, rol: 'Administrador', status: 'Inactivo', telephon: 3165303978,  email: 'earboleda@refinal.com', 
  action: ''},
  { name: 'Jader', lastname: 'Penagos', id: 665789043, rol: 'Conductor', status: 'Activo', telephon: 3175303978, email: 'jpenagos@refinal.com', action: ''},
  { name: 'Diana', lastname: 'Villa' , id: 1122567890, rol: 'Recolector', status: 'Activo', telephon: 3005303976, email: 'dvilla@refinal.com', action: ''},
  { name: 'Luis Andrés', lastname: 'Murillo', id: 1144198789, rol: 'Administrador', status: 'Activo', telephon: 3115134078, email: 'lamurillo@refinal.com',
   action: ''},
  { name: 'Jairo', lastname: 'Gutierrez', id: 44789056, rol: 'Coordinador', status: 'Activo', telephon: 3125333977, email: 'jgutierrez@refinal.com', action: ''},
  { name: 'Alexandra', lastname: 'Culcha', id: 1144198786, rol: 'Digitador CG-UNO', status: 'Inactivo', telephon: 3145439560, email: 'culcha@refinal.com',
   action: ''},
  { name: 'Valentina', lastname: 'Zapata', id: 72567788, rol: 'Recolector', status: 'Activo', telephon: 3157893970, email: '', action: 'vzapata@refinal.com'}
];

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements AfterViewInit   {

  displayedColumns: string[] = ['name', 'lastname', 'id', 'rol', 'status', 'telephon', 'email', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

