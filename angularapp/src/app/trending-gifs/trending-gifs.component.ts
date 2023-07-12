import { Component, OnInit } from '@angular/core';
import { GiphyserviceService } from '../servise/giphyservice.service';


@Component({
  selector: 'app-trending-gifs',
  templateUrl: './trending-gifs.component.html',
  styleUrls: ['./trending-gifs.component.css']
})
export class TrendingGifsComponent implements OnInit {

  trendingGifs: any[];

  constructor(private giphyService: GiphyserviceService) { }

  ngOnInit(): void {
    // this.getTrendingGifs();
  }

  getTrendingGifs(): void {
    this.giphyService.getTrendingGifs().subscribe(res => {
      this.trendingGifs = res.data;
    });
  }
}
