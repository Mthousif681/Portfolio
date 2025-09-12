import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from './title-case.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
      name : string = 'my name is thousif';
}
