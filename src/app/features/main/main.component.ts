import { style, transition, trigger, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class MainComponent {}
