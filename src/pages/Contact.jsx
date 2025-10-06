import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building
} from "lucide-react";
import { contactInfo } from "../utils/mock";

const Contact = () => {

  const keyContacts = [
    {
      name: "Dr. Arun Kumar",
      designation: "President",
      email: "president@ccmpmaharashtra.org",
      phone: "+91 22 1234 5678"
    },
    {
      name: "Dr. Vikram Singh",
      designation: "Secretary General",
      email: "secretary@ccmpmaharashtra.org",
      phone: "+91 22 1234 5679"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-600 text-white">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about CCMP membership, programs, or services? We're here to help. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Office Location */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Building className="w-6 h-6 mr-3 text-blue-600" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="glass-icon flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0" role="img" aria-label="Location icon">
                      <MapPin className="w-6 h-6 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{contactInfo.address.line1}</p>
                      <p className="text-gray-600">{contactInfo.address.line2}</p>
                      <p className="text-gray-600">{contactInfo.address.line3}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="glass-icon flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0" role="img" aria-label="Phone icon">
                      <Phone className="w-6 h-6 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="glass-icon flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0" role="img" aria-label="Email icon">
                      <Mail className="w-6 h-6 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                    <p className="text-gray-700">{contactInfo.email}</p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="glass-icon flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0" role="img" aria-label="Clock icon">
                      <Clock className="w-6 h-6 text-white drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sun: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Contacts */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Key Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {keyContacts.map((contact, index) => (
                    <div key={index} className="border-l-4 border-emerald-600 pl-4">
                      <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                      <p className="text-emerald-600 text-sm font-medium">{contact.designation}</p>
                      <div className="mt-2 space-y-2">
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="glass-icon flex items-center justify-center w-7 h-7 rounded-lg" role="img" aria-label="Email">
                            <Mail className="w-4 h-4 text-white drop-shadow-lg" strokeWidth={2.5} />
                          </div>
                          {contact.email}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="glass-icon flex items-center justify-center w-7 h-7 rounded-lg" role="img" aria-label="Phone">
                            <Phone className="w-4 h-4 text-white drop-shadow-lg" strokeWidth={2.5} />
                          </div>
                          {contact.phone}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;