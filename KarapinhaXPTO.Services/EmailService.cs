using KarapinhaXPTO.Model;
using KarapinhaXPTO.Shared.Iservice;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KarapinhaXPTO.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailStandard _emailStandard;

        public EmailService(IOptions<EmailStandard> emailStandard)
        {
            _emailStandard = emailStandard.Value;
        }

        public async Task SendEmailAsync(string toEmail, string subject, string message)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress(_emailStandard.SenderName, _emailStandard.SenderEmail));
            emailMessage.To.Add(new MailboxAddress(toEmail, toEmail));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart("plain") { Text = message };

            using (var client = new SmtpClient())
            {
                client.CheckCertificateRevocation = false;
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                await client.ConnectAsync(_emailStandard.SmtpServer, _emailStandard.SmtpPort, MailKit.Security.SecureSocketOptions.Auto);
                await client.AuthenticateAsync(_emailStandard.SmtpUser, _emailStandard.SmtpPass);
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }

    }
}
