import { Component, OnInit, ViewChild } from '@angular/core';
import { Component1Component } from './component1/component1.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  @ViewChild(Component1Component) private timerComponent!: Component1Component;
  countdownValue!: number;
  allclickedValues: string[] = [];
  resetvalue:any;
  pausedvalue!: any;
  noOfStarts = 0;
  noOfPauses =0;
  constructor() {}

  ngOnInit(): void {}
  valueEmitted(value: any) {
    this.countdownValue = value;
  }
  startEmitted(event: boolean) {
    console.log('started', event);
  }
  pausedEmitted(event: boolean) {
    console.log('paused', event);
  }
  status(staus: { isStarted: boolean; isPaused: boolean }) {
    if (staus.isStarted) {
      this.timerComponent.start();
    } else if (staus.isPaused) {
      this.timerComponent.pause();
    }
  }
  resetEmitted(resetStatus: any) {
    this.resetvalue = resetStatus;
    this.timerComponent.reset();
  }
  timepausedat(event: any) {
    this.pausedvalue = event;
  }
  startTime(event: any) {
    this.allclickedValues.push(event);
  }
  pauseTime(event: any) {
    this.allclickedValues.push(event);
  }
  noOfStart(event: any) {
this.noOfStarts = event;
  }
  noOfPause(event: any) {
    this.noOfPauses = event;
    
  }
}
