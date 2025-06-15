import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface AdminNotificationEmailProps {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  projectType: string;
  customerMessage?: string;
}

export const AdminNotificationEmail = ({
  customerName,
  customerEmail,
  customerPhone,
  projectType,
  customerMessage,
}: AdminNotificationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Nouvelle demande de devis - {projectType}
      </Preview>
      <Container style={container}>
        <Section style={logoSection}>
          <Text style={logoText}>🔔 Nouvelle demande de devis</Text>
        </Section>
        
        <Text style={title}>Nouvelle demande reçue</Text>
        
        <Section style={clientSection}>
          <Text style={sectionTitle}>Informations client :</Text>
          <Text style={clientInfo}><strong>Nom :</strong> {customerName}</Text>
          <Text style={clientInfo}><strong>Email :</strong> {customerEmail}</Text>
          <Text style={clientInfo}><strong>Téléphone :</strong> {customerPhone}</Text>
          <Text style={clientInfo}><strong>Type de projet :</strong> {projectType}</Text>
        </Section>
        
        {customerMessage && (
          <Section style={messageSection}>
            <Text style={sectionTitle}>Message du client :</Text>
            <Text style={messageText}>{customerMessage}</Text>
          </Section>
        )}
        
        <Section style={actionSection}>
          <Button style={callButton} href={`tel:${customerPhone.replace(/\s/g, '')}`}>
            Appeler le client
          </Button>
          <Button style={emailButton} href={`mailto:${customerEmail}`}>
            Répondre par email
          </Button>
        </Section>
        
        <Hr style={hr} />
        
        <Text style={footer}>
          Cette demande a été envoyée depuis le site vanden-menuiserie.fr
        </Text>
      </Container>
    </Body>
  </Html>
);

AdminNotificationEmail.PreviewProps = {
  customerName: 'Jean Dupont',
  customerEmail: 'jean.dupont@email.com',
  customerPhone: '06 12 34 56 78',
  projectType: 'Cuisine sur mesure',
  customerMessage: 'Je souhaite refaire ma cuisine dans un style moderne.',
} as AdminNotificationEmailProps;

export default AdminNotificationEmail;

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
  backgroundColor: '#dc2626',
  borderRadius: '8px 8px 0 0',
};

const logoText = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0',
};

const title = {
  fontSize: '20px',
  fontWeight: '600',
  margin: '32px 20px 20px 20px',
  color: '#1e3a8a',
};

const clientSection = {
  backgroundColor: '#f8fafc',
  padding: '20px',
  margin: '20px',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
};

const messageSection = {
  backgroundColor: '#fef3c7',
  padding: '20px',
  margin: '20px',
  borderRadius: '6px',
  border: '1px solid #f59e0b',
};

const sectionTitle = {
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 12px 0',
  color: '#1e3a8a',
};

const clientInfo = {
  fontSize: '14px',
  margin: '6px 0',
  color: '#374151',
};

const messageText = {
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
  color: '#92400e',
  fontStyle: 'italic',
};

const actionSection = {
  textAlign: 'center' as const,
  margin: '32px 20px',
};

const callButton = {
  backgroundColor: '#16a34a',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 8px 8px 0',
};

const emailButton = {
  backgroundColor: '#1e3a8a',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 0 8px 8px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 20px',
};

const footer = {
  color: '#6b7280',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '0 20px',
};