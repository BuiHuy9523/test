import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  readonly SMALL_GAP = 10;
  private config = {
    header: 84,
    sideBarWidth: 400,
    mainWidth: 400
  };

  increaseHeader() {
    this.config.header += this.SMALL_GAP;
  }

  decreaseHeader() {
    this.config.header -= this.SMALL_GAP;
  }
  constructor() {
  }

  ngOnInit() {
  }

  get header(): number {
    return this.config.header;
  }

  set header(value: number) {
    this.config.header = value;
  }

  get sideBarWidth(): number {
    return this.config.sideBarWidth;
  }

  set sideBarWidth(value: number) {
    this.config.sideBarWidth = value;
  }

  get mainWidth(): number {
    return this.config.mainWidth;
  }

  set mainWidth(value: number) {
    this.config.mainWidth = value;
  }
}
