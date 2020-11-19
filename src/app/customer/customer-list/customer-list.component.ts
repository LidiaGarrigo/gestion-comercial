import { Component, OnInit } from '@angular/core';
import { Customer } from '../../shared/Interface/customer';
import { list } from '../../data/customers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[];

/*   list = [
    {id:1, name: 'John Smith'},
    {id:2, name: 'Anna Highland'},
    {id:3, name: 'Emile Poiret'},
    {id:4, name: 'Emile Poiret'},
    {id:5, name: 'Emile Poiret'},
  ] */
  constructor() {
    this.customers = list;
  }
  customerTrackerFunction(index: number, customer: any) {
    return customer.id;
}
  ngOnInit(): void {
  }
}
