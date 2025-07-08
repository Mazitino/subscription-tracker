import nodeMailer from 'nodemailer';
import { EMAIL_PASSWORD, EMAIL_USER } from './env.js';

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD
  }
});

export default transporter;