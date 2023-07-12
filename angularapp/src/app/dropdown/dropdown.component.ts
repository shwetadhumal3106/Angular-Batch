
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  states: any[] = [];
  divisions: any[] = [];
  districts: any[] = [];
  talukas: any[] = [];
  villages: any[] = [];

  selectedState: any;
  selectedDivision: any;
  selectedDistrict: any;
  selectedTaluka: any;
  selectedVillage: any;

  constructor(private http: HttpClient) {}

  @Input() change: string;

  ngOnInit(): void {
    this.getStates();
    
  }

  getStates(): void {
    this.http.get('http://awsmaster.mahamining.com/master/states/GetState').subscribe((data: any) => {
      this.states = data;
    });
  }

  getDivisions(): void {
    const divisionUrl = `http://awsmaster.mahamining.com/master/divisions/${this.selectedState.id}`;
    this.http.get(divisionUrl).subscribe((data: any) => {
      this.divisions = data;
    });
  }

  getDistricts(): void {
    const districtUrl = `http://awsmaster.mahamining.com/master/districts/GetDistrictByDivisionId?UserId=1&DivisionId=${this.selectedDivision.id}`;
    this.http.get(districtUrl).subscribe((data: any) => {
      this.districts = data;
    });
  }

  getTalukas(): void {
    const talukaUrl = `http://awsmaster.mahamining.com/master/talukas/GetTalukaByDistrictId/${this.selectedDistrict.id}`;
    this.http.get(talukaUrl).subscribe((data: any) => {
      this.talukas = data;
    });
  }

  getVillages(): void {
    const villageUrl = `http://awsmaster.mahamining.com/master/villages/GetVillagesByCriteria/${this.selectedTaluka.id}`;
    this.http.get(villageUrl).subscribe((data: any) => {
      this.villages = data;
    });
  }
}

