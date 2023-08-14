import { Component, OnDestroy } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent implements OnDestroy{

  subscriptions:Subscription[] = [];

  constructor(private beerService:BeerService){

  }

  getBeer(){
   this.subscriptions.push(this.beerService.getBeer()
                    .pipe(tap((x=>{
                        

                    
              


                    })))
                    .subscribe());

  }

  onClick(){


  }


  ngOnDestroy(): void {
      this.subscriptions.forEach(x=>{
        x.unsubscribe();
      })
  }

}
