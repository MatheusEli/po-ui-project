import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html'
})
export class ClassificacaoComponent implements OnInit {

  code =[
    `class Calc {
      sumValues(firstValue: any, secondValue: any): any{
        const result = firstValue + secondValue
        return result
      }
      substractValues(firstValue: any, secondValue: any): any{
        const result = firstValue - secondValue
        return result
      }
    }`,`
    class Calculator{
      sum(firstValue : number, secondValue: number): number{
        return firstValue + secondValue
      }

      substract(firstValue: number, secondValue: number): number{
        return firstValue - secondValue
      }
    }`
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
