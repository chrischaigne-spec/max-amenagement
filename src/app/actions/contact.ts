"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const baseStyle = `
  font-family: 'Manrope', Arial, sans-serif;
  color: #18181B;
  line-height: 1.7;
`;

function emailForMax(data: ContactFormData) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet" />
</head>
<body style="margin:0; padding:0; background-color:#F4F4F5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F4F5; padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF; border-radius:16px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0F0F0F; padding:32px 40px;">
              <h1 style="${baseStyle} color:#FFFFFF; font-size:22px; font-weight:700; margin:0;">
                Nouveau projet
              </h1>
              <p style="${baseStyle} color:#A1A1AA; font-size:14px; margin:8px 0 0;">
                Un visiteur a rempli le formulaire de contact sur votre site.
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <!-- Nom -->
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #F4F4F5;">
                    <p style="${baseStyle} font-size:12px; font-weight:600; color:#A1A1AA; margin:0; text-transform:uppercase; letter-spacing:0.05em;">Nom</p>
                    <p style="${baseStyle} font-size:16px; font-weight:600; margin:4px 0 0;">${data.name}</p>
                  </td>
                </tr>
                <!-- Email -->
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #F4F4F5;">
                    <p style="${baseStyle} font-size:12px; font-weight:600; color:#A1A1AA; margin:0; text-transform:uppercase; letter-spacing:0.05em;">Email</p>
                    <p style="${baseStyle} font-size:16px; margin:4px 0 0;">
                      <a href="mailto:${data.email}" style="color:#18181B; text-decoration:none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                <!-- Téléphone -->
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #F4F4F5;">
                    <p style="${baseStyle} font-size:12px; font-weight:600; color:#A1A1AA; margin:0; text-transform:uppercase; letter-spacing:0.05em;">Téléphone</p>
                    <p style="${baseStyle} font-size:16px; margin:4px 0 0;">
                      ${data.phone ? `<a href="tel:${data.phone.replace(/\s/g, "")}" style="color:#18181B; text-decoration:none;">${data.phone}</a>` : "Non renseigné"}
                    </p>
                  </td>
                </tr>
                <!-- Message -->
                <tr>
                  <td style="padding:12px 0;">
                    <p style="${baseStyle} font-size:12px; font-weight:600; color:#A1A1AA; margin:0; text-transform:uppercase; letter-spacing:0.05em;">Message</p>
                    <p style="${baseStyle} font-size:15px; margin:8px 0 0; background-color:#FAFAFA; border-radius:12px; padding:16px;">
                      ${data.message.replace(/\n/g, "<br />")}
                    </p>
                  </td>
                </tr>
              </table>
              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}" style="${baseStyle} display:inline-block; background-color:#18181B; color:#FFFFFF; font-size:14px; font-weight:600; padding:12px 32px; border-radius:10px; text-decoration:none;">
                      Répondre à ${data.name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function emailForClient(data: ContactFormData) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet" />
</head>
<body style="margin:0; padding:0; background-color:#F4F4F5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F4F5; padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF; border-radius:16px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0F0F0F; padding:32px 40px;">
              <h1 style="${baseStyle} color:#FFFFFF; font-size:22px; font-weight:700; margin:0;">
                Max Aménagement
              </h1>
              <p style="${baseStyle} color:#A1A1AA; font-size:14px; margin:8px 0 0;">
                Votre message a bien été reçu
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="${baseStyle} font-size:16px; margin:0;">
                Bonjour <strong>${data.name}</strong>,
              </p>
              <p style="${baseStyle} font-size:15px; margin:16px 0 0;">
                Nous avons bien reçu votre message et nous vous en remercions. Max reviendra vers vous dans un délai de <strong>48 heures</strong> pour discuter de votre projet.
              </p>

              <!-- Récapitulatif -->
              <div style="background-color:#FAFAFA; border-radius:12px; padding:20px; margin:24px 0;">
                <p style="${baseStyle} font-size:13px; font-weight:700; color:#A1A1AA; margin:0 0 12px; text-transform:uppercase; letter-spacing:0.05em;">Récapitulatif de votre message</p>
                <p style="${baseStyle} font-size:14px; margin:0;">
                  ${data.message.replace(/\n/g, "<br />")}
                </p>
              </div>

              <!-- Coordonnées -->
              <p style="${baseStyle} font-size:15px; margin:24px 0 0;">
                En attendant, n'hésitez pas à nous contacter directement :
              </p>
              <table cellpadding="0" cellspacing="0" style="margin-top:16px;">
                <tr>
                  <td style="padding:6px 0;">
                    <p style="${baseStyle} font-size:14px; margin:0;">
                      <span style="color:#A1A1AA;">Téléphone :</span>&nbsp;
                      <a href="tel:0658696940" style="color:#18181B; font-weight:600; text-decoration:none;">06.58.69.69.40</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">
                    <p style="${baseStyle} font-size:14px; margin:0;">
                      <span style="color:#A1A1AA;">Email :</span>&nbsp;
                      <a href="mailto:amenagement.max@gmail.com" style="color:#18181B; font-weight:600; text-decoration:none;">amenagement.max@gmail.com</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;">
                    <p style="${baseStyle} font-size:14px; margin:0;">
                      <span style="color:#A1A1AA;">Instagram :</span>&nbsp;
                      <a href="https://www.instagram.com/Max_amenagement" style="color:#18181B; font-weight:600; text-decoration:none;">@Max_amenagement</a>
                    </p>
                  </td>
                </tr>
              </table>

              <p style="${baseStyle} font-size:15px; margin:24px 0 0;">
                À très bientôt,<br />
                <strong>Max Aménagement</strong>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#FAFAFA; padding:20px 40px; text-align:center;">
              <p style="${baseStyle} font-size:12px; color:#A1A1AA; margin:0;">
                1355 Route de Duerne, 69610 AVEIZE
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    if (!data.name || !data.email || !data.message) {
      return { success: false, error: "Veuillez remplir tous les champs obligatoires." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Adresse email invalide." };
    }

    await Promise.all([
      // Email pour Max
      resend.emails.send({
        from: "Max Aménagement <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL!,
        subject: `Nouveau projet : ${data.name}`,
        replyTo: data.email,
        html: emailForMax(data),
      }),
      // Email de confirmation pour le client
      resend.emails.send({
        from: "Max Aménagement <onboarding@resend.dev>",
        to: data.email,
        subject: `Max-Aménagement - Message bien reçu Mme/Mr ${data.name}`,
        html: emailForClient(data),
      }),
    ]);

    return { success: true };
  } catch {
    return { success: false, error: "Une erreur est survenue. Veuillez réessayer." };
  }
}
