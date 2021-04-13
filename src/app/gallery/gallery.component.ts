import { Component, ElementRef, AfterViewInit, ViewChild } from "@angular/core";
import { ImageSaveService } from "../image-save.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild("result") resultCanvas: ElementRef;

  constructor(private imageSaveService: ImageSaveService) {}

  ngAfterViewInit() {
    const canvas = this.resultCanvas.nativeElement.getContext("2d");
    const image = new Image();
    image.src = this.imageSaveService.imageString[0];
    image.onload = () => {
      canvas.drawImage(image, 0, 0, 300, 300);
    };
  }
}
