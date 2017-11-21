import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones = [];
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
