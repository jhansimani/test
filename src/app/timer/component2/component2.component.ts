import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
})
export class Component2Component implements OnInit {
  @Input() timeValue: number = 0;
  @Input() pausedat: number = 0;
  val = 0;
  value = '';
  inputForm!: FormGroup;
  @Output() valueEmitted = new EventEmitter();
  @Output() startEmitted = new EventEmitter();
  @Output() pausedEmitted = new EventEmitter();
  @Output() resetEmitted = new EventEmitter();
  @Output() status = new EventEmitter();
  @Output() startTime = new EventEmitter();
  @Output() pauseTime = new EventEmitter();
  @Output() noOfStarts = new EventEmitter();
  @Output() noOfPauses = new EventEmitter();
  constructor(private datepipe: DatePipe) {}
  isStarted = false;
  isPaused = false;
  click = 0;
  startTracker = 0;
  pauseTracker = 0;
  initialTime!: any;
  // constructor() {}

  ngOnInit(): void {
    this.initialTime = this.timeValue;
  }
  start() {
    if (this.value) {
      if (this.isStarted === false) {
        this.startTracker = this.startTracker + 1;
        this.isStarted = true;
        this.isPaused = false;
        const time = new Date();
        // this.startTime.emit('started at' + time.toLocaleString());
        this.startTime.emit({ status: 'started at ', time: time });
      } else {
        this.isPaused = true;
        this.isStarted = false;
        this.pauseTracker = this.pauseTracker + 1;
        const time = new Date();
        // this.datepipe.transform(time,'dd-m-yyyy');
        // this.pauseTime.emit('paused at ' + time);
        this.pauseTime.emit({ status: 'paused at  ', time: time });
      }
      let clickStatus = { isStarted: this.isStarted, isPaused: this.isPaused };
      this.startEmitted.emit(this.isStarted);
      this.pausedEmitted.emit(this.isPaused);
      this.status.emit(clickStatus);
      this.noOfStarts.emit(this.startTracker);
      this.noOfPauses.emit(this.pauseTracker);
    }
    console.log(this.value);
  }
  valueposted(value: any) {
    this.valueEmitted.emit(Number(this.value));
  }
  pause() {
    this.isStarted = false;
    this.isPaused = false;
    this.resetEmitted.emit(true);
  }
  reset() {
    this.isStarted = false;
    this.isPaused = false;
    this.resetEmitted.emit(this.timeValue);
    this.startEmitted.emit(this.isStarted);
    this.pausedEmitted.emit(this.isPaused);
    this.noOfStarts.emit('');
    this.noOfPauses.emit('');
    this.startTime.emit({});
    this.pauseTime.emit({});
  }
}
