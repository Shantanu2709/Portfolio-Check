import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="relative mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-600 text-white rounded-full p-4 shadow-xl relative z-10">
                <Briefcase size={32} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-xl border-2 border-blue-200 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-blue-600" size={24} />
                <span className="text-blue-600 font-semibold">Current Position</span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-2">API Integration Engineer</h3>
              <p className="text-xl text-blue-700 font-semibold mb-6">Infinite Computer Solution Pvt. Ltd.</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Key Responsibilities:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Designing and implementing robust API integration solutions for enterprise clients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Architecting scalable cloud solutions on Microsoft Azure platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Implementing CI/CD pipelines using Azure DevOps and GitHub Actions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Managing containerized applications with Docker and Kubernetes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Infrastructure automation using Terraform and ARM templates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span>Collaborating with cross-functional teams to deliver high-quality solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Azure',
                      'C# .NET',
                      'Docker',
                      'Kubernetes',
                      'Terraform',
                      'Azure DevOps',
                      'GitHub Actions',
                      'API Management',
                      'Microservices',
                      'CI/CD'
                    ].map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Achievements:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Successfully delivered multiple healthcare integration projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Reduced deployment time by 60% through automated CI/CD pipelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Implemented containerization strategy improving scalability and resource utilization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Achieved AZ-204 certification demonstrating Azure development expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white text-center shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-blue-100">Projects Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-green-100">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-xl text-white text-center shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-orange-100">Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
}
