import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';  // ✅ Import this
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf, NgFor } from '@angular/common';
import { CanComponentDeactivate } from './deactivate.guard';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    NgIf,
    NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})



export class ContactComponent implements CanComponentDeactivate  {
  isFormDirty = false;

  formData = {
    name: '',
    email: '',
    reason: '',
    message: ''
  };

  onSubmit(form: any) {
    console.log('Form Data:', form.value);
    alert('Form submitted successfully!');
  }
  
  canDeactivate(): boolean {
    return this.isFormDirty
      ? confirm('You have unsaved changes. Do you really want to leave?')
      : true;
  }

  onInputChange() {
    console.log('Form dirty status updated:', this.isFormDirty);
    this.isFormDirty = true;
  }
}
