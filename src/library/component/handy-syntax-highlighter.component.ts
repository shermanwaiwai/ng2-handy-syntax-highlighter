import { Component, Input } from '@angular/core';

@Component({
  selector: 'handy-syntax-highlighter',
  template: `
    <pre class="language-{{language}}">
      <code highlighter [language]="language" [content]="content"></code>
    </pre>
`
})
export class HandySyntaxHighlighterComponent {
  @Input() public language: string;
  @Input() public content: string;
}
