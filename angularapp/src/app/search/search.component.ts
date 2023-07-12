import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../servise/wikipedia.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  searchResults: any[]; // Array to store the retrieved search results

  constructor(private wikipediaService: WikipediaService) {}

  search(): void {
    this.wikipediaService.searchArticles(this.searchQuery)
      .subscribe(data => {
        this.searchResults = data.query.search;
      });
  }

  ngOnInit() {
  }

}
