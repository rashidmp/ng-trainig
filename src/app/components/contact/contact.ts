import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  template: `
    <div class="h-screen flex items-center justify-center">
      <app-contact-form />
    </div>
  `,
  styles: ``,
})
export class Contact {}
