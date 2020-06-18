import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
user: firebase.User;

  constructor(private fs:AngularFirestore,private auth: AuthService) { }
  getProduct() {

    return this.auth.getUserState().pipe(switchMap(user => {
    return this.fs.collection(`orders`).get()
    
        }
    ));
      }

}



