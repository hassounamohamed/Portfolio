import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  imagesLoaded = false;
  loadedCount = 0;
  totalImages = 13; // total project images

  ngOnInit() {
    // Fallback: show content after 3s even if images don't all load
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
