import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {
  imagesLoaded = false;
  loadedCount = 0;
  totalImages = 5; // total certificate images

  ngOnInit() {
    setTimeout(() => {
      this.imagesLoaded = true;
    }, 3000);
  }

  onImageLoad() {
    this.loadedCount++;
    if (this.loadedCount >= this.totalImages) {
      this.imagesLoaded = true;
    }
  }

  onImageError(event: Event) {
    this.loadedCount++;
    if (this.loadedCount >= this.totalImages) {
      this.imagesLoaded = true;
    }
  }
}
