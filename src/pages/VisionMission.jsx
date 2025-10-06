import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Eye, Target, CheckCircle } from "lucide-react";
import { visionMission } from "../utils/mock";

const VisionMission = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600 text-white">
              Our Purpose
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vision & Mission
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to excellence in classical homoeopathy and homoeopathic education.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <Card className="h-full shadow-xl border-t-4 border-t-blue-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="glass-icon inline-flex items-center justify-center w-14 h-14 rounded-2xl mr-4" role="img" aria-label="Vision icon">
                    <Eye className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {visionMission.vision}
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="h-full shadow-xl border-t-4 border-t-emerald-600">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="glass-icon inline-flex items-center justify-center w-14 h-14 rounded-2xl mr-4" role="img" aria-label="Mission icon">
                    <Target className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <ul className="space-y-4">
                  {visionMission.mission.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="glass-icon flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0 mt-0.5" role="img" aria-label="Check icon">
                        <CheckCircle className="w-4 h-4 text-white drop-shadow-lg" strokeWidth={2.5} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Commitments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental commitments guide every decision and action we take as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  Ensuring that patient welfare and safety remain at the heart of all homoeopathic decisions and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Continuous Learning</h3>
                <p className="text-gray-600">
                  Promoting lifelong learning and professional development for all homoeopathic professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Ethical Practice</h3>
                <p className="text-gray-600">
                  Upholding the highest ethical standards and professional integrity in all homoeopathic activities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Research Excellence</h3>
                <p className="text-gray-600">
                  Supporting and conducting high-quality homoeopathic research to advance homoeopathic knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Service</h3>
                <p className="text-gray-600">
                  Serving communities through health education, awareness programs, and accessible healthcare.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Collaboration</h3>
                <p className="text-gray-600">
                  Building partnerships with international homoeopathic organizations to share knowledge globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Making a Difference in Healthcare
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Through our vision and mission, we have positively impacted millions of lives across Maharashtra, 
            trained thousands of homoeopaths, and contributed significantly to classical homoeopathic research and healthcare policy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">80+</div>
              <div className="text-blue-100">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">15,000+</div>
              <div className="text-blue-100">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-blue-100">Research Studies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;