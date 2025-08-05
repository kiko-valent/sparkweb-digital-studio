import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO, TechStore Solutions',
      content: 'SparkWeb transformó completamente nuestra presencia online. El nuevo sitio web no solo se ve increíble, sino que nuestras ventas aumentaron un 150% en los primeros 3 meses.',
      rating: 5,
      avatar: 'MG',
      company: 'TechStore'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      position: 'Director de Marketing, Innovate Corp',
      content: 'El equipo de SparkWeb entendió perfectamente nuestra visión corporativa. La calidad del trabajo y la atención al detalle son excepcionales. Recomendamos al 100%.',
      rating: 5,
      avatar: 'CR',
      company: 'Innovate'
    },
    {
      id: 3,
      name: 'Ana Silva',
      position: 'Diseñadora, Ana Design Studio',
      content: 'Como diseñadora, soy muy exigente con los detalles visuales. SparkWeb superó todas mis expectativas creando un portfolio que refleja perfectamente mi estilo y personalidad.',
      rating: 5,
      avatar: 'AS',
      company: 'Design Studio'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Clientes felices
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Descubre lo que nuestros clientes dicen sobre su experiencia trabajando con SparkWeb.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star 
                      key={index} 
                      className="h-5 w-5 text-yellow-500 fill-yellow-500" 
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12 bg-gradient-primary">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Únete a más de 100 empresas que confían en SparkWeb
          </p>
          
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {['TechStore', 'Innovate Corp', 'Design Studio', 'StartupXYZ', 'CreativeCo'].map((company, index) => (
              <div 
                key={index} 
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;