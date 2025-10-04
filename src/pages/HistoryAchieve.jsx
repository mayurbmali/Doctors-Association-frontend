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
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState('right');
  const yearScrollRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const [counters, setCounters] = useState({
    awards: 0,
    trained: 0,
    research: 0,
    conferences: 0
  });

  const timelineMilestones = [
    {
      year: "1950",
      title: "Foundation of CCMP",
      description: "CCMP Homoeopathic Doctors Association, Maharashtra was established by visionary homoeopaths committed to advancing classical homoeopathy across Maharashtra.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=600&fit=crop"
    },
    {
      year: "1960",
      title: "First Homoeopathic Conference",
      description: "Organized the first annual homoeopathic conference in Mumbai with practitioners across Maharashtra, establishing our tradition of classical knowledge sharing.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
    },
    {
      year: "1975",
      title: "State Recognition",
      description: "Gained Maharashtra state recognition and established partnerships with homoeopathic colleges across the state, expanding classical homoeopathy's reach.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      year: "1985",
      title: "Classical Education Programs",
      description: "Launched structured continuing education programs in classical homoeopathy, setting new standards for professional development following Hahnemann's principles.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
    },
    {
      year: "2000",
      title: "Digital Homoeopathic Resources",
      description: "Embraced technology with online classical homoeopathy resources and materia medica databases, making Hahnemann's teachings more accessible.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    },
    {
      year: "2010",
      title: "International Homoeopathic Network",
      description: "Established partnerships with international classical homoeopathy associations, bringing global perspectives to Maharashtra's practitioners.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
    },
    {
      year: "2020",
      title: "Pandemic Homoeopathic Support",
      description: "Provided crucial homoeopathic support during the pandemic, showcasing the effectiveness of classical homoeopathy in supporting community health.",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=800&h=600&fit=crop"
    },
    {
      year: "2025",
      title: "Legacy of Classical Excellence",
      description: "Celebrating decades of advancing classical homoeopathic excellence in Maharashtra, with a vision for the future of Hahnemannian practice.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop"
    }
  ];

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
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, currentMilestoneIndex]);

  const handleYearClick = (index) => {
    setSlideDirection(index > currentMilestoneIndex ? 'right' : 'left');
    setCurrentMilestoneIndex(index);
    setActiveYear(timelineMilestones[index].year);
    setIsAutoPlaying(false);
    
    if (yearScrollRef.current) {
      const yearButton = yearScrollRef.current.children[index];
      if (yearButton) {
        yearButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleNext = () => {
    setSlideDirection('right');
    const nextIndex = (currentMilestoneIndex + 1) % timelineMilestones.length;
    setCurrentMilestoneIndex(nextIndex);
    setActiveYear(timelineMilestones[nextIndex].year);
    
    if (yearScrollRef.current) {
      const yearButton = yearScrollRef.current.children[nextIndex];
      if (yearButton) {
        yearButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handlePrev = () => {
    setSlideDirection('left');
    const prevIndex = (currentMilestoneIndex - 1 + timelineMilestones.length) % timelineMilestones.length;
    setCurrentMilestoneIndex(prevIndex);
    setActiveYear(timelineMilestones[prevIndex].year);
    
    if (yearScrollRef.current) {
      const yearButton = yearScrollRef.current.children[prevIndex];
      if (yearButton) {
        yearButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const awards = [
    {
      title: "National Excellence Award",
      organization: "Ministry of Health & Family Welfare",
      description: "For outstanding contribution to homoeopathic education",
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
      title: "Homoeopathic Education",
      category: "Education",
      color: "green",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Pioneered continuing homoeopathic education programs that became the standard across Maharashtra.",
      achievements: ["First classical education certification program", "200+ annual training sessions", "Digital learning platform launch"]
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
      description: "Established research foundations funding breakthrough homoeopathic research.",
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

  const nextAward = () => {
    setCurrentAwardIndex((prev) => (prev + 1) % awards.length);
  };

  const prevAward = () => {
    setCurrentAwardIndex((prev) => (prev - 1 + awards.length) % awards.length);
  };

  const currentMilestone = timelineMilestones[currentMilestoneIndex];

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
              Legacy of
              <span className="block text-white mt-2">Homoeopathic Excellence</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover the remarkable journey of CCMP Homoeopathic Doctors Association, Maharashtra 
              from its foundation to becoming Maharashtra's premier homoeopathic association.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white via-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">Interactive History Timeline</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore 80 years of milestones by selecting years and watching content smoothly animate into view.
            </p>
          </div>

          {/* Year Selector - Horizontal Scrollable */}
          <div className="mb-12 relative">
            <div 
              ref={yearScrollRef}
              className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
            >
              {timelineMilestones.map((milestone, index) => (
                <button
                  key={index}
                  onClick={() => handleYearClick(index)}
                  className={`flex-shrink-0 snap-center px-6 py-3 rounded-xl font-bold text-lg transition-all duration-500 transform ${
                    currentMilestoneIndex === index
                      ? 'bg-gradient-to-r from-saffron to-green text-white shadow-2xl scale-125 ring-4 ring-saffron/30'
                      : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-saffron/10 hover:to-green/10 shadow-md hover:shadow-lg hover:scale-110'
                  }`}
                  aria-label={`View milestone from ${milestone.year}`}
                >
                  {milestone.year}
                </button>
              ))}
            </div>
            
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none"></div>
          </div>

          {/* Main Event Card with Navigation Arrows */}
          <div className="relative max-w-6xl mx-auto">
            <div 
              className="relative overflow-hidden"
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
            >
              <div className="relative min-h-[500px] md:min-h-[400px]">
                <Card 
                  key={currentMilestoneIndex}
                  className={`shadow-2xl border-2 overflow-hidden animate-slide-in-${slideDirection}`}
                  style={{
                    animation: `slideIn${slideDirection === 'right' ? 'Right' : 'Left'} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`
                  }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-1/2 relative overflow-hidden group">
                        <img 
                          src={currentMilestone.image}
                          alt={currentMilestone.title}
                          className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-saffron/30 via-transparent to-green/30 opacity-60"></div>
                        <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-saffron text-2xl font-bold px-6 py-3 shadow-xl">
                          {currentMilestone.year}
                        </Badge>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-neutral-50">
                        <div className="mb-4">
                          <div className="h-1 w-20 bg-gradient-to-r from-saffron to-green rounded-full mb-6"></div>
                          <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 leading-tight">
                            {currentMilestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                          {currentMilestone.description}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2 mt-auto">
                          {timelineMilestones.map((_, idx) => (
                            <div
                              key={idx}
                              className={`h-2 rounded-full transition-all duration-500 ${
                                idx === currentMilestoneIndex 
                                  ? 'w-12 bg-gradient-to-r from-saffron to-green' 
                                  : 'w-2 bg-gray-300'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                onMouseEnter={pauseAutoPlay}
                className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-saffron to-saffron-dark hover:from-saffron-dark hover:to-green text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-saffron/50"
                aria-label="Previous milestone"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                onMouseEnter={pauseAutoPlay}
                className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-green to-green-dark hover:from-green-dark hover:to-saffron text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green/50"
                aria-label="Next milestone"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Auto-play indicator */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                {isAutoPlaying ? '⏸ Pause auto-play' : '▶ Resume auto-play'}
              </button>
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
              Recognizing our significant contributions to healthcare, homoeopathic education, and professional development.
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
                <p className="text-sm text-gray-500 mt-3">Excellence in homoeopathic practice and education</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-2 border-green/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green/5 rounded-full mb-6">
                  <Users className="w-10 h-10 text-green" />
                </div>
                <h3 className="text-4xl font-bold text-green mb-2">{counters.trained.toLocaleString()}+</h3>
                <p className="text-gray-700 font-semibold text-lg">Homoeopaths Trained</p>
                <p className="text-sm text-gray-500 mt-3">Through comprehensive classical education programs</p>
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-saffron via-saffron-dark to-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Legacy</h2>
          <p className="text-xl mb-10 text-white/90">
            Be part of Maharashtra's premier homoeopathic association and contribute to the next chapter of our history.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/membership">
              <Button 
                size="lg" 
                className="bg-white text-saffron hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Become a Member
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-saffron font-semibold px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryAchieve;
