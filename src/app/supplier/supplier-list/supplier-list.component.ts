import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {
  list = [
    {id: 1, name: 'proveedor interno'},
    {id: 2, name: 'proveedor externo'},
    {id: 3, name: 'proveedor local'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
