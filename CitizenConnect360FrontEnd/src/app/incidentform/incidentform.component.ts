import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-incidentform',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './incidentform.component.html',
  styleUrl: './incidentform.component.css'
})
export class IncidentformComponent {

  form!:FormGroup

  onSubmit(){
    
  }
}
