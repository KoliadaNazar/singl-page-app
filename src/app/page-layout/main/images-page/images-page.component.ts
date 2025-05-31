import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TypesGraphicsComponent } from './types-graphics/types-graphics.component';
import { RasterImgComponent  } from './raster-img/raster-img.component';
import { VectorGraphicsComponent  } from './vector-graphics/vector-graphics.component';
import { CompressImgComponent } from './compress-img/compress-img.component';


@Component({
  selector: 'app-images-page',
  imports: [
    HeroBannerComponent,
    TypesGraphicsComponent,
    RasterImgComponent,
    VectorGraphicsComponent,
    CompressImgComponent



  ],
  templateUrl: './images-page.component.html',
  styleUrl: './images-page.component.scss'
})
export class ImagesPageComponent {

}
