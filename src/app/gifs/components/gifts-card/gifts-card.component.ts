import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interface';

@Component({
  selector: 'gifts-gifts-card',
  templateUrl: './gifts-card.component.html',
})
export class GiftsCardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gif property is requied');
    }
  }
}
