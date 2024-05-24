import { Component, inject, OnDestroy, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast-service/toast.service';
import { ToastClassEnum } from '../../enums/toast-class-enum';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  classEnum = ToastClassEnum;
  constructor(public toastService: ToastService){
  
  }
}