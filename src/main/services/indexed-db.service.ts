import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private db?: IDBPDatabase;

  constructor() {
    this.initDB();
  }

  async initDB(): Promise<void> {
    this.db = await openDB('countryImagesDB', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('images')) {
          db.createObjectStore('images', { keyPath: 'id', autoIncrement: true });
        }
      }
    });
  }

  async saveImage(imageData: Blob): Promise<IDBValidKey> {
    if (this.db) {
      return await this.db.add('images', { image: imageData });
    }
    throw new Error('Database not initialized.');
  }

  async getImage(imageId: string): Promise<Blob | undefined> {
    if (this.db) {
      const parsedImageId = parseInt(imageId, 10); 
      return await this.db.get('images', parsedImageId);
    }
    throw new Error('Database not initialized.');
  }
}
