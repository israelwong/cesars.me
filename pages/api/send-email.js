import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { to, subject, text } = req.body;

  try {
    const result = await client.messages.create(process.env.MAILGUN_DOMAIN, {
      from: 'Tu Nombre <tu-email@tudominio.com>',
      to,
      subject,
      text,
    });

    return res.status(200).json({ message: 'Correo enviado con éxito', id: result.id });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return res.status(500).json({ message: 'Error al enviar correo', error });
  }
}
