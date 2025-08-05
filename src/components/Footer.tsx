import { Sparkles, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Diseño Web',
    'Desarrollo',
    'Branding Digital',
    'UX/UI Design',
    'SEO',
    'Consultoría'
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Behance', href: '#', icon: '🎨' },
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'Twitter', href: '#', icon: '🐦' }
  ];

  return (
    <footer className="bg-sparkweb-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-sm"></div>
                </div>
                <span className="text-2xl font-bold">SparkWeb</span>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6">
                Agencia creativa especializada en diseño web, desarrollo y branding digital. 
                Impulsamos tu presencia online con soluciones innovadoras.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors text-xl"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Enlaces rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Servicios</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/70">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:hola@sparkweb.digital"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    hola@sparkweb.digital
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a 
                    href="tel:+34600123456"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    +34 600 123 456
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-white/70">Madrid, España</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-white/70">Lun - Vie: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 SparkWeb. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open('https://wa.me/34600123456', '_blank')}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors group"
          aria-label="Contactar por WhatsApp"
        >
          <span className="text-2xl">💬</span>
          
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            ¡Chatea con nosotros!
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;