import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    standalone: false
})
export class ContactFormComponent {
  contactForm: FormGroup;
  accessForm: FormGroup;
  showAccessForm: boolean = false;
  isSubmitted: boolean = false;
  isAccessSubmitted: boolean = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
    
    this.accessForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      relation: ['', Validators.required],
      details: ['', [Validators.required, Validators.minLength(20)]]
    });
  }
  
  toggleAccessForm() {
    this.showAccessForm = !this.showAccessForm;
  }
  
  submitContactForm() {
    if (this.contactForm.valid) {
      // In a real implementation, we would send the form data to a backend service
      console.log('Contact form submitted:', this.contactForm.value);
      this.isSubmitted = true;
      this.contactForm.reset();
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }
  
  submitAccessForm() {
    if (this.accessForm.valid) {
      // In a real implementation, we would send the form data to a backend service
      console.log('Access form submitted:', this.accessForm.value);
      this.isAccessSubmitted = true;
      this.accessForm.reset();
      this.showAccessForm = false;
    } else {
      this.markFormGroupTouched(this.accessForm);
    }
  }
  
  // Helper method to mark all controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}