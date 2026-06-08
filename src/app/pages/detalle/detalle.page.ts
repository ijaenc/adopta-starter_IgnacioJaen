import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Perro, PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class DetallePage {

  perro?: Perro;

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.perro = this.perrosService.obtener(id);
    }
  }
}