import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { Pipe, PipeTransform } from '@angular/core';

import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones = [];
  query: string = '';
  orderProp: string = 'name';
  searchableList = ['name'];
  constructor(private phonesService: PhonesService) {
    this.phonesService.getPhones()
      .subscribe(res => {
        this.phones = res.json();
        console.log(res.json());
      })
  }

  ngOnInit() {
  }

}
