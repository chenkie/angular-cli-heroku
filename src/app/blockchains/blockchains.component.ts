import { Component, OnInit } from '@angular/core';

@Component({
             selector: 'app-blockchains',
             templateUrl: './blockchains.component.html',
             styleUrls: ['./blockchains.component.css']
           })
export class BlockchainsComponent implements OnInit {

  public blockchainPlaylists = "https://www.youtube.com/playlist?list=PLtv1b_ruRAiywpjOhR21UozYT2BqdhbCa";
  constructor() { }

  ngOnInit() {
  }

}
