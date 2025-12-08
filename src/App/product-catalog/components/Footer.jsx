import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { label: 'Sobre Nosotros', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Carreras', href: '#' }
    ],
    support: [
      { label: 'Centro de Ayuda', href: '#' },
      { label: 'Envíos', href: '#' },
      { label: 'Devoluciones', href: '#' }
    ],
    legal: [
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' },
      { label: 'Cookies', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Twitter', icon: 'ShareIcon', href: '#' },
    { name: 'Instagram', icon: 'ShareIcon', href: '#' },
    { name: 'LinkedIn', icon: 'ShareIcon', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <svg 
                  className="w-6 h-6 text-primary-foreground" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">ElectroStore</span>
            </div>
            <p className="text-sm leading-relaxed">
              Tu destino confiable para accesorios electrónicos premium y periféricos de alta calidad
            </p>
            <div className="flex space-x-3">
              {socialLinks?.map((social) => (
                <Link
                  key={social?.name}
                  href={social?.href}
                  className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-primary transition-colors duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} variant="outline" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              {footerLinks?.support?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks?.legal?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-sm">
            © {currentYear} ElectroStore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}