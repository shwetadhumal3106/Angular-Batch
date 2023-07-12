import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  name: string;
  email: string;
  username: string;
  phone: string;
  location: string;
  picture: string;
}

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  users: User[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://randomuser.me/api/?results=50')
      .subscribe(data => {
        this.users = data.results.map(result => {
          return {
            name: `${result.name.first} ${result.name.last}`,
            email: result.email,
            username: result.login.username,
            phone: result.phone,
            location: `${result.location.city}, ${result.location.country}`,
            picture: result.picture.thumbnail // or result.picture.large for larger images
          };
        });
      });
  }
}
