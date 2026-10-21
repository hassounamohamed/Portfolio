import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Mohamed Hassouna | Software Developer – Portfolio'},
    { path: 'projects', component: ProjectsComponent, title: 'Projects | Mohamed Hassouna – Software Developer' },
    { path: 'skills', component: SkillsComponent, title: 'Skills & Technologies | Mohamed Hassouna – Software Developer' },
    { path: 'contact', component: ContactComponent, title: 'Contact Mohamed Hassouna | Software Developer' },
    { path: '**', redirectTo: '' } 
    
];
