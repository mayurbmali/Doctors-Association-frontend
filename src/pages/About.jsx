import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-600 text-white">
              About CCMP
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leading Homoeopathic Excellence
              <span className="block text-emerald-400">Maharashtra</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              CCMP Homoeopathic Doctors Association, Maharashtra has been at the forefront of homoeopathic excellence, 
              classical education, and healthcare advancement following Dr. Samuel Hahnemann's principles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by a group of visionary homoeopathic practitioners, CCMP Homoeopathic Doctors Association, Maharashtra 
                emerged from a shared commitment to elevate the standards of classical homoeopathic practice and education 
                across Maharashtra.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We have grown to become Maharashtra's premier homoeopathic association, representing dedicated practitioners 
                who follow Dr. Samuel Hahnemann's classical principles and maintain the highest standards of homoeopathic care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, CCMP stands as a beacon of homoeopathic excellence, fostering classical education, promoting 
                evidence-based homoeopathic practice, and ensuring the highest standards of patient care throughout Maharashtra.
              </p>
              <Button asChild className="bg-blue-800 hover:bg-blue-900">
                <Link to="/history-achieve">
                  Explore Our History <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" 
                alt="Medical professionals" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  Committed to maintaining the highest standards in homoeopathic practice and patient care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Collaboration</h3>
                <p className="text-gray-600">
                  Fostering professional relationships and knowledge sharing among homoeopaths across Maharashtra.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  Embracing classical homoeopathic principles and evidence-based treatment approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Impact</h3>
                <p className="text-gray-600">
                  Making a meaningful difference in healthcare outcomes across India and beyond.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Message */}
          <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-none">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Leadership Message
              </h3>
              <blockquote className="text-lg italic text-gray-700 mb-6 max-w-4xl mx-auto">
                "As we celebrate years of serving the homoeopathic community in Maharashtra, we remain committed 
                to our founding principles of excellence, classical education, and ethical practice. Our members 
                are not just homoeopaths; they are guardians of health, preservers of Hahnemann's legacy, and 
                champions of patient care through classical homoeopathy."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="font-semibold text-gray-900">Dr. Arun Kumar</p>
                  <p className="text-gray-600">President, CCMP Maharashtra</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Legacy of Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Become part of Maharashtra's most prestigious homoeopathic association and contribute to advancing homoeopathic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link to="/membership">
                Become a Member
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;