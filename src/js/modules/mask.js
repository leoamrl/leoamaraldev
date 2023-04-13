import { InputMask } from "imask";

export const initMask = () => {
  const phoneField = document.getElementById('phone-input')

  if(phoneField) {
    const phoneMask = new InputMask(
      phoneField, {
        mask: '+55 (00) 9 0000.0000'
      });
  }
}