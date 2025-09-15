import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operator',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.css'
})
export class OperatorComponent implements OnInit{

  operatorForm!: FormGroup;
  operatorCount = 1;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.operatorCount = +params['operators'] || 1;
      this.initForm(this.operatorCount);
    });
  }

  initForm(count: number) {
    this.operatorForm = this.fb.group({
      operators: this.fb.array([])
    });

    for (let i = 0; i < count; i++) {
      this.addOperator();
    }
  }

  get operators(): FormArray {
    return this.operatorForm.get('operators') as FormArray;
  }

  addOperator() {
    const operatorGroup = this.fb.group({
      operatorName: ['', Validators.required],
      operatorPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      machines: this.fb.array([this.createMachineGroup()])
    });

    this.operators.push(operatorGroup);
  }

  createMachineGroup(): FormGroup {
    return this.fb.group({
      machineName: ['', Validators.required],
      machineType: ['', Validators.required],
      powerLimit: ['', [Validators.required, Validators.min(1)]]
    });
  }

  machines(operatorIndex: number): FormArray {
    return this.operators.at(operatorIndex).get('machines') as FormArray;
  }

  addMachine(operatorIndex: number) {
    this.machines(operatorIndex).push(this.createMachineGroup());
  }

  onNext() {
    if (this.operatorForm.invalid) {
      const operatorData = this.operatorForm.value;
      console.log(operatorData)
      this.router.navigate(['/machine'], {
        queryParams: {
          data: JSON.stringify(operatorData)
        }
      });
    } else {
      this.operatorForm.markAllAsTouched();
    }
  }
}

