import { Component, Input } from "@angular/core";

@Component({
  selector: "mw-category-list",
  template: `
    <span class="label" *ngFor="let category of categories">
      {{ category }}
    </span>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        margin-bottom: 20px;
      }

      :host-context(.medium-movies) span {
        background-color: #53ace4;
      }

      :host-context(.medium-series) span {
        background-color: #45bf94;
      }

      span {
        display: inline-block;
        margin-right: 4px;
        margin-bottom: 4px;
      }
      
      span:last-of-type {
        margin-right: 0;
      }

      .label {
        background-color: #999999;
        color: #ffffff;
        border-radius: 4px;
        padding: 2px 6px;
        font-style: italic;
        width: max-content;
      }
    `
  ]
})
export class CategoryListComponent {
  @Input() categories: string[];
}