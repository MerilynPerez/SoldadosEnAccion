import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'albums' },
    { title: 'Detalle', url: 'item-detail', icon: 'add' },
    { title: 'Lista', url: 'items-list', icon: 'list' },
    { title: 'A cerca de', url: 'contratame', icon: 'document' },
    
  ];
  
}
