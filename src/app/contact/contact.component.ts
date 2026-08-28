import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule, 
    MatSnackBarModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;

      emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          ...formValue,
          to_email: environment.emailjs.recipientEmail,
          reply_to: formValue.email,
          from_name: formValue.fullName,
          user_name: formValue.fullName,
          user_email: formValue.email,
          service_name: formValue.service
        },
        environment.emailjs.publicKey
      ).then(
        () => {
          this.snackBar.open('Message sent successfully!', 'Close', { duration: 3000, panelClass: ['success-snackbar'] });
          this.contactForm.reset();
        },
        (err) => {
          this.snackBar.open('Error sending message. Please try again.', 'Close', { duration: 3000, panelClass: ['error-snackbar'] });
          console.error('EmailJS error:', err?.status, err?.text ?? err);
        }
      );
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}