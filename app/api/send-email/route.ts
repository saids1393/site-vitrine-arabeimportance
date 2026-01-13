import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email, message, subject } = await request.json();

  if (!email || !message) {
    return new Response(JSON.stringify({ message: 'Email et message requis' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    const now = new Date().toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Email de notification pour vous (admin)
    const adminNotification = {
      from: `"ERPR Contact Form" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_FROM,
      subject: `📧 Nouveau message de contact - ${email}`,
      text: `Nouveau message reçu via le formulaire de contact.\n\nEmail: ${email}\nDate: ${now}\nSujet: ${subject || "Une question ? Besoin d'en savoir plus ?"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <div style="background: linear-gradient(135deg, #ec4899 0%, #3b82f6 100%); padding: 20px; text-align: center; color: white; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">📧 Nouveau message de contact</h2>
          </div>

          <div style="padding: 25px; background: #fff; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <div style="margin-bottom: 20px;">
              <p><strong>👤 Expéditeur:</strong> ${email}</p>
              <p><strong>📅 Date:</strong> ${now}</p>
              <p><strong>📋 Sujet:</strong> ${subject || "Une question ? Besoin d'en savoir plus ?"}</p>
            </div>

            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">💬 Message:</h3>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 6px;">
              <p style="margin: 0; color: #1e40af; font-weight: 500;">
                ⚡ Action recommandée: Répondre dans les plus brefs délais
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Email de confirmation à l'utilisateur
    const userConfirmation = {
      from: `"ERPR - Support" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: email,
      subject: "✅ Nous avons bien reçu votre message",
      text: `Bonjour,\n\nNous avons bien reçu votre message et nous vous en remercions.\n\nNotre équipe va examiner votre demande et vous répondra dans les plus brefs délais.\n\nVoici le résumé de votre message :\n\n"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"\n\nCordialement,\nL'équipe ERPR - arabeimportance`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <div style="background: linear-gradient(135deg, #ec4899 0%, #3b82f6 100%); padding: 30px; text-align: center; color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">✅ Message reçu !</h1>
            <p style="margin: 10px 0 0; font-size: 16px;">Nous avons bien reçu votre message</p>
          </div>

          <div style="padding: 30px; background: #fff; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <p style="font-size: 16px; margin-bottom: 20px;">Bonjour,</p>

            <p style="font-size: 16px; margin-bottom: 20px;">
              Nous avons bien reçu votre message et nous vous en remercions. Notre équipe va examiner votre demande et vous répondra dans les plus brefs délais.
            </p>

            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ec4899;">
              <h3 style="color: #be185d; margin-top: 0; margin-bottom: 15px;">📝 Votre message :</h3>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #6b7280;">${message}</p>
            </div>

            <p style="font-size: 16px; margin: 20px 0;">
              <strong>⏱️ Délai de réponse :</strong><br>
              Nous nous engageons à vous répondre dans un délai maximum de 24 à 48 heures.
            </p>

            <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px; color: #1e40af;">
                <strong>💡 En attendant :</strong><br>
                N'hésitez pas à nous suivre sur nos réseaux sociaux pour découvrir du contenu exclusif sur l'apprentissage de l'arabe.
              </p>
            </div>

            <p style="font-size: 16px; margin: 20px 0 5px;">Cordialement,</p>
            <p style="font-size: 16px; margin: 0 0 20px; font-weight: 600;">
              L'équipe <span style="color: #3b82f6;">ERPR - arabeimportance</span><br>
              <span style="color: #6b7280; font-size: 14px;">"L'importance de la langue"</span>
            </p>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://instagram.com/arabeimportance" style="display: inline-block; margin: 0 10px; text-decoration: none;">
                <div style="background: linear-gradient(135deg, #ec4899 0%, #3b82f6 100%); color: white; padding: 10px 20px; border-radius: 6px; font-weight: 500;">
                  📸 Nous suivre sur Instagram
                </div>
              </a>
              <a href="https://t.me/ArabeImportance" style="display: inline-block; margin: 0 10px; text-decoration: none;">
                <div style="background: linear-gradient(135deg, #3b82f6 0%, #ec4899 100%); color: white; padding: 10px 20px; border-radius: 6px; font-weight: 500;">
                  📢 Rejoindre Telegram
                </div>
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; background: #f9fafb;">
            <p style="margin: 5px 0;">© 2025 arabeimportance. Tous droits réservés.</p>
            <p style="margin: 5px 0; font-size: 11px; color: #9ca3af;">
              Vous recevez cet email car vous avez contacté notre service via le formulaire de contact.
            </p>
          </div>
        </div>
      `,
    };

    // Envoi des emails
    await transporter.sendMail(adminNotification);
    await transporter.sendMail(userConfirmation);

    return new Response(JSON.stringify({
      success: true,
      message: 'Message envoyé avec succès',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur:', error);
    return new Response(JSON.stringify({
      success: false,
      message: "Désolé, une erreur s'est produite. Veuillez réessayer plus tard."
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
