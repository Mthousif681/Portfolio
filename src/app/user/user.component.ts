import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  name = 'Mohammad Thousif';
  email : string = 'mthousif681@gmail.com';
  showDetails: boolean = true;
  users: string[] = ['Alice', 'Bob', 'Charlie'];

  ngOnInit() {
    console.log('UserComponent Initialized');
  }

  ngOnDestroy() {
    console.log('UserComponent Destroyed');
  }
}

