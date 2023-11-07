import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{

  item: Item = {
    title: '', date: '', description: '', photo: '', audio: '',
    id: 0
  };
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private itemService: ItemService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.itemService.getItemById(+id).then((item) => {
        if (item) {
          this.item = item;
          this.isEditing = true;
        }
      });
    }
  }

  saveItem() {
    if (this.isEditing) {
      this.itemService.updateItem(this.item).then(() => {
        this.navCtrl.navigateBack('/item-list');
      });
    } else {
      this.itemService.createItem(this.item).then(() => {
        this.navCtrl.navigateBack('/item-list');
      });
    }
  }

  
  


}
