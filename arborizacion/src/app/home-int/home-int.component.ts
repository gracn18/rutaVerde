import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-int',
  templateUrl: './home-int.component.html',
  styleUrls: ['./home-int.component.scss']
})
export class HomeIntComponent implements OnInit {

  constructor() { }

  images = [
    
    {path: 'assets/img/foto1.jpg'},
    {path: 'assets/img/foto3.jpg'},
    {path: 'assets/img/foto7.jpg'},
    {path: 'assets/img/foto8.jpg'},
    {path: 'assets/img/foto9.jpg'},
]

  ngOnInit(): void {
  }

}
