import { ToastClassEnum } from "../enums/toast-class-enum";

export interface Toast {
    body: string;
    className: ToastClassEnum;
    delay?: number;
  }