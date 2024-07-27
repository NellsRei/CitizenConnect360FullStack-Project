import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-govpolls',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './govpolls.component.html',
  styleUrl: './govpolls.component.css'
})
export class GovpollsComponent {

  constructor(private router:Router){}
  delete(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  shownav: boolean = false

  toggleNav(): void {
    this.shownav = !this.shownav
  }
}
