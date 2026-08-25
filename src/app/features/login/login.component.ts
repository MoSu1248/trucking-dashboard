import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface SignInData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  formData: SignInData = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Logging user in...', this.formData);

    this.authService.login(this.formData).subscribe({
      next: (response) => {
        console.log('✅ Server Response:', response);

        localStorage.setItem('token', response.token);
        localStorage.setItem('userRole', response.user.role);
        
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('❌ Server Error:', err);
      },
    });
  }
}
