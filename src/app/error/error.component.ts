import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Something Went Wrong, Please contact the Support'
  constructor() { }

  ngOnInit(): void {
  }

}
