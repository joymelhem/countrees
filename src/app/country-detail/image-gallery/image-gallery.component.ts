import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LightboxComponent } from 'src/app/lightbox/lightbox.component';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
  @Input() images!: { url: string }[];
  currentIndex: number = 0;

  constructor(private dialog: MatDialog) {}

  openLightbox(): void {
    this.dialog.open(LightboxComponent, {
      data: {
        images: this.images,
        currentIndex: this.currentIndex
      }
    });
  }
}
