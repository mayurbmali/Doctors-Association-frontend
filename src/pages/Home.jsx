import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Calendar,
  Award,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  Shield,
  Info,
  Newspaper,
  HelpCircle,
  Mail,
  Gift,
  Megaphone,
  ChevronDown,
  BookOpen,
  Network,
  TrendingUp,
  Target,
  UserCheck,
  Briefcase
} from "lucide-react";
import { mockData } from "../utils/mock";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Hero background images for carousel
  const heroImages = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop'
  ];


  // Benefits data
  const benefits = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking Opportunities",
      description: "Connect with leading physicians and healthcare professionals across India"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "CME Credits",
      description: "Access accredited continuing medical education programs and workshops"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Exclusive Resources",
      description: "Get access to journals, research papers, and clinical guidelines"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Support",
      description: "Professional development opportunities and career advancement resources"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Advocacy",
      description: "Voice in healthcare policy and representation at national level"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Special Discounts",
      description: "Member-exclusive discounts on conferences, publications, and services"
    }
  ];

  // Events data
  const upcomingEvents = [
    {
      id: 1,
      date: "15 Dec",
      title: "Annual National Conference 2024",
      description: "Join us for the biggest medical conference of the year with renowned speakers.",
      location: "New Delhi",
      type: "Conference",
      badge: "CME"
    },
    {
      id: 2,
      date: "20 Dec",
      title: "Cardiology Update Webinar",
      description: "Latest advances in cardiovascular medicine and treatment protocols.",
      location: "Virtual",
      type: "Webinar",
      badge: "CME"
    },
    {
      id: 3,
      date: "28 Dec",
      title: "Regional Medical Workshop",
      description: "Hands-on training and skill development for practicing physicians.",
      location: "Mumbai",
      type: "Workshop",
      badge: "Networking"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel and Parallax */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="absolute inset-0 h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-saffron/80 via-saffron-dark/70 to-green/60 z-10" />
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 h-full flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-base py-2 px-6 rounded-full shadow-lg border border-white/30">
                Established 1944 • 80+ Years of Excellence
              </Badge>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
              >
                Advancing Physician
                <span className="block text-white mt-2">
                  Excellence Since 1944
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mb-10 text-white max-w-4xl mx-auto drop-shadow-md"
              >
                Empowering healthcare professionals through continuous education, networking,
                and advancing the highest standards of medical practice across India.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="bg-green hover:bg-green/90 text-white rounded-xl px-10 py-6 text-lg shadow-2xl hover:shadow-green/50 hover:scale-105 transition-all duration-300">
                  <Link to="/membership">
                    Join API <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-saffron rounded-xl px-10 py-6 text-lg shadow-xl hover:scale-105 transition-all duration-300">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </section>


      {/* Key Metrics Section with Animated Counters */}
      <section className="py-20 bg-gradient-to-br from-saffron/10 to-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-saffron" />
              </div>
              <div className="text-5xl font-bold text-saffron mb-2">
                {inView && <CountUp end={15000} duration={2.5} separator="," suffix="+" />}
              </div>
              <p className="text-neutral-600 font-medium">Active Members</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-green" />
              </div>
              <div className="text-5xl font-bold text-green mb-2">
                {inView && <CountUp end={80} duration={2.5} suffix="+" />}
              </div>
              <p className="text-neutral-600 font-medium">Years of Service</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-saffron/10 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-saffron" />
              </div>
              <div className="text-5xl font-bold text-saffron mb-2">
                {inView && <CountUp end={500} duration={2.5} separator="," suffix="+" />}
              </div>
              <p className="text-neutral-600 font-medium">Annual Events</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green/10 rounded-full mb-4">
                <Star className="w-8 h-8 text-green" />
              </div>
              <div className="text-5xl font-bold text-green mb-2">
                {inView && <CountUp end={50} duration={2.5} suffix="+" />}
              </div>
              <p className="text-neutral-600 font-medium">Chapters Nationwide</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop" 
                  alt="API Association"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <span className="text-saffron font-semibold text-sm uppercase tracking-wider border-b-2 border-saffron pb-1">About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Leading India's Medical Excellence Since 1944
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                The Association of Physicians of India (API) stands as one of the most prestigious medical organizations in the country, dedicated to advancing the practice of medicine and promoting the highest standards of patient care.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                With over 15,000 active members across 50+ chapters nationwide, we provide a platform for continuous learning, professional networking, and collaborative healthcare advancement.
              </p>
              <Button asChild size="lg" className="bg-saffron hover:bg-saffron-dark text-white rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/about">
                  Read Our Full Story <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-neutral-800"
          >
            Explore Our Resources
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <UserCheck className="w-8 h-8" />, title: "Board of Trustees", link: "/trustees", color: "saffron" },
              { icon: <Users className="w-8 h-8" />, title: "Leadership Team", link: "/leadership", color: "green" },
              { icon: <BookOpen className="w-8 h-8" />, title: "Our History", link: "/history-achieve", color: "saffron" },
              { icon: <Calendar className="w-8 h-8" />, title: "Events", link: "/meetings", color: "green" }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link to={item.link}>
                  <Card className={`h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${item.color === 'saffron' ? 'border-saffron/20' : 'border-green/20'}`}>
                    <CardContent className="p-8 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 ${item.color === 'saffron' ? 'bg-saffron/10' : 'bg-green/10'}`}>
                        <div className={item.color === 'saffron' ? 'text-saffron' : 'text-green'}>{item.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-saffron transition-colors duration-300">
                        {item.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-neutral-800"
          >
            Upcoming Events
          </motion.h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {upcomingEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-saffron text-white px-3 py-1 text-sm font-semibold">
                        {event.date}
                      </Badge>
                      <Badge variant="outline" className="border-green text-green">
                        {event.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-saffron transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-neutral-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <Button asChild className="w-full bg-green hover:bg-green/90 text-white rounded-lg">
                      <Link to="/meetings">
                        Register Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-saffron/5 to-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Why Join API?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Unlock exclusive benefits designed to enhance your medical practice and professional growth
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${index % 2 === 0 ? 'bg-saffron/10' : 'bg-green/10'} rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                  <div className={index % 2 === 0 ? 'text-saffron' : 'text-green'}>{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="bg-green hover:bg-green/90 text-white rounded-xl px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/membership">
                View All Benefits <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-saffron via-saffron-dark to-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Our Members Say
          </motion.h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {mockData.testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/50 mb-6">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white/90 italic mb-6 text-lg">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="font-semibold text-xl mb-1">{testimonial.name}</h4>
                    <p className="text-white/80 text-sm">{testimonial.designation}</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-800">
              Ready to Advance Your Medical Career?
            </h2>
            <p className="text-xl mb-10 text-neutral-600 max-w-2xl mx-auto">
              Join thousands of physicians who trust API for professional development, networking, and excellence in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-saffron hover:bg-saffron-dark text-white rounded-xl px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/membership">
                  Become a Member Today <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-saffron text-saffron hover:bg-saffron hover:text-white rounded-xl px-10 py-6 text-lg transition-all duration-300">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
