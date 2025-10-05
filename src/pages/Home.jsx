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
  Briefcase,
  Image as ImageIcon,
  X,
  Play,
  ZoomIn,
  Phone
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

  const [selectedImage, setSelectedImage] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

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
      description: "Connect with leading homoeopaths and classical practitioners across Maharashtra"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Classical Education",
      description: "Access structured classical homoeopathy education programs and seminars"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Exclusive Resources",
      description: "Get access to materia medica, repertories, and classical homoeopathic literature"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Practice Development",
      description: "Professional development and practice enhancement resources for homoeopaths"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Advocacy",
      description: "Voice in homoeopathic policy and representation at state level in Maharashtra"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Special Discounts",
      description: "Member-exclusive discounts on homoeopathic conferences, books, and seminars"
    }
  ];

  // Events data
  const upcomingEvents = [
    {
      id: 1,
      date: "15 Dec",
      title: "Annual Maharashtra Homoeopathic Conference 2024",
      description: "Join us for the state's premier classical homoeopathy conference with renowned speakers.",
      location: "Mumbai, Maharashtra",
      type: "Conference",
      badge: "Classical"
    },
    {
      id: 2,
      date: "20 Dec",
      title: "Materia Medica Mastery Webinar",
      description: "Deep dive into classical materia medica and remedy selection principles.",
      location: "Virtual",
      type: "Webinar",
      badge: "Education"
    },
    {
      id: 3,
      date: "28 Dec",
      title: "Regional Homoeopathic Workshop",
      description: "Hands-on case taking and repertorization training for homoeopaths.",
      location: "Pune, Maharashtra",
      type: "Workshop",
      badge: "Networking"
    }
  ];

  // Gallery images data
  const galleryImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop", caption: "Annual Conference 2024", alt: "Homoeopaths gathering at Annual Conference 2024", span: "row-span-2" },
    { id: 2, url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop", caption: "Classical Homoeopathy Workshop", alt: "Homoeopaths participating in classical workshop" },
    { id: 3, url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop", caption: "Networking Event", alt: "Homoeopathic professionals networking at event" },
    { id: 4, url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop", caption: "Education Program", alt: "Classical homoeopathy education program in progress" },
    { id: 5, url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop", caption: "Member Activities", alt: "CCMP members engaged in professional activities", span: "row-span-2" },
    { id: 6, url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop", caption: "Case Discussion", alt: "Homoeopathic case discussion team" },
    { id: 7, url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop", caption: "Team Collaboration", alt: "Homoeopathic professionals collaborating" },
    { id: 8, url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop", caption: "Homoeopathic Excellence", alt: "Excellence in homoeopathic practice" }
  ];

  // Social proof activities
  const activities = [
    { id: 1, text: "Dr. Rajesh Kumar just joined from Mumbai", icon: <UserCheck className="w-4 h-4" /> },
    { id: 2, text: "50 members registered for materia medica webinar", icon: <Users className="w-4 h-4" /> },
    { id: 3, text: "Dr. Priya Sharma renewed membership", icon: <Award className="w-4 h-4" /> },
    { id: 4, text: "New classical education program published", icon: <BookOpen className="w-4 h-4" /> },
    { id: 5, text: "Dr. Amit Patel just joined from Pune", icon: <UserCheck className="w-4 h-4" /> },
    { id: 6, text: "120+ attendees confirmed for Annual Conference", icon: <Calendar className="w-4 h-4" /> }
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
                Following Hahnemann's Legacy • Classical Homoeopathy
              </Badge>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
              >
                Advancing Homoeopathic
                <span className="block text-white mt-2">
                  Excellence in Maharashtra
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl mb-10 text-white max-w-4xl mx-auto drop-shadow-md"
              >
                Empowering homoeopathic practitioners through continuous education, classical principles,
                and advancing the highest standards of homoeopathic practice across Maharashtra.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="bg-green hover:bg-green/90 text-white rounded-xl px-10 py-6 text-lg shadow-2xl hover:shadow-green/50 hover:scale-105 transition-all duration-300">
                  <Link to="/membership">
                    Join CCMP <ArrowRight className="ml-2 w-5 h-5" />
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
                  alt="CCMP Homoeopathic Association"
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
                Leading Maharashtra's Homoeopathic Excellence
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                CCMP Homoeopathic Doctors Association, Maharashtra stands as one of the most prestigious homoeopathic organizations in the state, dedicated to advancing the practice of classical homoeopathy and promoting the highest standards of patient care.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Following the principles of Dr. Samuel Hahnemann, we provide a platform for continuous learning, professional networking, and collaborative advancement of homoeopathic medicine across Maharashtra.
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
              Why Join CCMP?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Unlock exclusive benefits designed to enhance your homoeopathic practice and professional growth
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

      {/* Photo/Video Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Our Community in Action
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Explore moments from our events, workshops, and member activities
            </p>
          </motion.div>

          {/* Masonry Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] mb-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${image.span || ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm md:text-base">{image.caption}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
          >
            <div className="relative aspect-video bg-neutral-900">
              {!showVideo ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=675&fit=crop"
                    alt="API Video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowVideo(true)}
                      className="w-20 h-20 bg-saffron rounded-full flex items-center justify-center shadow-2xl hover:bg-saffron-dark transition-colors duration-300"
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </motion.button>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="API Community Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-bold">API - Advancing Excellence in Healthcare</h3>
              <p className="text-white/80 text-sm">Watch our journey and impact on Indian healthcare</p>
            </div>
          </motion.div>

          {/* View Gallery Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" className="bg-saffron hover:bg-saffron-dark text-white rounded-xl px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              View Full Gallery <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
          </motion.div>
        </motion.div>
      )}

      {/* Social Proof Ticker */}
      <section className="py-8 bg-neutral-50 overflow-hidden border-y border-neutral-200">
        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...activities, ...activities, ...activities].map((activity, index) => (
              <motion.div
                key={`${activity.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-neutral-200"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-saffron/10 rounded-full text-saffron">
                  {activity.icon}
                </div>
                <span className="text-sm font-medium text-neutral-700">{activity.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Founding Team */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-slate-800"
          >
            Meet Our Founding Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mockData.testimonials.slice(0, 4).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-transparent relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ padding: '2px' }} />
                  
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="relative w-36 h-36 mb-6">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-200 group-hover:border-blue-400 transition-all duration-300">
                        <img
                          src={member.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=150&background=3b82f6&color=fff`}
                          alt={member.name}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 p-4">
                        <p className="text-white text-sm font-medium text-center drop-shadow-lg leading-relaxed">
                          {member.quote}
                        </p>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {member.designation}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-saffron via-saffron-dark to-green text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white text-base py-2 px-6 rounded-full border border-white/30">
              Join 15,000+ Members
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Elevate your homoeopathic practice with exclusive resources, networking opportunities, and continuous professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-saffron hover:bg-white/90 rounded-xl px-12 py-7 text-lg font-semibold shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 group"
              >
                <Link to="/membership">
                  Become a Member Today 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-saffron rounded-xl px-12 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  Have questions? Contact us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-green/20 rounded-full blur-3xl"
        />
      </section>

      {/* Contact & Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">Get in Touch</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Have questions? Our team is here to help you with membership, events, or any inquiries.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-saffron/10 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Visit Us</h3>
                    <p className="text-neutral-600">CCMP Headquarters, Maharashtra<br />Mumbai, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green/10 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Call Us</h3>
                    <p className="text-neutral-600">+91 22 1234 5678<br />Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-saffron/10 rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Email Us</h3>
                    <p className="text-neutral-600">info@ccmpmaharashtra.org<br />support@ccmpmaharashtra.org</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-saffron hover:bg-saffron-dark text-white rounded-xl px-8 py-6">
                <Link to="/contact">
                  Visit Contact Page <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-2xl border-t-4 border-t-saffron">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-6">Quick Inquiry</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Dr. John Doe"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                      <input
                        type="text"
                        placeholder="Membership Inquiry"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                      <textarea
                        rows="4"
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green hover:bg-green/90 text-white rounded-lg py-6 text-lg font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
