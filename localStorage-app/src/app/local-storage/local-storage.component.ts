import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-local-storage',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss'],
  providers: [LocalStorageService],
})
export class LocalStorageComponent {
  @Input() data!: any;

  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  constructor(public lsservice: LocalStorageService) {}

  addItem() {
    this.lsservice.addData(this.data)
  }

  getItem() {
    this.dataChange.emit(this.lsservice.getData(this.data.key));
  }
}
