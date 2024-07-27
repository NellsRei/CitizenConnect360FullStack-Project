import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent implements OnInit {

  shownav: boolean = false
  username:string = ''
  
  ngOnInit(): void {
    
    const storedUsername = localStorage.getItem('username')
    console.log(storedUsername)
  if (storedUsername) {
    this.username = storedUsername;
  }
  }

  toggleNav(): void {
    this.shownav = !this.shownav
  }
  constructor(private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
} 
