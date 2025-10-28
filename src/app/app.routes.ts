import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Posts } from './components/posts/posts';

export const routes: Routes = [
  { path: 'about', component: About, title: 'About Us' },
  { path: 'contact', component: Contact, title: 'Contact Us' },
  { path: 'posts', component: Posts, title: 'Posts' },
];
