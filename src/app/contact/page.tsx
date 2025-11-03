"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us for a free consultation. We're here to help you achieve your international education and immigration goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="p-8 text-center space-y-4">
                      <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll contact you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="ielts">IELTS Preparation</option>
                          <option value="pte">PTE Coaching</option>
                          <option value="student-visa">Student Visa</option>
                          <option value="work-visa">Work Visa</option>
                          <option value="pr-immigration">PR & Immigration</option>
                          <option value="other">Other Services</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to answer any questions you may have about our services. 
                  Reach out to us and we'll respond as soon as we can.
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Our Location</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Education Street<br />
                          City Center, State 12345<br />
                          Country
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-sm text-muted-foreground">
                          Main: +1 234 567 8900<br />
                          Support: +1 234 567 8901
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-sm text-muted-foreground">
                          General: info@gyaneducation.com<br />
                          Support: support@gyaneducation.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border">
            <p className="text-muted-foreground">Map Integration Placeholder</p>
          </div>
        </div>
      </section>
    </>
  );
}
