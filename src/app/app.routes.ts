import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home | Mohamed Hassouna'},
    { path: 'projects', component: ProjectsComponent, title: 'Projects | Mohamed Hassouna' },
    { path: 'skills', component: SkillsComponent, title: 'Skills | Mohamed Hassouna' },
    { path: 'contact', component: ContactComponent, title: 'Contact | Mohamed Hassouna' },
    { path: '**', redirectTo: '' } 
    
];
