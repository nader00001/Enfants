import { Component } from '@angular/core';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent {
  //
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
  input7: string;
  input8: string;
  input9: string;
  input10: string;
  //
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  //
  step5 : string ;
  step6 : string ;
  step7 : string ;
  //
  inputimg1 : string ;
  inputimg2 : string ;
  inputimg3 : string ;
//
inputdhefde3a : string ;
//
logdtho3ben : string ;

  constructor() {
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';
    this.input4 = '';
    this.input5 = '';
    this.input6 = '';
    this.input7 = '';
    this.input8 = '';
    this.input9 = '';
    this.input10 = '';
    ///
    this.step1 = '';
    this.step2 = '';
    this.step3 = '';
    this.step4 = '';
    //
    this.step5 = '' ;
    this.step6 = '';
    this.step7 = '';
    //
    this.inputimg1 = '';
    this.inputimg2 = '';
    this.inputimg3 = '';
    //
    this.inputdhefde3a= '';
    //
    this.logdtho3ben = '';
  }
// 1
  submitAnswers() {
    console.log('Answer 1:', this.input1);
    console.log('Answer 2:', this.input2);
    console.log('Answer 3:', this.input3);
    console.log('Answer 4:', this.input4);
    console.log('Answer 5:', this.input5);
    console.log('Answer 6:', this.input6);
    console.log('Answer 7:', this.input7);
    console.log('Answer 8:', this.input8);
    console.log('Answer 9:', this.input9);
    console.log('Answer 10:', this.input10);
  }

  ///2
  logSteps1() {
    console.log('Etape 1:', this.step1);
    console.log('Etape 2:', this.step2);
    console.log('Etape 3:', this.step3);
    console.log('Etape 4:', this.step4);
  }
  //
  logSteps2() {
    console.log('Etape 1:', this.step5);
  }
  // img
  logResults(){}

  //
  logdhefde3a(){}
  //
  logdtho3benR(){}
}
