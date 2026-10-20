import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html', // Nombre corregido
  styleUrls: ['./catalog.css']   // Nombre corregido
})
export class CatalogComponent {
  spareParts = [
    {
      id: 1,
      category: 'FRENOS',
      name: 'Balatas Delanteras Sintéticas',
      compatibility: 'Compatible Bajaj, Yamaha',
      price: 450.00,
      image: 'assets/balatas.png'
    },
    {
      id: 2,
      category: 'MOTOR',
      name: 'Aceite Sintético 20W-50',
      compatibility: 'Motos de 4 tiempos',
      price: 220.00,
      image: 'assets/aceite.png'
    },
    {
      id: 3,
      category: 'TRANSMISIÓN',
      name: 'Kit de Arrastre Reforzado',
      compatibility: 'Cadena O-Ring Corona 42T',
      price: 1250.00,
      image: 'assets/kit.png'
    }
  ];
}