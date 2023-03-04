import nodemailer, { Transporter } from "nodemailer";

import {
    IMailProvider,
    ISendMailsendMailToRecoveryPasswordRequest,
} from "../IMailProvider";

export class MailTrapProvider implements IMailProvider {
    private client: Transporter;
    constructor() {
        const transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5a5909a3b816cd",
                pass: "7d0f2637a8f7a3",
            },
        });
        this.client = transporter;
    }
    async sendMailToRecoveryPassword({
        to,
        subject,
        body,
    }: ISendMailsendMailToRecoveryPasswordRequest): Promise<void> {
        await this.client.sendMail({
            to,
            from: "noreply@trocadesenha.mailtrap.com",
            subject,
            text: body,
            html: body,
        });
    }
}
