import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Validators } from '@angular/forms';
import { CalcService } from './calc/calc.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent  implements OnInit {
  
  pointsArray!: { point: { x: number; y: number }; color: string }[];  n: number = 0;
  r: number = 0;

  xyForm!: FormGroup;

  //@Output() GoodAdd: EventEmitter<Good> = new EventEmitter<Good>();  
  constructor(private fb: FormBuilder, private alertController: AlertController, private calc:CalcService) { 
    this.xyForm = this.fb.group({
      xyCount: ['', [Validators.required]],
      circleRadius: ['', [Validators.required]],
    });
  }

  //збереження форми
  OnSubmit(){
    let n = this.xyForm.value.xyCount;
    let r = this.xyForm.value.circleRadius;
    if (n>0 && r>0) {
      console.log("Форма правильна");
      this.pointsArray = this.calc.generatePointsArray(n, r);
    }
    else alert("Форма введена неправильно");
  }

  ngOnInit() {}

}
