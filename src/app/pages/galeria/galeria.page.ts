import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
})
export class GaleriaPage {

  perros: Perro[] = [];

  constructor(private perrosService: PerrosService) {}

  ionViewWillEnter() {
    this.perros = this.perrosService.todas();
  }
}