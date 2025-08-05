import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío de formulario
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hola@sparkweb.digital',
      link: 'mailto:hola@sparkweb.digital'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 600 123 456',
      link: 'tel:+34600123456'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+34 600 123 456',
      link: 'https://wa.me/34600123456'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Madrid, España',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lun - Vie: 9:00 - 18:00',
      link: '#'
    }
  ];

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Estamos listos para convertir tu visión en realidad digital. Contáctanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitar propuesta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de proyecto
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="sitio-web">Sitio web nuevo</option>
                    <option value="rediseno">Rediseño web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="branding">Branding digital</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                    className="border-border focus:ring-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
                >
                  Enviar mensaje
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Información de contacto
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.title}</div>
                        {info.link !== '#' ? (
                          <a 
                            href={info.link}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-primary border-0">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  ¿Necesitas ayuda inmediata?
                </h3>
                <p className="text-white/80 mb-6">
                  Chatea con nosotros por WhatsApp para una respuesta rápida
                </p>
                <Button 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.open('https://wa.me/34600123456', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="border-border">
              <CardContent className="p-0">
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Madrid, España</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;