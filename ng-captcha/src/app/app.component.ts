import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { RecaptchaFormsModule, RecaptchaModule } from "ng-recaptcha";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgIf
  ],
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  token: string | undefined;

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }
}
