import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}
  constructor(public accountService: AccountService) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        this.cancel();
      },
      error: error => {
        alert(error)
        
      }
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
