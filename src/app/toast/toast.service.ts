import { Injectable, TemplateRef } from '@angular/core';
import { Toast } from './toast-model';
import { ToastClassEnum } from '../enums/toast-class-enum';



@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  showSuccess(body: string, className: ToastClassEnum) {
    this.toasts.push({body,className});
  }

  remove(toast: Toast) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

  clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
