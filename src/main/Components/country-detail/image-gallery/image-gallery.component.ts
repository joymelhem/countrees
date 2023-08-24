import { Component, Input, OnInit } from '@angular/core';
import { IndexedDBService } from 'src/main/services/indexed-db.service';
import { AuthenticationService } from 'src/authentication/services/authentication.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() countryImage: string | undefined;
  imageId: IDBValidKey | undefined;
  imageUrl: string | undefined;
  selectedFile: File | undefined;
  isAdmin: boolean = false;

  constructor(
    private indexedDBService: IndexedDBService,
    private authService: AuthenticationService
  ) {}

  async ngOnInit(): Promise<void> {
    this.isAdmin = this.authService.isAdmin();

    if (this.countryImage) {
      const imageData = await fetch(this.countryImage).then(response => response.blob());
      this.imageId = await this.indexedDBService.saveImage(imageData);
      this.displayImage();
    }
  }

  async displayImage(): Promise<void> {
    if (this.imageId !== undefined) {
      const imageBlob = await this.indexedDBService.getImage(this.imageId.toString());
      if (imageBlob) {
        const imageUrl = URL.createObjectURL(new Blob([imageBlob], { type: 'image/jpeg' }));
        this.imageUrl = imageUrl;
      }
    }
  }
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  async uploadImage(): Promise<void> {
    if (this.selectedFile) {
      const imageBlob = await this.selectedFile.arrayBuffer();
      this.imageId = await this.indexedDBService.saveImage(new Blob([imageBlob]));
      this.displayImage();
    }
  }
}
