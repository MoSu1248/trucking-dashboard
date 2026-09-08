import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { RegisterPopupComponent } from './register-popup/register-popup.component';

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  fname: string;
  lname: string;
  phoneNumber: string;
  role: string;
  location: string;
}

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RegisterPopupComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  roles = ['Admin', 'Coordinator'];
  locations = ['Cape Town', 'Johannesburg', 'Durban'];
  isModalOpen = signal<boolean>(false);

  formData: RegisterData = {
    email: '',
    password: '',
    confirmPassword: '',
    fname: '',
    lname: '',
    phoneNumber: '',
    role: '',
    location: '',
  };

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log('Attempting to add user to db', this.formData);

    this.authService.registerStaffMember(this.formData).subscribe({
      next: (response) => {
        console.log('✅ Server Response:', response);
        form.resetForm();

        this.isModalOpen.set(true);
      },
      error: (err) => {
        console.error('❌ Server Error:', err);
      },
    });
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
