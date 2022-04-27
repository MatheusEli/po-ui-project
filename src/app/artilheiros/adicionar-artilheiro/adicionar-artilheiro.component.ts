import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-adicionar-artilheiro',
  templateUrl: './adicionar-artilheiro.component.html'
})
export class AdicionarArtilheiroComponent {

  constructor(private http: HttpClient) { }

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

  fields: Array<PoDynamicFormField> = [
    {
      property: 'nome',
      label: 'Nome',
      type: 'string',
      required: true,
      placeholder: 'Digite o nome do artilheiro...',
      minLength: 3,
      maxLength: 50,
      gridColumns: 12
    },
    {
      property: 'idade',
      label: 'Idade',
      type: 'number',
      required: true,
      maxValue: 99,
      maxLength: 2,
      minLength: 1,
      gridColumns: 4
    },
    {
      property: 'gols',
      label: 'Gols na liga',
      type: 'number',
      required: true,
      maxValue: 99,
      maxLength: 2,
      minLength: 1,
      gridColumns: 4
    },
    {
      property: 'partidas',
      label: 'Partidas jogadas',
      type: 'number',
      required: true,
      maxValue: 99,
      maxLength: 2,
      minLength: 1,
      gridColumns: 4
    }
  ]

  enviaFormulario() {
    this.http.post(
      'http://localhost:3000/artilheiros', 
      this.dynamicForm.form.form.value
    ).subscribe(response => {
      console.log(response)
    })
  }
}
