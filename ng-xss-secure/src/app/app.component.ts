import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-secure';
  dangerousHtmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  dangerousUrl = 'javascript:alert("Hi there")';
  constructor(private domSanitizer: DomSanitizer) {
  }

  trustedUrl = this.domSanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  trustedHtml = this.domSanitizer.bypassSecurityTrustHtml(this.dangerousHtmlSnippet);

}
