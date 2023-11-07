import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {
  items: Item[] = [];

  constructor(private navCtrl: NavController, private itemService: ItemService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().then((items) => {
      this.items = items;
    });
  }

  editItem(id: number) {
    this.navCtrl.navigateForward(`/item-form/${id}`);
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).then(() => {
      this.loadItems();
    });
  }

}
