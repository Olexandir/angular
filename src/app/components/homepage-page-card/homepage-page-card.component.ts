import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { Card } from './../../interfaces/app.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-homepage-page-card',
  templateUrl: './homepage-page-card.component.html',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class HomepagePageCardComponent {
  @Input() public topic!: Card;

  public form!: FormGroup;

  private lang = 'en';

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      lang: this.lang,
    });
    this.form.valueChanges.subscribe((aaa) => (this.lang = aaa.lang));
  }

  public openPage(): void {
    const id = this.topic.cardId.toString();
    this.router.navigate(['', { outlets: { details: ['topic', id] } }], {
      queryParams: { lang: this.lang },
    });
  }
}
