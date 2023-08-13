import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent {
  images: { url: string }[];
  currentIndex: number;

  constructor(
    public dialogRef: MatDialogRef<LightboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { images: any[], currentIndex: number }
  ) {
    this.images = data.images;
    this.currentIndex = data.currentIndex;
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  closeLightbox() {
    this.dialogRef.close();
  }
}
