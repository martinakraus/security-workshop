import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from "ng-recaptcha";
import { provideHttpClient } from "@angular/common/http";


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '',
      } as RecaptchaSettings,
    },
  ],
})
  .catch(err => console.error(err));
