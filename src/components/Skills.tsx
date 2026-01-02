import { Cloud, Container, Settings, GitBranch, Code, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Azure Developer (AZ-204)',
      icon: Cloud,
      color: 'from-blue-500 to-blue-700',
      skills: [
        'Azure App Service',
        'Azure Functions',
        'Azure Storage',
        'Azure Cosmos DB',
        'Azure SQL Database',
        'Azure Key Vault',
        'Azure API Management',
        'Azure Service Bus',
        'Azure Event Grid',
        'Azure Event Hubs',
        'Azure Logic Apps',
        'Azure Application Insights',
        'Azure Monitor',
        'Azure Container Registry',
        'Azure Container Instances',
        'Azure Active Directory',
        'Azure CDN',
        'Azure Cache for Redis'
      ]
    },
    {
      title: 'DevOps & CI/CD',
      icon: GitBranch,
      color: 'from-green-500 to-green-700',
      skills: [
        'Git & GitHub',
        'GitHub Actions',
        'Azure DevOps',
        'Azure Pipelines',
        'Infrastructure as Code',
        'Continuous Integration',
        'Continuous Deployment',
        'Automated Testing',
        'Release Management'
      ]
    },
    {
      title: 'Containerization & Orchestration',
      icon: Container,
      color: 'from-cyan-500 to-cyan-700',
      skills: [
        'Docker',
        'Docker Compose',
        'Kubernetes',
        'Container Orchestration',
        'Helm Charts',
        'Container Security',
        'Microservices Architecture'
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: Settings,
      color: 'from-orange-500 to-orange-700',
      skills: [
        'Terraform',
        'ARM Templates',
        'Azure Resource Manager',
        'Infrastructure Automation',
        'Configuration Management',
        'Policy as Code'
      ]
    },
    {
      title: 'Development Technologies',
      icon: Code,
      color: 'from-pink-500 to-pink-700',
      skills: [
        'C# / .NET',
        'ASP.NET Core',
        'React',
        'TypeScript',
        'JavaScript',
        'RESTful APIs',
        'GraphQL',
        'SignalR'
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-slate-500 to-slate-700',
      skills: [
        'Azure SQL',
        'Cosmos DB',
        'PostgreSQL',
        'MongoDB',
        'Redis Cache',
        'Blob Storage',
        'Table Storage',
        'Queue Storage'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive mastery of Azure cloud services, DevOps practices, and modern development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <Icon size={40} className="mb-3" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Continuous Learner</h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Constantly exploring new technologies and best practices to deliver cutting-edge solutions.
            Committed to staying current with the rapidly evolving cloud and DevOps landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
