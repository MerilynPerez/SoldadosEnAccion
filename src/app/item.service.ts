import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private db!: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.createDatabase();
  }

  createDatabase() {
    this.sqlite.create({
      name: 'items.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.createTable();
      })
      .catch(error => console.error('Error opening database', error));
  }

  createTable() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, date TEXT, description TEXT, photo TEXT, audio TEXT)', [])
      .then(() => console.log('Table created'))
      .catch(error => console.error('Error creating table', error));
  }

  createItem(item: Item) {
    const { title, date, description, photo, audio } = item;
    return this.db.executeSql('INSERT INTO items (title, date, description, photo, audio) VALUES (?, ?, ?, ?, ?)', [title, date, description, photo, audio]);
  }

  getItems() {
    return this.db.executeSql('SELECT * FROM items', []).then(data => {
      const items: Item[] = [];
      for (let i = 0; i < data.rows.length; i++) {
        items.push(data.rows.item(i));
      }
      return items;
    });
  }

  getItemById(id: number) {
    return this.db.executeSql('SELECT * FROM items WHERE id = ?', [id])
      .then(data => {
        if (data.rows.length > 0) {
          return data.rows.item(0);
        } else {
          return null;
        }
      });
  }

  updateItem(item: Item) {
    const { id, title, date, description, photo, audio } = item;
    return this.db.executeSql('UPDATE items SET title = ?, date = ?, description = ?, photo = ?, audio = ? WHERE id = ?', [title, date, description, photo, audio, id]);
  }

  deleteItem(id: number) {
    return this.db.executeSql('DELETE FROM items WHERE id = ?', [id]);
  }
}

  

