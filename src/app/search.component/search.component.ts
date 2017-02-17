import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ItemService } from './../item/item.service';


@Component({
  moduleId: module.id,
  selector: 'my-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit { 
  
  constructor(
    private itemService: ItemService
  ) {};
  
  name = 'MBS Search';

  ngOnInit(): void {
    this.itemService.cacheItems();
  }



 }
