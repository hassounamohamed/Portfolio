import { Component, HostListener, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
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
  isDarkMode = true;
  scrolled = false;

  constructor(private router: Router) {}

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
    this.isScrolled = window.scrollY > 15;
    this.scrolled = window.scrollY > 15;
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 860;
    if (!this.isMobile) {
      this.showMobileMenu = false;
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  setInitialTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = true;
    }
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  scrollToExperience(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.showMobileMenu = false;
    if (this.router.url === '/' || this.router.url === '') {
      const el = document.getElementById('experience');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById('experience');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      });
    }
  }
}

