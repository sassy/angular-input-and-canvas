import { Injectable } from "@angular/core";

@Injectable()
export class ImageSaveService {
  imageString: string[] = [];

  addImage(image: string): void {
    this.imageString.push(image);
  }
}
