import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription, forkJoin, tap } from 'rxjs';
import { WineService } from 'src/app/services/wine.service';
import { Wine } from '../../model/wine.model';
import { BeerService } from 'src/app/services/beer.service';
import { Beer } from 'src/app/model/beer.model';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnDestroy {

  @Input() message:string = "";
  subscriptions:Subscription[] = [];
  wineList:Wine[] = [];

  constructor(private wineService:WineService){

  }

  getAllWines(){
    this.subscriptions.push(this.wineService.getWine()
                        .pipe(
                          tap(((x:Wine[])=>{
                            this.wineList = x;
                          }))
                        )
                        .subscribe());
  }

  onClick(){
   this.getAllWines(); 
  }

  onClear(){
    this.wineList = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=>{
      sub.unsubscribe();
    })
  }
}
