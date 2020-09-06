import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  

  name = ''
  welcomeMessageFromService: string
  response : any

  constructor(
    private router: ActivatedRoute,
    private service: WelcomeDataService ) { }

  ngOnInit(): void {
    this.name = this.router.snapshot.params['name']
  }
  getCustomisedMessage(){
    console.log(this.service.executeHelloWorldBeanService()); 
    this.service.executeHelloWorldBeanService().subscribe(
       response => this.handleSuccessfulResponse(response)
     );
  
  }
  
  handleSuccessfulResponse(response){
    console.log(response);
    console.log(response.msg);
    this.welcomeMessageFromService = response.msg;
  }
}
