import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @Input()
  isMandatory: boolean;
  @Input()
  categoryHeading: string;
  @Input()
  categoryText: string;
  @Input()
  pluginList: any;

  opened: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }
}
