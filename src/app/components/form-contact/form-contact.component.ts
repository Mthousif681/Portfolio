import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatChipsModule,  // ✅ Required for mat-chip-list
    MatIconModule,
    NgIf,
    NgFor
  ],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {
  contactForm: FormGroup;
  subjects = ['General Inquiry', 'Support', 'Feedback', 'Other'];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      date: [''],
      message: ['', Validators.required],
      tags: ['']
    });
  }
  tags: string[] = ['Angular', 'Material', 'Chips'];

  addTag(event: any): void {
    const value = event.value.trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
    }
  }
}
