import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { list } from 'src/app/data/customers';
import {Customer} from '../../shared/Interface/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer = {};
  formGroup: FormGroup;
  hidden: boolean;

  constructor(private routes: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.refresh();
    this.formGroup = this.fb.group(this.customer);
  }
  refresh(){
    this.routes.params.subscribe(
      (params: Params) => {
        this.customer = {...params};
      }
    );
  }

  edit(){
    this.hidden = false;
    this.formGroup.setValue(this.customer);
  }

  saveData(){
    this.hidden = true;
    this.customer = this.formGroup.value;
    list.splice(list.findIndex(e => e.id == this.customer.id), 1, this.formGroup.value)
  }

  private buildForm(name: string){
    /* const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = this.name;
    const minPassLength = 4; */
    this.formGroup = this.fb.group({
      /* registeredOn: today, */
      name: [name || '', Validators.required],
      /* email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(minPassLength),
        this.validatePassword */
      /* ]] */
    });
  }
  private validatePassword(control: AbstractControl) {
    const password = control.value;
    let error = null;
    if (!password.includes('$')) {
      error = { ...error, 'needs a dollar symbol':'dollar' };
    }
    if (!parseFloat(password[0])) {
      error = { ...error, 'must start with a number':'number' };
    }
    return error;
  }
  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }
  public getError(controlName: string): string[] {
    let error =  [];
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
     // error = JSON.stringify(control.errors);
      error = [...Object.keys(control.errors)];
    }
    return error;
  }

}
