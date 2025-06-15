import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactConfirmationEmailProps {
  customerName: string;
  projectType: string;
  customerPhone: string;
  customerMessage?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://vanden-menuiserie.vercel.app';

export const ContactConfirmationEmail = ({
  customerName,
  projectType,
  customerPhone,
  customerMessage,
}: ContactConfirmationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Confirmation de votre demande de devis - Vanden Menuiserie
      </Preview>
      <Container style={container}>
        <Section style={logoSection}>
          <Text style={logoText}>Vanden Menuiserie</Text>
        </Section>
        
        <Text style={greeting}>Bonjour {customerName},</Text>
        
        <Text style={paragraph}>
          Merci pour votre demande de devis pour votre projet de <strong>{projectType}</strong>.
        </Text>
        
        <Text style={paragraph}>
          Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais, généralement sous 24h.
        </Text>
        
        <Section style={summarySection}>
          <Text style={summaryTitle}>Récapitulatif de votre demande :</Text>
          <Text style={summaryItem}>• Type de projet : {projectType}</Text>
          <Text style={summaryItem}>• Téléphone : {customerPhone}</Text>
          {customerMessage && (
            <Text style={summaryItem}>• Message : {customerMessage}</Text>
          )}
        </Section>
        
        <Text style={paragraph}>
          Si vous avez des questions urgentes, n'hésitez pas à nous appeler directement.
        </Text>
        
        <Section style={btnContainer}>
          <Button style={button} href="tel:0762144340">
            Nous appeler : 07 62 14 43 40
          </Button>
        </Section>
        
        <Text style={signature}>
          Cordialement,
          <br />
          L'équipe Vanden Menuiserie
        </Text>
        
        <Hr style={hr} />
        
        <Section style={contactInfo}>
          <Text style={footer}>
            <strong>Vanden Menuiserie</strong><br />
            Zone d'intervention : Tout le Var (83)<br />
            Téléphone : 07 62 14 43 40<br />
            Email : contact@vanden-menuiserie.fr
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

ContactConfirmationEmail.PreviewProps = {
  customerName: 'Jean Dupont',
  projectType: 'Cuisine sur mesure',
  customerPhone: '06 12 34 56 78',
  customerMessage: 'Je souhaite refaire ma cuisine dans un style moderne.',
} as ContactConfirmationEmailProps;

export default ContactConfirmationEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const logoSection = {
  textAlign: 'center' as const,
  padding: '20px 0',
  backgroundColor: '#1e3a8a',
  borderRadius: '8px 8px 0 0',
};

const logoText = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0',
};

const greeting = {
  fontSize: '18px',
  lineHeight: '26px',
  margin: '32px 20px 20px 20px',
  fontWeight: '600',
  color: '#1e3a8a',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 20px',
  color: '#374151',
};

const summarySection = {
  backgroundColor: '#f8fafc',
  padding: '20px',
  margin: '20px',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
};

const summaryTitle = {
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 12px 0',
  color: '#1e3a8a',
};

const summaryItem = {
  fontSize: '14px',
  margin: '4px 0',
  color: '#4b5563',
};

const btnContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#8b5a3c',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 28px',
};

const signature = {
  fontSize: '16px',
  lineHeight: '26px',
  margin: '32px 20px 20px 20px',
  color: '#374151',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 20px',
};

const contactInfo = {
  textAlign: 'center' as const,
  margin: '0 20px',
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};