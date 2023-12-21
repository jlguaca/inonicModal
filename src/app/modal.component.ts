import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  @ViewChild(IonModal) modal: IonModal;

  message = '';
  name: string;
  mail: string;
  university: string;
  faculty: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Bienvenido, ${ev.detail.data}, ya has completado el formulario!`;
    }
  }
}
