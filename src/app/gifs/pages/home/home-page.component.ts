import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifrs.service';
import { Gif } from '../../interfaces/gifts.interface';

@Component({
  selector: 'gifs-page-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GiftsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
