import { Component, Input } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() usersFromHomeComponent: any;
  model: any = {}
  constructor(public accountService: AccountService) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(this.model)
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
