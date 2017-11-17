import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  public title = 'Chris Kayode ';
  public socialFlare = ' Follow me on';
  public socialNetwork1 = 'Twitter';
  public socialNetwork2 = 'LinkedIn';
  public socialNetwork3 = ' Github';
  public emailAddress = 'email';
  public AltSocialBlurb = 'or send me an';

  ngOnInit() {
  }

}
