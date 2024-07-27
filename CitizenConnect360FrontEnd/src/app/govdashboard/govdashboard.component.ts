import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-govdashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './govdashboard.component.html',
  styleUrl: './govdashboard.component.css'
})
export class GovdashboardComponent {

  constructor(private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  shownav: boolean = false
  username:string = ''

  toggleNav(): void {
    this.shownav = !this.shownav
  }
  ngOnInit(): void {
    
    const storedUsername = localStorage.getItem('username')
    console.log(storedUsername)
  if (storedUsername) {
    this.username = storedUsername;
  }
  }
}
