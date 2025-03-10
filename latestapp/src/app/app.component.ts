import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'nigger';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('https://localhost:5000/api/users').subscribe({
      next: response => this.users = response, 
      error: error => console.log(error), 
      complete: () => console.log('Request has completed')

    });
  }
}
