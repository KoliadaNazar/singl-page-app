import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-slider',
  standalone: true,
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})


export class MainSliderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderSection') sliderSection!: ElementRef<HTMLElement>;
  currentSlideIndex = 0;
  slides: HTMLElement[] = [];
  private autoSlideSub!: Subscription;

  ngAfterViewInit() {
    this.slides = Array.from(this.sliderSection.nativeElement.querySelectorAll('.slide'));
    this.updateSlide();

    this.autoSlideSub = interval(9000).subscribe(() => this.nextSlide());
  }

  ngOnDestroy() {
    this.autoSlideSub?.unsubscribe();
  }

  nextSlide() {
    if (!this.slides.length) return;
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.updateSlide();
  }

  prevSlide() {
    if (!this.slides.length) return;
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlide();
  }

  updateSlide() {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('_active', i === this.currentSlideIndex);
    });
  }
}
