import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  // Impor IonicModule
import { ErrorMessageComponent } from '../components/error-message/error-message.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [
    CommonModule,
    IonicModule  // Tambahkan IonicModule di sini
  ],
  exports: [ErrorMessageComponent]
})
export class SharedModule { }
