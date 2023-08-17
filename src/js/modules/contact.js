import { MailSender } from "../modules/MailSender";

export const initContact = () => {
  const contactForm = document.querySelector('[data-contact-form]');

  if(contactForm) {
    const contactFormSend = new MailSender(
      contactForm,
      {
        'name': document.querySelector('input[name=name]'),
        'phone': document.querySelector('input[name=phone]'),
        'email': document.querySelector('input[name=email]'),
        'company': document.querySelector('input[name=company]'),
        'budget': document.querySelector('input[name=budget]'),
        'message': document.querySelector('input[name=message]')
      },
      './sendContact.php',
      '[data-contact-form-response]'
    );

    contactForm.addEventListener('submit', (e) => {
      contactFormSend.submit(e);
      window.lintrk('track', { conversion_id: 13058233 })
    })
  }
}