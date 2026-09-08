import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SignInData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  formData: SignInData = {
    email: '',
    password: '',
  };
  loginError = '';
  testClick() {
    console.log('button was clicked');
  }
  onSubmit(form: NgForm) {
    // Fix: Change 'this.loginForm' to 'form'
    form.control.markAllAsTouched();

    if (!form.valid) {
      return;
    }

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
        this.loginError = 'Invalid email or password credentials';

        console.log(this.loginError);
        this.cdr.detectChanges();
      },
    });
  }
}
