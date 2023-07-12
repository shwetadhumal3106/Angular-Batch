import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { AddressObj } from "../model/addressobj";
import { AddressService } from "../servise/address.service";

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"],
})
export class AddressComponent implements OnInit {
  addressObj: AddressObj;
  addressArr: AddressObj[] = [];
  states: any[] = [];
  divisions: any[] = [];
  districts: any[] = [];
  talukas: any[] = [];
  villages: any[] = [];

  constructor(
    private addressService: AddressService,
    private http: HttpClient
  ) {
    this.addressObj = new AddressObj();
  }

  ngOnInit(): void {
    this.getAllAddress();
    this.fetchStates();
  }

  fetchStates() {
    // Replace with your actual API endpoint URL to fetch states
    const url = "http://awsmaster.mahamining.com/master/states/GetState/";
    this.http.get(url).subscribe(
      (response: any) => {
        let result = response;
        this.states = result.responseData;
        console.log(this.states);
      },
      (error: any) => {
        console.error("Failed to fetch states:", error);
      }
    );
  }

  fetchDivisionsByState(stateId: any) {
    this.addressObj.stateName = this.getStateName(+stateId);
    console.log(this.addressObj);
    this.addressService.getDivisionsByStateId(stateId).subscribe(
      (response: any) => {
        this.divisions = response.responseData;
        this.districts = [];
        this.talukas = [];
        this.villages = [];
      },
      (error) => {
        console.error("Failed to fetch divisions:", error);
      }
    );
  }

  fetchDistrictsByDivision(stateId: string, divisionId: string) {
    this.addressObj.divisionName = this.getDivisionName(divisionId);
    this.addressService.getDistrictsByDivisionId(stateId, divisionId).subscribe(
      (response: any) => {
        this.districts = response.responseData;
        this.talukas = [];
        this.villages = [];
      },
      (error) => {
        console.error("Failed to fetch districts:", error);
      }
    );
  }

  fetchTalukasByDistrict(districtId: string) {
    this.addressObj.districtName = this.getDistrictName(districtId);
    this.addressService.getTalukasByDistrictId(districtId).subscribe(
      (response: any) => {
        this.talukas = response.responseData;
        this.villages = [];
      },
      (error) => {
        console.error("Failed to fetch talukas:", error);
      }
    );
  }

  fetchVillagesByTaluka(talukaId: string) {
    this.addressObj.talukaName = this.getTalukaName(talukaId);

    this.addressService.getVillagesByCriteria(talukaId).subscribe(
      (response: any) => {
        this.villages = response.responseData;
      },
      (error) => {
        console.error("Failed to fetch villages:", error);
      }
    );
  }

  setVillageName(villageId: string) {
    this.addressObj.villageName = this.getVillageName(villageId);
  }

  onClear() {
    this.addressObj = new AddressObj(); // Reset the address object
  }

  onSubmit() {
    this.addressArr.push(this.addressObj);
    const isData = localStorage.getItem("AddData");
    if (isData == null) {
      const newArr = [];
      this.addressObj.locationId = 0;
      newArr.push(this.addressObj);
      localStorage.setItem("AddData", JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);
      const newId = oldData.length + 1;
      this.addressObj.locationId = newId;
      oldData.push(this.addressObj);
      localStorage.setItem("AddData", JSON.stringify(oldData));
    }
    this.addressObj = new AddressObj();
    this.getAllAddress();
  }

  getAllAddress() {
    const isData = localStorage.getItem("AddData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.addressArr = localData;
    }
  }

  onEdit(item: AddressObj) {
    this.addressObj = item;
  }

  onDelete(item: AddressObj) {
    const isData = localStorage.getItem("AddData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
        if (localData[index].locationId == item.locationId) {
          localData.splice(index, 1);
          break;
        }
      }
      localStorage.setItem("AddData", JSON.stringify(localData));
      this.getAllAddress();
    }
  }

  getStateName(stateId: number): string {
    const state = this.states.find((item: any) => item.id == stateId);
    return state ? state.state : "";
  }

  getDivisionName(divisionId: string): string {
    const division = this.divisions.find((d: any) => d.id == divisionId);
    return division ? division.division : "";
  }

  getDistrictName(districtId: string): string {
    const district = this.districts.find((d: any) => d.id == districtId);
    return district ? district.district : "";
  }

  getTalukaName(talukaId: string): string {
    const taluka = this.talukas.find((t: any) => t.id == talukaId);
    return taluka ? taluka.taluka : "";
  }

  getVillageName(villageId: string): string {
    const village = this.villages.find((v: any) => v.id == villageId);
    return village ? village.name : "";
  }
}
