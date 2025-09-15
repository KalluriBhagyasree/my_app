 import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manger',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './manger.component.html',
  styleUrl: './manger.component.css'
})
export class MangerComponent implements OnInit{
 managerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.managerForm = this.fb.group({
      managerName: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      numberOfSections: [1, [Validators.required, Validators.min(1)]],
      numberOfOperators: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onNext() {
    if (this.managerForm.valid) {
      const formData = this.managerForm.value;
      console.log("data:", formData)
      this.router.navigate(['/operator'], {
        queryParams: {
          managerName: formData.managerName,
          contact: formData.contact,
          sections: formData.numberOfSections,
          operators: formData.numberOfOperators
        }
      });
    } else {
      this.managerForm.markAllAsTouched();
    }
  }

}

