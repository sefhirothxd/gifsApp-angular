import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interface';

@Component({
  selector: 'gifts-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
