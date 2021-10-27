import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  products: Observable<any[]>;
 
  constructor(firestore: AngularFirestore) {
    this.products = firestore.collection('products').valueChanges();
  
  }


  ngOnInit(): void {
  }

}
