import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  usuario = 'Joel';
  contrasenya = '1234';

  constructor(private router: Router) {}

  // Función que valida el login
  onLogin(usuario: string, contrasenya: string) {
    event?.preventDefault();
    if (this.usuario === usuario && this.contrasenya === contrasenya) {
      Swal.fire({
        title: '¡Login Exitoso!',
        text: 'Has ingresado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        this.router.navigate(['/galeria']);
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  }
}
