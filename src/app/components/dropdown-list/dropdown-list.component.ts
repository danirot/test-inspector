import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

export interface DdlConfig {
  label: string;
  id: string;
  placeholder?: string;
  tooltip?: string;
  required?: boolean;
  valueField?: string;
  optionLabels?: string[];
  separator?: string;
  withNone?: boolean;
}

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  // @ts-ignore
  @Input() ddlConfig: DdlConfig;

  @Input() control: FormControl;

  @Input() list: any[];

  @Output() change: EventEmitter<any>;

  constructor() {
    this.change = new EventEmitter<any>();
    this.control = new FormControl();
    this.list = [];
  }

  ngOnInit(): void {
  }

  selectionChange(): void {
    if (this.change && this.change.observers.length) {
      this.change.emit();
    }
  }

}
