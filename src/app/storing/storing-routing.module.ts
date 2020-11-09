import { OutgoingComponent } from './outgoing/outgoing.component';
import { IncomingComponent } from './incoming/incoming.component';
/* import { StoringListComponent } from '../../../src/app/storing/list/list.component'; */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /* {path: '', component: StoringListComponent}, */
  {path: 'incoming', component: IncomingComponent},
  {path: 'outgoing', component: OutgoingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
