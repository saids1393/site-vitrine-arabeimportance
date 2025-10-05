import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ message: 'Email requis' }), {
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

    // Email au client
    const emailContent = {
      from: `"📚 Méthode ERPR - Apprendre à lire et écrire" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: email,
      subject: "🎉 Vous serez parmi les premiers notifiés pour la méthode ERPR !",
      text: `Bonjour,\n\nMerci pour votre inscription à la méthode ERPR...`,
      html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%); padding: 30px; text-align: center; color: white; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">🎉 Merci pour votre inscription !</h1>
          <p style="margin: 10px 0 0; font-size: 16px;">Vous serez parmi les premiers à découvrir la méthode ERPR</p>
        </div>

        <div style="padding: 30px; background: #fff; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <p style="font-size: 16px; margin-bottom: 20px;">Bonjour,</p>

          <p style="font-size: 16px; margin-bottom: 20px;">Vous venez de vous inscrire pour être <strong>parmi les premiers notifiés</strong> du lancement de la <strong>méthode ERPR</strong> (Écoute - Répétition - Pratique - Régularité), conçue spécialement pour vous permettre d'acquérir <strong>les bases de la lecture et de l'écriture</strong> de manière efficace et progressive.</p>

<div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
  <h3 style="color: #1e40af; margin-top: 0;">🔹 Ce qui vous attend :</h3>
  <ul style="padding-left: 20px; margin: 10px 0;">
    <li>Une <strong>méthode testée</strong> pour apprendre à lire et écrire rapidement</li>
    <li>Plus de <strong>530 audios interactifs</strong> pour une immersion totale</li>
    <li>Des <strong>devoirs envoyés automatiquement</strong></li>
    <li>Une <strong>possibilité d'accompagnement</strong> 7j/7</li>
    <li>Un <strong>groupe privé Telegram</strong></li>
    <li>Amélioration <strong>continue</strong> de l'application avec de futurs niveaux</li>
  </ul>
</div>


          <div style="display: flex; justify-content: space-between; margin: 25px 0; gap: 15px;">
            <div style="text-align: center; flex: 1;">
              <div style="background: #dbeafe; width: 60px; height: 60px; margin: 0 auto 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎧</div>
              <p style="margin: 0; font-size: 14px; font-weight: 500;">Écoute active</p>
            </div>
            <div style="text-align: center; flex: 1;">
              <div style="background: #e0f2fe; width: 60px; height: 60px; margin: 0 auto 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">🔁</div>
              <p style="margin: 0; font-size: 14px; font-weight: 500;">Répétition espacée</p>
            </div>
            <div style="text-align: center; flex: 1;">
              <div style="background: #bae6fd; width: 60px; height: 60px; margin: 0 auto 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">✍️</div>
              <p style="margin: 0; font-size: 14px; font-weight: 500;">Pratique guidée</p>
            </div>
            <div style="text-align: center; flex: 1;">
              <div style="background: #7dd3fc; width: 60px; height: 60px; margin: 0 auto 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">📅</div>
              <p style="margin: 0; font-size: 14px; font-weight: 500;">Régularité</p>
            </div>
          </div>

          <p style="font-size: 16px; margin: 20px 0;">📅 <strong>Prochaines étapes :</strong></p>
          <ol style="padding-left: 20px; margin: 10px 0;">
            <li>Vous recevrez lors de sa sortie un lien vers l'application pour vous inscrire et payer</li>
            <li>Les places seront attribuées <strong>par ordre d'inscription</strong></li>
            <li>Si une personne désiste ou ne répond, la place passera à la personne suivante</li>
            <li>En espérant que notre application vous plaira</li>
          </ol>

          <div style="background: #f3e8ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
            <p style="margin: 0; font-size: 14px;"><strong>⚠️ Important :</strong> Pour ne pas perdre votre place dans la liste d'attente, assurez-vous de répondre rapidement à notre email de notification lors du lancement.</p>
          </div>

          <p style="font-size: 16px; margin: 20px 0;">Nous sommes impatients de vous compter parmi nos premiers utilisateurs !</p>

          <p style="font-size: 16px; margin: 20px 0 5px;">Cordialement,</p>
          <p style="font-size: 16px; margin: 0 0 20px; font-weight: 600;">
            L'équipe <span style="color: #3b82f6;">arabeimportance</span><br>
            <span style="color: #6b7280; font-size: 14px;">"L'importance de la langue"</span>
          </p>

          <div style="text-align: center;">
            <a href="https://instagram.com/arabeimportance" style="display: inline-block; margin: 0 5px;">
              <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" width="32"/>
            </a>
            <a href="https://t.me/arabeimportance" style="display: inline-block; margin: 0 5px;">
              <img src="https://img.icons8.com/color/48/000000/telegram-app.png" alt="Telegram" width="32"/>
            </a>
          </div>
        </div>

        <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; background: #f9fafb;">
          <p style="margin: 5px 0;">© 2025 arabeimportance. Tous droits réservés.</p>
          <p style="margin: 5px 0;">
            <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 10px;">Politique de confidentialité</a>
            <a href="#" style="color: #6b7280; text-decoration: none; margin:  Això0 10px;">Conditions d'utilisation</a>
          </p>
          <p style="margin: 5px 0; font-size: 11px; color: #9ca3af;">
            Vous recevez cet email car vous vous êtes inscrit(e) pour être notifié(e) du lancement de la méthode ERPR.
            <a href="#" style="color: #6b7280; text-decoration: none;">Se désabonner</a>
          </p>
        </div>
      </div>
      `,
    };

    // Notification à vous-même (admin)
    const adminNotification = {
      from: `"ERPR Notifications" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_FROM,
      subject: `📚 Nouvelle inscription ERPR - ${email} | ${now}`,
      text: `Nouvelle inscription reçue pour la méthode ERPR.\n\nEmail: ${email}\nDate: ${now}\nType: Pré-inscription pour notification de lancement\nAction: Ajouter à la liste d'attente.\n\nRappel: Les places seront attribuées par ordre d'inscription. Si une personne désiste ou ne répond pas sous 48h, la place passera à la personne suivante.`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <h2 style="color: #1e40af; margin-top: 0;">📚 Nouvelle inscription ERPR</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${now}</p>
            <p><strong>Type:</strong> Pré-inscription pour notification de lancement</p>

            <div style="margin: 15px 0; padding: 10px; background: #e0f2fe; border-radius: 6px;">
              <h3 style="color: #1e40af; margin-top: 0;">📋 Procédure d'attribution des places:</h3>
              <ul>
                <li>Ajouter à la liste d'attente par ordre d'inscription</li>
                <li>Envoyer le lien d'inscription lors du lancement</li>
                <li>Si la personne désiste ou ne répond pas sous 48h, passer à la suivante</li>
                <li>Répéter le processus jusqu'à attribution de toutes les places</li>
              </ul>
            </div>

            <p><strong>Action recommandée:</strong></p>
            <ul>
              <li>Ajouter cet email à la liste d'attente</li>
              <li>Noter la date d'inscription pour le classement</li>
            </ul>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(emailContent);
    await transporter.sendMail(adminNotification);

    return new Response(JSON.stringify({
      success: true,
      message: 'Email envoyé avec succès',
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
