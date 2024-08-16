import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Firstname: string = '';
  Lastname: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Registration form submitted!');
    console.log(`Name: ${this.Firstname}`);
    console.log(`Name: ${this.Lastname}`);
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }
}

