import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { personalInfo } from '../../data/personal-info';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeInUp, fadeInLeft, fadeInRight]
})
export class ContactComponent {
  contactForm: FormGroup;
  personalInfo = personalInfo;
  isSubmitting = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        // Using Formspree
        const formspreeUrl = 'https://formspree.io/f/mnjjvqre';
        
        const formData = new FormData();
        formData.append('name', this.contactForm.value.name);
        formData.append('email', this.contactForm.value.email);
        formData.append('message', this.contactForm.value.message);

        const response = await fetch(formspreeUrl, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.submitMessage = 'Message sent successfully! I\'ll get back to you soon.';
          this.contactForm.reset();
        } else {
          throw new Error('Failed to send message');
        }

      } catch (error) {
        console.error('Error sending email:', error);
        this.submitMessage = 'Failed to send message. Please try again or email me directly.';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.hasError('required')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is too short`;
    }
    return '';
  }
}

