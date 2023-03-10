import { Component, Input } from '@angular/core';

export interface IFlavoredListItem {
  line: string;
  sublines?: string[];
}

@Component({
  selector: 'td-cfm-list',
  styleUrls: ['./cfm-list.component.scss'],
  templateUrl: './cfm-list.component.html',
})
export class TdFlavoredListComponent {
  @Input() lines!: IFlavoredListItem[];
  @Input() dense = false;
}
