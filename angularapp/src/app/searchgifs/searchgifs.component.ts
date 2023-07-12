import { Component, OnInit } from '@angular/core';
import { GiphyserviceService } from '../servise/giphyservice.service';

@Component({
  selector: 'app-searchgifs',
  templateUrl: './searchgifs.component.html',
  styleUrls: ['./searchgifs.component.css']
})
export class SearchgifsComponent implements OnInit {

  searchResults: any[];
  query: string;

  constructor(private giphyService: GiphyserviceService) { }
  ngOnInit() {
    
  }

  searchGifs(): void {
    if (this.query) {
      this.giphyService.searchGifs(this.query).subscribe(res => {
        this.searchResults = res.data;
      });
    } else {
      this.searchResults = [];
    }
  }

}
