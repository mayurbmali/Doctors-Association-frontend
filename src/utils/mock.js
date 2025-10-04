import React from "react";
import { Users, Calendar, Award, Clock } from "lucide-react";

export const mockData = {
  // Home page highlights
  highlights: [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      value: "150+",
      label: "Years of Homoeopathy"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      value: "5,000+",
      label: "Active Members"
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-600" />,
      value: "100+",
      label: "CME Programs Annually"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      value: "25+",
      label: "Awards & Recognition"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Dr. Prakash Desai",
      designation: "Senior Homoeopathic Consultant, Mumbai",
      quote: "CCMP has been instrumental in advancing homoeopathic practice across Maharashtra. The networking and continuous education opportunities are unmatched."
    },
    {
      name: "Dr. Anjali Kulkarni",
      designation: "Homoeopathic Physician, Pune",
      quote: "Being a CCMP member has connected me with leading homoeopathic practitioners across Maharashtra. The knowledge sharing platforms are exceptional."
    },
    {
      name: "Dr. Rajesh Patil",
      designation: "Homoeopathic Consultant, Nagpur",
      quote: "CCMP's commitment to preserving and promoting classical homoeopathy while embracing modern research is truly commendable."
    },
    {
      name: "Dr. Sunita Joshi",
      designation: "Homoeopathic Practitioner, Nashik",
      quote: "The quality of educational content and case discussions at CCMP events has significantly enhanced my clinical practice."
    },
    {
      name: "Dr. Manoj Sharma",
      designation: "Homoeopathic Doctor, Thane",
      quote: "CCMP provides excellent platforms for professional development and maintains the highest standards in homoeopathic medicine."
    },
    {
      name: "Dr. Kavita Deshmukh",
      designation: "Homoeopathic Specialist, Aurangabad",
      quote: "The association's dedication to patient care and ethical practice makes me proud to be a CCMP member."
    }
  ],

  // Trustees
  trustees: [
    {
      id: 1,
      name: "Dr. Suresh Patel",
      designation: "President",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "Renowned homoeopathic practitioner with 35+ years of experience. Pioneer in advancing homoeopathic education in Maharashtra."
    },
    {
      id: 2,
      name: "Dr. Meera Kulkarni",
      designation: "Vice President",
      image: "https://images.unsplash.com/photo-1594824078170-14d394d79af4?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in classical homoeopathy and women's health. Leading advocate for homoeopathic integration in mainstream healthcare."
    },
    {
      id: 3,
      name: "Dr. Vijay Deshmukh",
      designation: "Secretary General",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      bio: "Homoeopathic researcher and educator. Published numerous papers on efficacy of homoeopathic remedies in chronic diseases."
    },
    {
      id: 4,
      name: "Dr. Priya Jadhav",
      designation: "Treasurer",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      bio: "Specialist in pediatric homoeopathy and healthcare policy. Active member of state health advisory committees."
    }
  ],

  // Leadership & Committees
  leadership: {
    advisory: [
      {
        name: "Dr. Ashok Mehta",
        designation: "Chairman, Advisory Board",
        specialization: "Classical Homoeopathy"
      },
      {
        name: "Dr. Sangeeta Rane",
        designation: "Senior Advisor",
        specialization: "Homoeopathic Materia Medica"
      }
    ],
    executive: [
      {
        name: "Dr. Anil Sharma",
        designation: "Executive Director",
        specialization: "Clinical Homoeopathy"
      },
      {
        name: "Dr. Rekha Patil",
        designation: "Executive Member",
        specialization: "Homoeopathic Research"
      }
    ],
    steering: [
      {
        name: "Dr. Ganesh Joshi",
        designation: "Steering Committee Head",
        specialization: "Organon & Philosophy"
      },
      {
        name: "Dr. Nisha Pawar",
        designation: "Member",
        specialization: "Repertory & Case Taking"
      }
    ],
    districts: [
      {
        name: "Dr. Rajiv Kulkarni",
        designation: "Mumbai Representative",
        specialization: "Chronic Disease Management"
      },
      {
        name: "Dr. Swati Gaikwad",
        designation: "Pune Representative",
        specialization: "Pediatric Homoeopathy"
      }
    ]
  },

  // Meetings
  upcomingMeetings: [
    {
      id: 1,
      title: "Annual Homoeopathic Conference 2024",
      date: "2024-03-15",
      time: "09:00 AM",
      venue: "Sahitya Sahawas, Mumbai",
      type: "Conference",
      description: "Three-day conference featuring latest developments in homoeopathic practice and research.",
      registrationOpen: true
    },
    {
      id: 2,
      title: "Organon & Philosophy Workshop",
      date: "2024-02-28",
      time: "02:00 PM",
      venue: "Online (Zoom)",
      type: "Workshop",
      description: "In-depth discussion on Hahnemann's Organon and fundamental principles of homoeopathy.",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Regional Chapter Meet - Vidarbha",
      date: "2024-03-05",
      time: "10:00 AM",
      venue: "Nagpur Homoeopathic College",
      type: "Regional Meet",
      description: "Quarterly meeting for Vidarbha region members with case presentations.",
      registrationOpen: true
    }
  ],

  pastMeetings: [
    {
      id: 1,
      title: "Winter CME Program 2023",
      date: "2023-12-10",
      venue: "Pune Homoeopathic Medical College",
      type: "CME",
      highlights: "Over 300 homoeopaths attended. Focus on constitutional prescribing and miasmatic analysis."
    },
    {
      id: 2,
      title: "Materia Medica Masterclass",
      date: "2023-11-20",
      venue: "Mumbai Homoeopathic Hall",
      type: "Workshop",
      highlights: "Intensive study of polychrest remedies and their clinical applications."
    }
  ],

  // Notifications
  notifications: [
    {
      id: 1,
      title: "New Membership Rates Effective January 2024",
      category: "Notice",
      date: "2024-01-01",
      content: "The membership fee has been revised to ₹500 per annum effective January 1, 2024. All benefits remain unchanged.",
      priority: "high"
    },
    {
      id: 2,
      title: "CME Credit Requirements Update",
      category: "Policy",
      date: "2024-01-10",
      content: "New guidelines for CME credit accumulation have been published. Members need minimum 15 credits per year.",
      priority: "medium"
    },
    {
      id: 3,
      title: "Research Grant Applications Now Open",
      category: "Opportunity",
      date: "2024-01-15",
      content: "CCMP Research Foundation is accepting applications for homoeopathic research grants up to ₹2 lakh.",
      priority: "medium"
    },
    {
      id: 4,
      title: "Homoeopathic Journal Publication",
      category: "Publication",
      date: "2024-01-20",
      content: "The latest edition of CCMP Homoeopathic Journal is now available for download in the members portal.",
      priority: "low"
    }
  ],

  // Membership benefits
  membershipBenefits: [
    "Access to exclusive CME programs and workshops on homoeopathy",
    "Annual subscription to CCMP Homoeopathic Journal",
    "Networking opportunities with leading homoeopathic practitioners",
    "Discounted rates for conferences and seminars",
    "Professional development resources in homoeopathic medicine",
    "Research collaboration opportunities in homoeopathy",
    "Healthcare policy updates and advocacy for homoeopathy",
    "Online homoeopathic library access"
  ],

  // History milestones - CCMP focused
  historyMilestones: [
    {
      year: "1875",
      title: "Foundation of Homoeopathy in India",
      description: "Homoeopathy introduced to India, laying the foundation for organizations like CCMP."
    },
    {
      year: "1920",
      title: "First Homoeopathic Association",
      description: "Early homoeopathic practitioners in Maharashtra formed informal networks for knowledge sharing."
    },
    {
      year: "1950",
      title: "CCMP Establishment",
      description: "CCMP Homoeopathic Doctors Association formally established in Maharashtra to promote classical homoeopathy."
    },
    {
      year: "1970",
      title: "State Recognition",
      description: "Gained official recognition from Maharashtra state government as premier homoeopathic association."
    },
    {
      year: "1990",
      title: "CME Program Launch",
      description: "Launched structured continuing medical education programs specifically for homoeopathic practitioners."
    },
    {
      year: "2005",
      title: "Digital Platform Development",
      description: "Embraced technology with online case repositories and digital learning resources for homoeopathy."
    },
    {
      year: "2015",
      title: "Research Foundation",
      description: "Established CCMP Research Foundation to fund evidence-based homoeopathic research projects."
    },
    {
      year: "2024",
      title: "Excellence in Homoeopathy",
      description: "Celebrating decades of advancing homoeopathic practice, education, and patient care across Maharashtra."
    }
  ]
};

// Contact information
export const contactInfo = {
  address: {
    line1: "CCMP Homoeopathic Doctors Association",
    line2: "Maharashtra Branch Office",
    line3: "Mumbai - 400001, Maharashtra, India"
  },
  phone: "+91 22 1234 5678",
  email: "info@ccmpmaharashtra.org",
  website: "www.ccmpmaharashtra.org",
  mapCoordinates: {
    lat: 19.0760,
    lng: 72.8777
  }
};

// Vision and Mission
export const visionMission = {
  vision: "To be the premier association of homoeopathic practitioners in Maharashtra, upholding the classical principles of homoeopathy while fostering innovation, research, and excellence in patient care.",
  mission: [
    "Promote continuous medical education in homoeopathic principles and practice",
    "Advance homoeopathic research and evidence-based practice",
    "Foster collaboration and networking among homoeopathic professionals",
    "Advocate for healthcare policies that recognize and support homoeopathic medicine",
    "Maintain the highest ethical standards in homoeopathic practice",
    "Preserve and promote the classical teachings of Dr. Samuel Hahnemann"
  ]
};
