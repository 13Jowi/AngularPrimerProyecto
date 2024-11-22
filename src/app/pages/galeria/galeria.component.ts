import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'animate.css';

@Component({
  selector: 'app-galeria',
  standalone: true,
  templateUrl: './galeria.component.html',
  imports: [CommonModule],
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  // Arreglo de objetos con los datos de las ciudades
  ciudades = [
    {
      nombre: 'Barcelona',
      descripcion: 'Una ciudad vibrante con historia, arte y arquitectura.',
      imagen: 'https://th.bing.com/th/id/OIP.xHRrbk9fp8E3ixh-jbeCEwHaE7?rs=1&pid=ImgDetMain' // URL de la imagen
    },
    {
      nombre: 'Madrid',
      descripcion: 'Capital de España, famosa por su cultura y museos.',
      imagen: 'https://th.bing.com/th/id/OIP.NXEbVsaDJ091SvdOi2tSgwHaEo?rs=1&pid=ImgDetMain'
    },
    {
      nombre: 'Paris',
      descripcion: 'La ciudad del amor, conocida por la Torre Eiffel.',
      imagen: 'https://www.tripsavvy.com/thmb/IGFQrFvsnY8gZnNx2U2lyAYxnBg=/1260x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-559699279-58f4f3cb5f9b582c4dfb1b29.jpg'
    },
    {
      nombre: 'Nueva York',
      descripcion: 'La ciudad que nunca duerme, famosa por sus rascacielos.',
      imagen: 'https://th.bing.com/th/id/R.0faf7e911308759d6b2249ac6ecc0155?rik=Ngcl8k4U0ghavg&pid=ImgRaw&r=0'
    }
  ];
}
