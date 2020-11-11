import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  list = [
    {id: 1, name: 'John Smith'},
    {id: 2, name: 'Anna Highland'},
    {id: 3, name: 'Emile Poiret'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
