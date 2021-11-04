import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //categories$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories').valueChanges();
  }

  // ngOnInit() {
  //   var ref = firebase.database().ref("categories");
  //   ref.once("value").then(function(snapshot) {var data = snapshot.val();
  //   var id = JSON.stringify(data);//.split('"');
  //   //var ids = id.filter(id => id.includes("-K"));
  //   console.log(id);
  // });
  // }
}
