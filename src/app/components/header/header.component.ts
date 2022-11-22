import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() componentSelected = new EventEmitter<string>();

  onShowComponent(component) {
      this.componentSelected.emit(component);
  }
}
