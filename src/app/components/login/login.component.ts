import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';
import { LoaderComponent } from "../../shared/loader/loader.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    'username': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required)
  })

  constructor(private router: Router,
    private _userService : UserService,
  ){

  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    this._userService.login(this.form.value).subscribe({
      next: (response) => {

        sessionStorage.setItem('token', response?.token);
        Swal.fire({
          title: 'Succescfull',
          text: response.msg,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            if (response.user.role === "ADMIN") {
              this.router.navigate(['/admin/dashboard']); 
            } else {
              this.router.navigate(['/home']);
            }
          }
        });
      },
      error: (e) => {
        Swal.fire({
          title: 'Error',
          text: e.error.msg,
          icon: 'error',
          confirmButtonText: 'Reintentar'
        });
      }
    });    
  }

  goTo(route:string) {
    this.router.navigate([route]); // Redirige al inicio
  }

}
