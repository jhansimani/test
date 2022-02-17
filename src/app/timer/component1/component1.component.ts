import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  @Input() countDownTime: number = 0;
  @Output() timepausedat = new EventEmitter();
  @Input() resetvalue: any;
  constructor() {}
  intervalId = 0;
  duplicateval = 0;
  resetFlag = false;
  ngOnInit(): void {
    if (this.countDownTime) {
      this.duplicateval = this.countDownTime;
    }
    console.log(this.duplicateval);
  }
  start() {
    this.intervalId = window.setInterval(() => {
      this.countDownTime -= 1;
      if (this.countDownTime === 0) {
      } else {
        if (this.countDownTime < 0) {
          this.countDownTime = 10;
        } // reset
      }
    }, 1000);
  }
  reset() {
    this.resetFlag = true;
    this.countDownTime = this.resetvalue;
    this.clearTimer();
    console.log(this.countDownTime);

    console.log(this.duplicateval);
    // this.start();
  }
  pause() {
    this.clearTimer();
    this.timepausedat.emit(String(this.countDownTime));
  }
  clearTimer() {
    clearInterval(this.intervalId);
    console.log(this.countDownTime);
    if (this.resetFlag) {
      this.countDownTime = this.resetvalue;
    }
  }
}
