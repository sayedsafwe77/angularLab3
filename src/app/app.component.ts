import { Component } from '@angular/core';
import {SearchService} from'../../serves/search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-requests';
  data: any;
  name: any;
  constructor(private userservice: SearchService){}
  ngOnInit(): void {
    
  }
  
  handlesearch(){
    this.name=document.getElementById('user');
    this.name=this.name.value;
    this.userservice.setParram(this.name);
    
    this.userservice.getSearchList().subscribe({
      next: (data) => {
        data['items'].forEach(element => {
          console.log(element.volumeInfo.title);
        });
        this.data=data['items']; 
      },
      error: (msg) => {
        console.log('error',msg);
      }
    })
    
  }
}
