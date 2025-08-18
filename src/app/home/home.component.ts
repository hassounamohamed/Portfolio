import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Modal visibility
  isModalOpen: boolean = false;

  // Feedback data
  currentName: string = '';
  currentRole: string = '';
  currentMessage: string = '';

  // Sample feedbacks
  feedbacks = [
    {
      name: 'Rami M.',
      role: 'Student',
      message: 'Mohamed is a highly skilled and motivated developer. His commitment to quality, problem-solving abilities, and innovative mindset make him stand out. He consistently delivers excellent results and is a pleasure to work with.'
    },
    {
      name: 'Wajih S.',
      role: 'CAO SoftHub',
      message: 'Mohamed demonstrates exceptional dedication and technical skills. His ability to solve complex problems, combined with his creativity and attention to detail, makes him a valuable contributor to any project. Working with him has been a pleasure, and his work consistently exceeds expectations.'
    },
    {
      name: 'Malek B.',
      role: 'Student',
      message: 'Mohamed is an exceptional developer with strong technical skills and a proactive attitude. His dedication, creativity, and ability to work efficiently on complex projects make him a valuable team member. Collaborating with him has always been a positive experience.'
    },
    {
      name: 'Mohamed H.',
      role: 'Student',
      message: 'Mohamed Hassouna is a talented and dedicated developer. His technical expertise, problem-solving skills, and attention to detail consistently lead to high-quality results. He is reliable, innovative, and a great collaborator on any project.'
    }
  ];

  // Open modal with feedback data
  openFeedback(feedback: any) {
    this.currentName = feedback.name;
    this.currentRole = feedback.role;
    this.currentMessage = feedback.message;
    this.isModalOpen = true;
  }

  closeFeedback() {
    this.isModalOpen = false;
  }

  ngOnInit() {
    this.startAutoScroll();
  }

  // Horizontal scrolling effect
  startAutoScroll() {
    const container = document.querySelector('.feedback-container') as HTMLElement;
    let scrollAmount = 0;
    setInterval(() => {
      if (container) {
        scrollAmount += 10;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0; // loop back
        }
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }, 500); // adjust speed here
  }
}