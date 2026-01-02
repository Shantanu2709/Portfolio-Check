import { Folder, ExternalLink, Heart, Bot } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Healthcare Management System',
      description: 'Enterprise-grade healthcare platform built with C# .NET backend and React frontend, hosted on Azure cloud infrastructure.',
      technologies: ['C# .NET', 'React', 'Azure App Service', 'Azure SQL', 'Azure Key Vault', 'Azure Functions'],
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      features: [
        'Patient management and electronic health records',
        'Appointment scheduling with Azure Service Bus',
        'Secure data storage with encryption',
        'Real-time notifications using SignalR',
        'HIPAA compliant architecture'
      ]
    },
    {
      title: 'Healthcare Analytics Platform',
      description: 'Advanced analytics solution for healthcare data processing and visualization using modern cloud technologies.',
      technologies: ['C# .NET', 'React', 'Azure Cosmos DB', 'Azure Functions', 'Power BI'],
      icon: Heart,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Real-time data analytics dashboard',
        'Predictive health insights',
        'Integration with multiple data sources',
        'Automated reporting with Azure Logic Apps',
        'Scalable microservices architecture'
      ]
    },
    {
      title: 'Healthcare Integration Hub',
      description: 'Comprehensive API integration platform connecting various healthcare systems and third-party services.',
      technologies: ['C# .NET', 'React', 'Azure API Management', 'Azure Service Bus', 'Docker'],
      icon: Heart,
      color: 'from-green-500 to-emerald-600',
      features: [
        'HL7 and FHIR protocol support',
        'API gateway with rate limiting',
        'Message queuing and processing',
        'Containerized microservices',
        'Comprehensive logging and monitoring'
      ]
    },
    {
      title: 'AI-Powered Customer Support Chatbot',
      description: 'Intelligent conversational AI chatbot leveraging Azure Cognitive Services for natural language understanding.',
      technologies: ['Azure OpenAI', 'C# .NET', 'React', 'Azure Bot Service', 'Cosmos DB'],
      icon: Bot,
      color: 'from-violet-500 to-purple-600',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context-aware conversations',
        'Integration with Azure Cognitive Services',
        'Sentiment analysis and intent recognition'
      ]
    },
    {
      title: 'Enterprise AI Assistant',
      description: 'Advanced AI chat application for enterprise workflows with document understanding and task automation.',
      technologies: ['Azure OpenAI', 'React', 'TypeScript', 'Azure Functions', 'Azure Storage'],
      icon: Bot,
      color: 'from-orange-500 to-red-600',
      features: [
        'Document Q&A with embeddings',
        'Task automation and workflow integration',
        'Secure authentication with Azure AD',
        'Real-time collaboration features',
        'Custom model fine-tuning'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world applications showcasing expertise in Azure cloud development, healthcare solutions, and AI integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <Icon size={48} />
                    <Folder size={32} className="opacity-70" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2 text-slate-700">
                          <span className="text-blue-600 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-xl text-white shadow-xl">
            <ExternalLink size={40} className="mx-auto mb-4" />
            <p className="text-xl font-semibold">
              Want to see more projects or discuss collaboration opportunities?
            </p>
            <p className="text-blue-100 mt-2">
              Feel free to reach out in the contact section below
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
