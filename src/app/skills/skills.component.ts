import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: []
})
export class SkillsComponent {
  skills = [
    {
      img: 'assets/html5.png',
      title: 'HTML5',
      desc: 'Semantic markup and best practices.'
    },
    {
      img: 'assets/css3.png',
      title: 'CSS3',
      desc: 'Responsive design, Flexbox, Grid.'
    },
    {
      img: 'assets/js.png',
      title: 'JavaScript',
      desc: 'ES6+, DOM, and modern tooling.'
    },
    {
      img: 'assets/angular.png',
      title: 'Angular',
      desc: 'Component-based architecture.'
    },
    {
      img: 'assets/python.png',
      title: 'Python',
      desc: 'Scripting, data analysis, backend.'
    },
    {
      img: 'assets/git.png',
      title: 'Git',
      desc: 'Version control & collaboration.'
    }
  ];
}
