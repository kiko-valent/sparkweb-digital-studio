import { Card, CardContent } from '@/components/ui/card';
import { 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Settings 
} from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Lightbulb,
      title: 'Creatividad Innovadora',
      description: 'Diseños únicos que destacan de la competencia y conectan con tu audiencia objetivo.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Users,
      title: 'Soporte Personalizado',
      description: 'Acompañamiento cercano en cada etapa del proyecto con comunicación directa y transparente.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description: 'Enfoque en métricas que importan: conversiones, tráfico y ROI para tu negocio.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Settings,
      title: 'Tecnología Moderna',
      description: 'Utilizamos las últimas tecnologías y mejores prácticas para sitios rápidos y seguros.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Por qué SparkWeb?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Combinamos creatividad, tecnología y estrategia para entregar resultados que superan expectativas.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 rounded-full ${advantage.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <advantage.icon className={`h-10 w-10 ${advantage.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 lg:p-12 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Proyectos completados</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">3+</div>
              <div className="text-white/80">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Soporte disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;