import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, Calendar, Users, Trophy, CheckCircle, 
  BookOpen, Briefcase, FlaskConical, Heart,
  ArrowRight, ChevronLeft, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockData } from "../utils/mock";

const HistoryAchieve = () => {
  const [activeYear, setActiveYear] = useState(null);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [visibleMilestones, setVisibleMilestones] = useState(new Set());
  const milestoneRefs = useRef([]);
  const [counters, setCounters] = useState({
    awards: 0,
    trained: 0,
    research: 0,
    conferences: 0
  });

  useEffect(() => {
    const targets = {
      awards: 50,
      trained: 15000,
      research: 500,
      conferences: 80
    };

    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    const increments = {
      awards: targets.awards / steps,
      trained: targets.trained / steps,
      research: targets.research / steps,
      conferences: targets.conferences / steps
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounters({
          awards: Math.min(Math.round(increments.awards * currentStep), targets.awards),
          trained: Math.min(Math.round(increments.trained * currentStep), targets.trained),
          research: Math.min(Math.round(increments.research * currentStep), targets.research),
          conferences: Math.min(Math.round(increments.conferences * currentStep), targets.conferences)
        });
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observers = milestoneRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleMilestones(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const awards = [
    {
      title: "National Excellence Award",
      organization: "Ministry of Health & Family Welfare",
      description: "For outstanding contribution to medical education",
      icon: <Trophy className="w-10 h-10 text-white" />
    },
    {
      title: "Healthcare Innovation Award",
      organization: "Indian Medical Association",
      description: "Recognition for pioneering digital health initiatives",
      icon: <Award className="w-10 h-10 text-white" />
    },
    {
      title: "Quality Certification",
      organization: "ISO 9001:2015",
      description: "Excellence in organizational management and member services",
      icon: <CheckCircle className="w-10 h-10 text-white" />
    }
  ];

  const contributions = [
    {
      title: "Medical Education",
      category: "Education",
      color: "green",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Pioneered continuing medical education programs that became the standard across India.",
      achievements: ["First CME certification program", "200+ annual training sessions", "Digital learning platform launch"]
    },
    {
      title: "Healthcare Policy",
      category: "Policy",
      color: "green-dark",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Actively participated in shaping healthcare policies at national and state levels.",
      achievements: ["Healthcare reform contributions", "Policy advisory roles", "Government consultation programs"]
    },
    {
      title: "Research & Innovation",
      category: "Research",
      color: "orange",
      icon: <FlaskConical className="w-8 h-8" />,
      description: "Established research foundations funding breakthrough medical research.",
      achievements: ["₹50 crore research funding", "100+ breakthrough studies", "International collaborations"]
    },
    {
      title: "Community Health",
      category: "Community",
      color: "orange-light",
      icon: <Heart className="w-8 h-8" />,
      description: "Led numerous public health campaigns improving healthcare access.",
      achievements: ["Rural health camps", "Vaccination drives", "Health awareness campaigns"]
    }
  ];

  const years = mockData.historyMilestones.map(m => m.year);

  const nextAward = () => {
    setCurrentAwardIndex((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentAwardIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const scrollToYear = (year) => {
    setActiveYear(year);
    const element = document.getElementById(`milestone-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getCategoryColors = (category) => {
    const colors = {
      Education: "bg-green text-white border-green/30",
      Policy: "bg-green/90 text-white border-green/40",
      Research: "bg-saffron text-white border-saffron/30",
      Community: "bg-saffron-light text-white border-saffron-light/30"
    };
    return colors[category] || "bg-gray-500 text-gray-700 border-gray-300";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saffron via-saffron-dark to-green text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white text-base py-2 px-4 border border-white/30">
              Our Legacy
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              80 Years of
              <span className="block text-white mt-2">Medical Excellence</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover the remarkable journey of the Association of Physicians of India 
              from its humble beginnings in 1944 to becoming the nation's premier medical association.
            </p>
          </div>
        </div>
      </section>

      {/* Mini Timeline Navigation */}
      <section className="sticky top-0 z-30 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 overflow-x-auto">
            {years.map((year, idx) => (
              <button
                key={idx}
                onClick={() => scrollToYear(year)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeYear === year 
                    ? 'bg-saffron text-white shadow-lg scale-110' 
                    : 'bg-neutral-50 text-gray-600 hover:bg-saffron/10'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Animations */}
      <section className="py-20 bg-gradient-to-b from-white via-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">Historical Timeline</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Key milestones that shaped API's journey to becoming India's leading medical association.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-saffron via-green to-saffron opacity-60 rounded-full"></div>

            <div className="space-y-16">
              {mockData.historyMilestones.map((milestone, index) => (
                <div 
                  key={index} 
                  ref={el => milestoneRefs.current[index] = el}
                  id={`milestone-${milestone.year}`}
                  className={`relative flex items-center justify-between transition-all duration-1000 transform ${
                    visibleMilestones.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  <div className="w-5/12 pr-12">
                    {index % 2 === 0 && (
                      <>
                        <div className="absolute top-1/2 right-[-4rem] transform -translate-y-1/2 z-20">
                          <div className="w-16 h-16 bg-gradient-to-br from-saffron to-green rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-2 border-saffron/30 overflow-hidden group">
                          <CardContent className="p-8 relative">
                            <Badge className="mb-4 bg-saffron text-white text-xl px-5 py-2 font-bold shadow-lg">
                              {milestone.year}
                            </Badge>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-saffron transition-colors">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </>
                    )}
                  </div>

                  <div className="w-5/12 pl-12">
                    {index % 2 === 1 && (
                      <>
                        <div className="absolute top-1/2 left-[-4rem] transform -translate-y-1/2 z-20">
                          <div className="w-16 h-16 bg-gradient-to-br from-green to-saffron rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-2 border-green/30 overflow-hidden group">
                          <CardContent className="p-8 relative">
                            <Badge className="mb-4 bg-green text-white text-xl px-5 py-2 font-bold shadow-lg">
                              {milestone.year}
                            </Badge>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-green transition-colors">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-saffron/5 to-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">Major Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognizing our significant contributions to healthcare, medical education, and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-2 border-saffron/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-saffron/10 rounded-full mb-6">
                  <Award className="w-10 h-10 text-saffron" />
                </div>
                <h3 className="text-4xl font-bold text-saffron mb-2">{counters.awards}+</h3>
                <p className="text-gray-700 font-semibold text-lg">National Awards</p>
                <p className="text-sm text-gray-500 mt-3">Excellence in medical practice and education</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-2 border-green/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green/5 rounded-full mb-6">
                  <Users className="w-10 h-10 text-green" />
                </div>
                <h3 className="text-4xl font-bold text-green mb-2">{counters.trained.toLocaleString()}+</h3>
                <p className="text-gray-700 font-semibold text-lg">Physicians Trained</p>
                <p className="text-sm text-gray-500 mt-3">Through comprehensive CME programs</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-2 border-saffron/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-saffron/10 rounded-full mb-6">
                  <Trophy className="w-10 h-10 text-saffron" />
                </div>
                <h3 className="text-4xl font-bold text-saffron mb-2">{counters.research}+</h3>
                <p className="text-gray-700 font-semibold text-lg">Research Studies</p>
                <p className="text-sm text-gray-500 mt-3">Published in leading journals worldwide</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-2 border-green/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green/5 rounded-full mb-6">
                  <Calendar className="w-10 h-10 text-green" />
                </div>
                <h3 className="text-4xl font-bold text-green mb-2">{counters.conferences}+</h3>
                <p className="text-gray-700 font-semibold text-lg">Annual Conferences</p>
                <p className="text-sm text-gray-500 mt-3">Medical professionals nationwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Contributions with Category Colors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">Key Contributions to Healthcare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our impact extends beyond membership to meaningful contributions that have shaped Indian healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributions.map((contribution, index) => (
              <Card 
                key={index} 
                className={`shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-8 ${
                  contribution.color === 'green' ? 'border-l-green bg-green/10' :
                  contribution.color === 'green-dark' ? 'border-l-green bg-green/15' :
                  contribution.color === 'orange' ? 'border-l-saffron bg-saffron/5' :
                  'border-l-saffron-light bg-saffron-light/10'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full ${
                      contribution.color === 'green' ? 'bg-green/5' :
                      contribution.color === 'green-dark' ? 'bg-green/5' :
                      contribution.color === 'orange' ? 'bg-saffron/10' :
                      'bg-saffron-light/10'
                    }`}>
                      {React.cloneElement(contribution.icon, { 
                        className: `w-8 h-8 ${
                          contribution.color === 'green' ? 'text-green' :
                          contribution.color === 'green-dark' ? 'text-green' :
                          contribution.color === 'orange' ? 'text-saffron' :
                          'text-saffron-light'
                        }` 
                      })}
                    </div>
                    <div>
                      <Badge className={`${
                        contribution.color === 'green' ? 'bg-green' :
                        contribution.color === 'green-dark' ? 'bg-green/90' :
                        contribution.color === 'orange' ? 'bg-saffron' :
                        'bg-saffron-light'
                      } text-white`}>
                        {contribution.category}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">{contribution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{contribution.description}</p>
                  <div className="space-y-3">
                    {contribution.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                          contribution.color === 'green' ? 'text-green' :
                          contribution.color === 'green-dark' ? 'text-green' :
                          contribution.color === 'orange' ? 'text-saffron' :
                          'text-saffron-light'
                        }`} />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Carousel */}
      <section className="py-20 bg-gradient-to-br from-saffron/10 via-green/5 to-saffron/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">
              Our dedication to excellence has been recognized by national and international organizations.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-12 border-2 border-saffron/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-saffron to-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {awards[currentAwardIndex].icon}
                </div>
                <h4 className="text-2xl font-bold text-neutral-800 mb-3">{awards[currentAwardIndex].title}</h4>
                <Badge className="mb-4 bg-green text-white text-base px-4 py-1">
                  {awards[currentAwardIndex].organization}
                </Badge>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  {awards[currentAwardIndex].description}
                </p>
              </div>
            </div>

            <button
              onClick={prevAward}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-saffron hover:bg-saffron-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextAward}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-saffron hover:bg-saffron-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {awards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentAwardIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentAwardIndex ? 'w-8 bg-saffron' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-saffron via-saffron-dark to-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Be Part of Our Continuing Legacy
          </h2>
          <p className="text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of physicians who have contributed to 80 years of medical excellence. 
            Help us shape the next chapter of Indian healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-saffron hover:bg-neutral-50 rounded-xl px-10 py-6 text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105">
              <Link to="/membership">
                Join Our Legacy <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-saffron rounded-xl px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              <Link to="/about">
                Learn More About API
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HistoryAchieve;
