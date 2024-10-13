import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-toogle-btn',
  standalone: true,
  imports: [],
  templateUrl: './menu-toogle-btn.component.html',
  styleUrl: './menu-toogle-btn.component.css',
})
export class MenuToogleBtnComponent {
  @Output() toggle = new EventEmitter<void>();
  onToggle() {
    this.toggle.emit();
  }
}
