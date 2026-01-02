import { User, Calendar, Briefcase, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Profile</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Passionate API Integration Engineer and Azure Developer with expertise in building scalable cloud solutions.
                    Currently working at Infinite Computer Solution Pvt. Ltd., driving digital transformation through innovative cloud architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Calendar className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Personal Details</h3>
                  <p className="text-slate-600">
                    <strong>Date of Birth:</strong> January 23, 2003
                  </p>
                  <p className="text-slate-600 mt-2">
                    Young, dynamic, and continuously learning to stay at the forefront of cloud and DevOps technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Award className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Certifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-700 font-semibold">Microsoft Certified: Azure Developer Associate (AZ-204)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl shadow-2xl text-white">
              <Briefcase size={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-4">Current Role</h3>
              <p className="text-lg mb-2">API Integration Engineer</p>
              <p className="text-blue-200 mb-4">Infinite Computer Solution Pvt. Ltd.</p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">→</span>
                  <span>Designing and implementing robust API integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">→</span>
                  <span>Architecting Azure cloud solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">→</span>
                  <span>Implementing CI/CD pipelines and DevOps practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">→</span>
                  <span>Containerization using Docker and Kubernetes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <p className="font-semibold text-slate-700">Cloud Architecture</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <p className="font-semibold text-slate-700">API Development</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <p className="font-semibold text-slate-700">DevOps</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center hover:bg-blue-50 transition-colors">
                  <p className="font-semibold text-slate-700">Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
