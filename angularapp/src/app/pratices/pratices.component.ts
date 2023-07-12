// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pratices',
//   templateUrl: './pratices.component.html',
//   styleUrls: ['./pratices.component.css']
// })
// export class PraticesComponent implements OnInit {


//   myName="Shweta Shelke"

//   myNewName:string="Shweta Ganesh Shelke";
//   constructor() { }

//   ngOnInit() {
//   }

//   // Define the Match interface to represent the match object structure
// interface Match {
//   id: string;
//   series: { name: string };
//   type: string;
//   date: string;
//   status: string;
// }

// // Fetch data from the API
// fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', {
//   headers: {
//     'X-RapidAPI-Key': 'e4aca18c54mshf3b8957be1d22f9p1d6488jsned71c2f8d4a7',
//     'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     const matches: Match[] = data.matches;
//     const tableBody = document.querySelector('#matchesTable tbody');

//     // Iterate over the matches array and create table rows
//     matches.forEach(match => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//         <td>${match.id}</td>
//         <td>${match.series.name}</td>
//         <td>${match.type}</td>
//         <td>${match.date}</td>
//         <td>${match.status}</td>
//       `;
//       tableBody?.appendChild(row);
//     });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });



