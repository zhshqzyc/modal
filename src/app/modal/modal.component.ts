import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() public title = '';
  public isHidden = false;

  public close(): void {
    this.isHidden = true;
  }

  public open(): void {
    this.isHidden = false;
  }
}
