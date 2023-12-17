import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h4>Counter: {{counter}}</h4>
    <button class="btn btn-info mx-2" (click)="changeValue(1)"> +1 </button>
    <button class="btn btn-info mx-2" (click)="reset()"> Reset </button>
    <button class="btn btn-info" (click)="changeValue(-1)"> -1 </button>
  `
})

export class CounterComponent {
  public counter: number = 0;

  constructor() { }

  changeValue(value: number): void{
    this.counter += value;
  }

  reset(){
    this.counter = 0;
  }
}