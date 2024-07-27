import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminusermanagement',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './adminusermanagement.component.html',
  styleUrl: './adminusermanagement.component.css'
})
export class AdminusermanagementComponent {

  shownav: boolean = false

  toggleNav(): void {
    this.shownav = !this.shownav
  }
  constructor(private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
