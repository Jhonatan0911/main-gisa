import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  items: any[] = [
    {
      label: 'Principal',
      icon: 'pi pi-th-large',
    },
    {
      label: 'Historia clinica',
      icon: 'pi pi-id-card',
    },
    {
      label: 'Ayudas diagnosticas',
      icon: 'pi pi-calendar-plus',
    },
    {
      label: 'Farmacia',
      icon: 'pi pi-building',
    },
    {
      label: 'Auditoria',
      icon: 'pi pi-heart',
    },
    {
      label: 'Configuracion',
      icon: 'pi pi-cog',
    },
    {
      label: 'Reportes',
      icon: 'pi pi-chart-pie',
    },
    {
      label: 'Utilidades',
      icon: 'pi pi-paperclip',
    },
    {
      label: 'Familias en acción',
      icon: 'pi pi-users',
    },

  ];

  modoOscuro: boolean = false;
}
