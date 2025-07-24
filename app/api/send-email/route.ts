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
      from: `"🚀 ERPR Méthode" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: email,
      subject: "🔥 Votre demande pour être parmi les premiers avertis a été prise en compte – la méthode ERPR est confirmée !",
      text: `Bonjour,\n\nMerci de votre intérêt pour la méthode ERPR...`,
      html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🚀 Bienvenue dans l'aventure de la méthode ERPR !</h1>
        </div>
        
        <div style="padding: 30px; background: #fff; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <p style="font-size: 16px; line-height: 1.6;">Bonjour futur récitateur ou récitatrice,</p>
          
          <p style="font-size: 16px; line-height: 1.6;">✨ <strong>Félicitations !</strong> Vous venez de réserver votre place parmi les premiers à découvrir la méthode ERPR.</p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4f46e5;">
            <h3 style="color: #4f46e5; margin-top: 0;">🎁 Avantage exclusif :</h3>
            <ul style="padding-left: 20px;">
              <li>Les premiers à bénéficier d'une réduction de 10% dès le lancement</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">⏳ <strong>Patience récompensée :</strong> Nous finalisons les derniers détails pour vous offrir une expérience parfaite. Voici ce qui vous attend :</p>
          
          <div style="display: flex; margin: 25px 0; gap: 15px;">
            <div style="flex: 1; text-align: center; background: #f5f3ff; padding: 15px; border-radius: 8px;">
              <div style="font-size: 24px; margin-bottom: 10px;">🎯</div>
              <p style="margin: 0; font-size: 14px;">Méthode testée et réussie</p>
            </div>
            <div style="flex: 1; text-align: center; background: #ecfdf5; padding: 15px; border-radius: 8px;">
              <div style="font-size: 24px; margin-bottom: 10px;">⚡</div>
              <p style="margin: 0; font-size: 14px;">Résultats visibles dès les premiers cours</p>
            </div>
            <div style="flex: 1; text-align: center; background: #eff6ff; padding: 15px; border-radius: 8px;">
              <div style="font-size: 24px; margin-bottom: 10px;">🧠</div>
              <p style="margin: 0; font-size: 14px;">Approche logique et vers l'essentiel</p>
            </div>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">💡 <strong>En attendant le lancement :</strong> Suivez-nous sur Instagram <a href="https://www.instagram.com/son_importance?igsh=bHppaTJnM2Vzcmdj" style="color: #4f46e5; text-decoration: none; font-weight: 500;">@son_importance</a> si vous avez des questions sur cette méthode !</p>
          
          <p style="font-size: 16px; line-height: 1.6;">À très vite,</p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 0;">
            <strong>son_importance fondateur de la méthode ERPR</strong><br>
            <span style="color: #6b7280;">Votre succès en arabe commence ici</span>
          </p>
        </div>
        
        <div style="text-align: center; padding: 20px 0; color: #9ca3af; font-size: 12px;">
          <p style="margin: 5px 0;">© 2025 son_importance. Tous droits réservés.</p>
          <p style="margin: 5px 0;">
            <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 10px;">Mentions légales</a>
            <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 10px;">Désabonnement</a>
          </p>
        </div>
      </div>
      `,
    };

    // Notification à vous-même (admin)
    const adminNotification = {
      from: `"ERPR Notif" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_FROM,
      subject: `📩 Nouvelle souscription - ${email}`,
      text: `Nouvelle souscription reçue.\n\nEmail: ${email}\nDate: ${now}\nAction: Contacter cette personne pour la suite.`,
      html: `
        <div style="font-family: sans-serif;">
          <h2>📩 Nouvelle souscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${now}</p>
          <p><strong>Action:</strong> Contacter cette personne pour la suite.</p>
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
