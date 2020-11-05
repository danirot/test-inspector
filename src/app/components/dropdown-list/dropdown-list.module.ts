import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownListComponent} from './dropdown-list.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DropdownListComponent],
  exports: [
    DropdownListComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule
  ]
})
export class DropdownListModule {
}
