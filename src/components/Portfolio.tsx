import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp } from 'lucide-react';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectCorporate from '@/assets/project-corporate.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'TechStore E-commerce',
      client: 'TechStore Solutions',
      description: 'Plataforma de e-commerce moderna con sistema de pagos integrado y experiencia de compra optimizada.',
      image: projectEcommerce,
      results: '+150% conversiones',
      tags: ['E-commerce', 'React', 'UX/UI'],
      metrics: { sales: '+150%', traffic: '+89%', conversion: '+220%' }
    },
    {
      id: 2,
      title: 'Sitio Corporativo',
      client: 'Innovate Corp',
      description: 'Rediseño completo de sitio corporativo con enfoque en generación de leads y conversión B2B.',
      image: projectCorporate,
      results: '+200% leads',
      tags: ['Corporativo', 'SEO', 'Branding'],
      metrics: { leads: '+200%', seo: '+180%', engagement: '+95%' }
    },
    {
      id: 3,
      title: 'Portfolio Creativo',
      client: 'Ana Design Studio',
      description: 'Portfolio digital para estudio creativo con galería interactiva y animaciones personalizadas.',
      image: projectPortfolio,
      results: '+300% clientes',
      tags: ['Portfolio', 'Animaciones', 'Creative'],
      metrics: { clients: '+300%', views: '+250%', inquiries: '+180%' }
    }
  ];

  return (
    <section id="portafolio" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestros proyectos
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Casos de éxito que demuestran nuestro compromiso con la excelencia y los resultados excepcionales.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`overflow-hidden group hover:shadow-elegant transition-all duration-500 border-border ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <CardContent className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title and Client */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {project.client}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="flex items-center space-x-4 pt-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                    <span className="text-lg font-bold text-secondary">
                      {project.results}
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-xl font-bold text-foreground">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;