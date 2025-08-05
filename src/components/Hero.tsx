import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Palette, Code, Smartphone, Target } from 'lucide-react';
import heroWorkspace from '@/assets/hero-workspace.jpg';

const Hero = () => {
  const quickServices = [
    { icon: Palette, title: 'Diseño Web', color: 'text-primary' },
    { icon: Code, title: 'Desarrollo', color: 'text-secondary' },
    { icon: Smartphone, title: 'UX/UI', color: 'text-primary' },
    { icon: Target, title: 'Branding', color: 'text-secondary' }
  ];

  return (
    <section id="inicio" className="pt-16 lg:pt-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] py-12 lg:py-20">
          {/* Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Impulsa tu
                <span className="bg-gradient-primary bg-clip-text text-transparent"> presencia digital </span>
                con SparkWeb
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Creamos sitios web impactantes y experiencias de marca que destacan en el mundo digital.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                <a href="#contacto">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

            </div>

            {/* Quick Services */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {quickServices.map((service, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-card transition-shadow group cursor-pointer">
                  <service.icon className={`h-8 w-8 mx-auto mb-2 ${service.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-sm font-medium text-foreground">{service.title}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroWorkspace} 
                alt="SparkWeb creative workspace" 
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;