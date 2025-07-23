import { Component, HostListener, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMobile = false;
  showMobileMenu = false;
  isScrolled = false;
  isDarkMode = false;
  scrolled = false;

  ngOnInit() {
    this.checkScreenSize();
    this.checkScroll();
    this.setInitialTheme();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  @HostListener('window:scroll')
  checkScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.showMobileMenu = false;
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.body.classList.toggle('light-mode', !this.isDarkMode);
  }

  setInitialTheme() {
    this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.add(this.isDarkMode ? 'dark-mode' : 'light-mode');
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  this.scrolled = window.scrollY > 20;
}
}

