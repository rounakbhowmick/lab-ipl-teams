import { AppComponent } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() name = '';
  @Input() website = '';
  @Input() phone = '';
  @Input() imageUrl = '';
  constructor() { }

  ngOnInit(): void {
  }

  teams = [
    {
      name: 'Chennai Super Kings',
      website: 'https://www.chennaisuperkings.com',
      phone: '965-144-6018',
      imageUrl: 'assets/csk.png'
    },
    {
      name: 'SunRisers Hyderabad',
      website: 'https://www.iplt20.com/',
      phone: '9999988888',
      imageUrl: 'assets/SRH.png'
    },
    {
      name: 'Delhi Dare Devils',
      website: 'https://www.iplt20.com/',
      phone: '9999988888',
      imageUrl: 'assets/Delhi.png'
    },
    {
      name: 'Gujarat Lions',
      website: 'https://www.iplt20.com/',
      phone: '9999988888',
      imageUrl: 'assets/Gujarat_Lions.png'
    },
    {
      name: 'Mumbai Indians',
      website: 'https://www.iplt20.com/',
      phone: '9999123456',
      imageUrl: 'assets/MI.png'
    },
    {
      name: 'Kolkata Knight Riders',
      website: 'https://www.iplt20.com/',
      phone: '9999956321',
      imageUrl: 'assets/KKR.png'
    },
  ];

}
