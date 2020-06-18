import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {



  
  favorites: Product []= []
  constructor(private fs: FavoritesService) { }

  ngOnInit(): void {

    this.fs.getProduct().subscribe(favs =>  {
      this.favorites = favs
      // console.log(query.payload.doc.data())
    });
    // querySnapshot.forEach(doc => {
    //   this.favorites.push({...doc.data(), id: doc.id})
    // })})



  }
  delete(favorites) {
    console.log(favorites)
    this.fs.delete(favorites).subscribe(() => {
      this.favorites = this.favorites.filter((favorite) => favorite.Id !== favorites);
    });
  }

  save(index) {

  }
}
