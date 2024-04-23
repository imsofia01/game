import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Add your authentication logic here
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Login successful');
      // Redirect or perform any other action after successful login
    } else {
      console.log('Invalid credentials');
      // Handle invalid credentials (show error message, etc.)
    }
  }
}
