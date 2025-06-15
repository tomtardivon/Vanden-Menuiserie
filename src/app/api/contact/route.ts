import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import ContactConfirmationEmail from '@/emails/ContactConfirmationEmail';
import AdminNotificationEmail from '@/emails/AdminNotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, project, message } = body;

    console.log('Données reçues:', { name, email, phone, project, message });

    if (!name || !email || !phone || !project) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    const adminEmailHtml = await render(AdminNotificationEmail({
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      projectType: project,
      customerMessage: message,
    }));

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['tomtardivon@gmail.com'],
      subject: `Nouvelle demande de devis - ${project}`,
      html: adminEmailHtml,
    });

    if (error) {
      console.error('Erreur Resend admin:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email admin' },
        { status: 500 }
      );
    }

    console.log('Email admin envoyé avec ID:', data?.id);

    const confirmationEmailHtml = await render(ContactConfirmationEmail({
      customerName: name,
      projectType: project,
      customerPhone: phone,
      customerMessage: message,
    }));

    const confirmationResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['tomtardivon@gmail.com'],
      subject: `[CLIENT: ${email}] Confirmation de votre demande de devis - Vanden Menuiserie`,
      html: confirmationEmailHtml,
    });

    if (confirmationResult.error) {
      console.error('Erreur envoi confirmation:', confirmationResult.error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de la confirmation' },
        { status: 500 }
      );
    }

    console.log('Email client envoyé avec ID:', confirmationResult.data?.id);

    return NextResponse.json({
      message: 'Demande envoyée avec succès',
      adminEmailId: data?.id,
      confirmationEmailId: confirmationResult.data?.id
    });

  } catch (error) {
    console.error('Erreur API:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}