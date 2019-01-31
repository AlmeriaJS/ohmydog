import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dogs: Observable<any[]>;
  constructor(
    public af: AngularFirestore
  ) {
    this.dogs = af.collection('dogs').valueChanges();
    console.log('he recuperado el perro: ', this.dogs);
  }
}
