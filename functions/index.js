const functions = require('firebase-functions');
const nodemailer = require('nodemailer'),
  htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

transporter.use('compile', htmlToText());

const sendOrderByEmail = data => {
  const options = {
    from: 'Margherita',
    to: data.email,
    subject: 'Заказ получен (Margherita)',
    html: `
      <section>
        <h2>Спасибо, ${data.clientName}! Мы работаем над Вашим заказом.</h2>
        <ul>
          ${data.order.map(({ name, price, quantity }) => (
            `<li>${name} - ${quantity} шт., цена ${price * quantity} руб.</li>`
          )).join('')}    
        </ul>
        <p>Итого: ${data.order.reduce((sum, item) => sum + item.price * item.quantity, 0)} руб.</p>
      </section>
    `
  };

  transporter.sendMail(options);
};

exports.sendEmailToUser = functions.database.ref('orders/{pushID}')
  .onCreate(order => sendOrderByEmail(order.val()));
