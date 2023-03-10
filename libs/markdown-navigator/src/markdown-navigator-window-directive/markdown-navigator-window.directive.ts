import { Directive, HostListener, Input } from '@angular/core';
import {
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '../markdown-navigator-window-service/markdown-navigator-window.service';

@Directive({
  selector: '[tdMarkdownNavigatorWindow]',
})
export class TdMarkdownNavigatorWindowDirective {
  @Input('tdMarkdownNavigatorWindow') config?: IMarkdownNavigatorWindowConfig;
  @Input() disabled = false;
  constructor(
    private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService
  ) {}

  @HostListener('click') click(): void {
    if (!this.disabled && this.config) {
      this._markdownNavigatorWindowService.open(this.config);
    }
  }
}
