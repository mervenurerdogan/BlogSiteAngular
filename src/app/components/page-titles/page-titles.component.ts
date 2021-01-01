import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-titles',
  templateUrl: './page-titles.component.html',
  styleUrls: ['./page-titles.component.css']
})
export class PageTitlesComponent implements OnInit {

  @Input() title!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
