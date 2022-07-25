import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

enum FieldsEnum {
  NAME_EN = 'Your name',
  NAME_RU = 'Ваше имя',
  EMAIL_EN = 'Your e-mail',
  EMAIL_RU = 'Ваш e-mail',
}
@Component({
  standalone: true,
  templateUrl: './topic-details.component.html',
  imports: [RouterModule, ReactiveFormsModule],
})
export class TopicDetailsComponent {
  public savedInfo = '';

  public info = {
    name: '',
    email: '',
  };

  constructor(private actR: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log('hello bitch');

    const lang = this.actR.snapshot.queryParams['lang'];
    this.createInputFields(lang);

    this.actR.params.subscribe((data) => console.log(data));
    // console.log(this.actR);
    // console.log(this.actR);
  }

  public saveInputChange(value: string): void {
    this.savedInfo = value;
  }

  public onBlur(input: HTMLInputElement): void {
    input.value = '';
  }

  private createInputFields(lang: string) {
    lang === 'en' ? this.createEnFields() : this.createRuFields();
  }

  private createEnFields(): void {
    const newInfos = { name: FieldsEnum.NAME_EN, email: FieldsEnum.EMAIL_EN };
    this.info = { ...newInfos };
  }

  private createRuFields(): void {
    const newInfos = { name: FieldsEnum.NAME_RU, email: FieldsEnum.EMAIL_RU };
    this.info = { ...newInfos };
  }
}
