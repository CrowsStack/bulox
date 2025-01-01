import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Your Company Name',
  description: 'Get in touch with us. We\'d love to hear from you and answer any questions you may have.',
  keywords: ['contact', 'reach out', 'get in touch', 'customer support'],
  openGraph: {
    title: 'Contact Us - Your Company Name',
    description: 'Connect with our team today',
    type: 'website',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  );
}
