import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetUserNameComponent } from './components/get-user-name/get-user-name.component';
import { HomeComponent } from './view/home/home.component';
import { ContainerProductComponent } from './components/container-product/container-product.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { OrderDetailComponent } from './view/order-detail/order-detail.component';
import { ReadyOrdersComponent } from './view/ready-orders/ready-orders.component';
import { HistoryOrdersComponent } from './view/history-orders/history-orders.component';
import { ItemOrderComponent } from './components/item-order/item-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    FooterComponent,
    GetUserNameComponent,
    HomeComponent,
    ContainerProductComponent,
    ItemMenuComponent,
    OrderDetailComponent,
    ReadyOrdersComponent,
    HistoryOrdersComponent,
    ItemOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
