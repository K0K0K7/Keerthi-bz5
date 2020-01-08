import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
 selector: 'app-country',
 templateUrl: './country.component.html',
 styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 countries;
 tmp;
 constructor(private data: DataService) { }
 ngOnInit() {
 this.data.getCountries().subscribe(d => {
 this.countries = d;
 this.tmp=this.countries[0];
 this.countries[0]=this.countries[104];
 this.countries[104]=this.tmp;
 })
 }
 }