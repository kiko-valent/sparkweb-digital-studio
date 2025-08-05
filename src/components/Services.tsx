import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Search, 
  MessageCircle, 
  Target 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Diseño Web Responsivo',
      description: 'Creamos diseños únicos y atractivos que se adaptan perfectamente a todos los dispositivos.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Code,
      title: 'Desarrollo a Medida',
      description: 'Desarrollamos sitios web con tecnologías modernas y código limpio para máximo rendimiento.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Target,
      title: 'Branding Digital',
      description: 'Construimos identidades de marca sólidas que conectan con tu audiencia y generan confianza.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Smartphone,
      title: 'Optimización UX/UI',
      description: 'Diseñamos experiencias de usuario intuitivas que convierten visitantes en clientes.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Search,
      title: 'SEO y Posicionamiento',
      description: 'Optimizamos tu sitio para que aparezca en los primeros resultados de búsqueda.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: MessageCircle,
      title: 'Consultoría Digital',
      description: 'Te asesoramos en tu estrategia digital para maximizar tu presencia online.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qué hacemos
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ofrecemos soluciones integrales para impulsar tu presencia digital y hacer crecer tu negocio online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Ver todos los servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;