export interface ISendMailsendMailToRecoveryPasswordRequest {
    to: string;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMailToRecoveryPassword({
        to,
        subject,
        body,
    }: ISendMailsendMailToRecoveryPasswordRequest): Promise<void>;
}
