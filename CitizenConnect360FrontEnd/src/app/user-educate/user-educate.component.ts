import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-educate',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-educate.component.html',
  styleUrl: './user-educate.component.css'
})
export class UserEducateComponent implements OnInit {

  constructor(private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  shownav: boolean = false
  ngOnInit(): void {
    // console.log(this.shownav)
  }

  toggleNav(): void {
    this.shownav = !this.shownav
  }
}
