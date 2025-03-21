import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  model: any = {}
  constructor(public accountService: AccountService) {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response)
        window.location.reload();
      },
      error: error => alert("The Email and Password doesnt match!")
    })
  }

  logout() {
    this.accountService.logout();
  }
}
