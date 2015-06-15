/*global require, console */
var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'jgwynn2901@gmail.com',
      pass: 'P@ssw0rd9'
    }
  });

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'gwynnj@us.innovation-group.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world from Node.js nodemailer ✔', // plaintext body
    html: '<b>Hello world <br/>from Node.js nodemailer</b>' // html body
  };

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
  'use strict';
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);

});
