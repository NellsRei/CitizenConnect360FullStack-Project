import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminuserapproval',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './adminuserapproval.component.html',
  styleUrl: './adminuserapproval.component.css'
})
export class AdminuserapprovalComponent {

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
