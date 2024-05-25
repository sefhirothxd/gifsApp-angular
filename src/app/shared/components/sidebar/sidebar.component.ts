import { Component } from '@angular/core';
import { GiftsService } from '../../../gifs/services/gifrs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GiftsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  sendTag(item: string): void {
    this.gifsService.searchTag(item);
  }
}
