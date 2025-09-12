import { Component } from '@angular/core';
import { UserComponent } from '../../user/user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { TitleCasePipe} from '../home/title-case.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UserComponent,FormsModule,NgIf,NgFor,ReactiveFormsModule,TitleCasePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
user = {
    fullName: '',
    email1: '',
    password: ''
  };

  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
  }

//reactive form
userForm2: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm2 = this.fb.group({
      fullName: ['', Validators.required],
      email2: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onReactiveSubmit() {
    if (this.userForm2.valid) {
      console.log('Form Submitted!', this.userForm2.value);
    } else {
      this.userForm2.markAllAsTouched();
    }
  }


}
