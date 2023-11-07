import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  itemId!: number;
  item!: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    
    const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam) {
    this.itemId = +idParam;
    this.loadItemDetails(this.itemId);
  } else {
    // Manejar el caso en el que 'id' no se proporciona correctamente en la URL
  }
    this.loadItemDetails(this.itemId);
  }
  loadItemDetails(itemId: number) {
    this.itemService.getItemById(itemId).then((item) => {
      this.item = item;
    });
  }

}
