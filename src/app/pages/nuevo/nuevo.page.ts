import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class NuevoPage {

  nombre: string = '';
  raza: string = '';
  edad: string = '';
  sexo: string = '';
  tamano: string = '';
  descripcion: string = '';
  vacunada: boolean = false;
  adoptado: boolean = false;

  constructor(
    private perrosService: PerrosService,
    private router: Router
  ) {}

  guardar() {
    const nuevoPerro: Perro = {
      id: 0,
      nombre: this.nombre,
      tipo: 'Perro',
      raza: this.raza,
      edad: this.edad,
      sexo: this.sexo,
      tamano: this.tamano,
      vacunada: this.vacunada,
      descripcion: this.descripcion,
      foto: 'https://placedog.net/600/600?id=20',
      adoptado: this.adoptado
    };

    this.perrosService.agregar(nuevoPerro);

    this.nombre = '';
    this.raza = '';
    this.edad = '';
    this.sexo = '';
    this.tamano = '';
    this.descripcion = '';
    this.vacunada = false;
    this.adoptado = false;

    this.router.navigate(['/galeria']);
  }
}