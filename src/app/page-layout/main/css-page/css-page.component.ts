import { Component } from '@angular/core';
import { HeroBannerCssComponent } from './hero-banner-css/hero-banner-css.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { GridRowsColumnsComponent } from './grid-rows-columns/grid-rows-columns.component';

@Component({
  selector: 'app-css-page',
  imports: [
    HeroBannerCssComponent,
    CssGridComponent,
    GridRowsColumnsComponent
  ],
  templateUrl: './css-page.component.html',
  styleUrl: './css-page.component.scss'
})
export class CssPageComponent {

}
