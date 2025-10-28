import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Component({
  selector: 'app-contact-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <form
      (ngSubmit)="onSubmit()"
      [formGroup]="contactForm"
      class="flex flex-col gap-2 w-xl border border-black/50 p-6 rounded-2xl"
    >
      <h2 class="text-2xl font-bold mb-8">Contact Us</h2>
      <mat-form-field>
        <mat-label>Name</mat-label>
        <mat-icon matPrefix>account_circle</mat-icon>
        <input formControlName="name" matInput placeholder="Enter your name" />
        @if(contactForm.get('name')?.hasError('required')){
        <mat-error>Name is required</mat-error>
        }
      </mat-form-field>
      <mat-form-field>
        <mat-label>Phone</mat-label>
        <mat-icon matPrefix>phone</mat-icon>
        <input formControlName="phone" matInput placeholder="Enter your phone number" />
        @if(contactForm.get('phone')?.hasError('required')){
        <mat-error>Name is required</mat-error>
        } @if(contactForm.get('phone')?.hasError('pattern')){
        <mat-error>Phone number is invalid</mat-error>
        }
      </mat-form-field>
      <mat-form-field>
        <mat-label>Address</mat-label>
        <mat-icon matPrefix>home_pin</mat-icon>
        <textarea formControlName="address" matInput placeholder="Enter you address"></textarea>

        @if(contactForm.get('address')?.hasError('required')){
        <mat-error>Name is required</mat-error>
        }
      </mat-form-field>
      <div class="text-right space-x-2">
        <button type="reset" matButton="outlined">Reset</button>
        <button [disabled]="contactForm.invalid" type="submit" matButton="filled">Submit</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class ContactForm {
  private http = inject(HttpClient);

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]),
    address: new FormControl('', Validators.required),
  });

  // constructor() {
  //   this.http.get<User>('https://jsonplaceholder.typicode.com/users/1').subscribe((data) => {
  //     // console.log(data.name);
  //     // this.contactForm.get('name')?.setValue(data.name);
  //     // this.contactForm.get('phone')?.setValue(data.phone);
  //     // this.contactForm.get('address')?.setValue(data.address.street + ', ' + data.address.city);

  //     this.contactForm.patchValue({
  //       name: data.name,
  //       phone: data.phone,
  //       address: data.address.street + ', ' + data.address.city,
  //     });
  //   });
  // }

  ngOnInit(): void {
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/1').subscribe((data) => {
      // console.log(data.name);
      // this.contactForm.get('name')?.setValue(data.name);
      // this.contactForm.get('phone')?.setValue(data.phone);
      // this.contactForm.get('address')?.setValue(data.address.street + ', ' + data.address.city);

      this.contactForm.patchValue({
        name: data.name,
        phone: data.phone,
        address: data.address.street + ', ' + data.address.city,
      });
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
