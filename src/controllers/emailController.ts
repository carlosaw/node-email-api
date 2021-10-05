import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
  // Passo 1: Configurar o transporter (servidor SMTP)
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8192d801cc0f4e",
      pass: "08456984fa24a5"
    }
  });

  // Passo 2: Configurar a mensagem
  let message = {
    from: 'não-responda@aw2web.com.br',// Quem envia
    to: 'carlosfreevg@gmail.com',//Quem recebe
    subject: req.body.subject,//Assunto
    html: req.body.email,
    text: req.body.email
  };

  // Passo 3: Enviar a mensagem
  let info = await transport.sendMail(message);
  console.log("INFO: ", info);

  res.json({success: true});
}