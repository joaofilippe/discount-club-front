import { Component, input, InputSignal } from '@angular/core'

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  label: InputSignal<string> = input('')
  typeInput: InputSignal<string> = input('')
  nameInput: InputSignal<string> = input('')
  idInput: InputSignal<string> = input('')
}
