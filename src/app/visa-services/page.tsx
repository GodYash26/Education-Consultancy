import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, GraduationCap, Briefcase, Users, CheckCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Visa Services | Gyan Education Consultancy",
  description: "Comprehensive visa consultation services for students, professionals, and families. Expert guidance for study, work, and immigration visas.",
};

export default function VisaServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Visa Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert visa consultation and application assistance for your international journey. We guide you through every step of the process.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Visa Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for all your visa requirements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Student Visa</CardTitle>
                <CardDescription>
                  Complete assistance for student visa applications to USA, UK, Canada, Australia, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• University admission guidance</li>
                  <li>• Document preparation</li>
                  <li>• Visa interview coaching</li>
                  <li>• Financial documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Work Visa</CardTitle>
                <CardDescription>
                  Professional guidance for work permits and employment-based visa applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Job offer validation</li>
                  <li>• Work permit applications</li>
                  <li>• Skilled worker visas</li>
                  <li>• Intra-company transfers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Family Visa</CardTitle>
                <CardDescription>
                  Support for dependent and family reunion visa applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Spouse visa applications</li>
                  <li>• Dependent visa guidance</li>
                  <li>• Parent sponsorship</li>
                  <li>• Family reunion support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Tourist Visa</CardTitle>
                <CardDescription>
                  Assistance with visitor and tourist visa applications for various countries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Travel itinerary planning</li>
                  <li>• Documentation support</li>
                  <li>• Application submission</li>
                  <li>• Interview preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-2" />
                <CardTitle>PR & Immigration</CardTitle>
                <CardDescription>
                  Permanent residency and immigration consultation for Canada, Australia, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Points-based assessment</li>
                  <li>• Express Entry guidance</li>
                  <li>• Provincial nomination</li>
                  <li>• Skilled migration support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Visa Extension</CardTitle>
                <CardDescription>
                  Help with extending existing visas and changing visa status.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Extension applications</li>
                  <li>• Status change requests</li>
                  <li>• Renewal assistance</li>
                  <li>• Compliance guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>🇺🇸 USA</CardTitle>
                <CardDescription>F1, H1B, Green Card</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🇨🇦 Canada</CardTitle>
                <CardDescription>Study Permit, Express Entry, PR</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🇬🇧 UK</CardTitle>
                <CardDescription>Student Visa, Skilled Worker</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🇦🇺 Australia</CardTitle>
                <CardDescription>Student Visa, Skilled Migration</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🇳🇿 New Zealand</CardTitle>
                <CardDescription>Study, Work, Residence</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🇩🇪 Germany</CardTitle>
                <CardDescription>Student Visa, Job Seeker</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🇸🇬 Singapore</CardTitle>
                <CardDescription>Student Pass, Work Permit</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🇦🇪 UAE</CardTitle>
                <CardDescription>Tourist, Work, Residence</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              Simple and transparent visa application process
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Initial Consultation</h3>
              <p className="text-muted-foreground">
                Free assessment of your profile and visa eligibility
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Documentation</h3>
              <p className="text-muted-foreground">
                Guidance on required documents and their preparation
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Application Filing</h3>
              <p className="text-muted-foreground">
                Complete assistance with application submission
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold">Follow-up</h3>
              <p className="text-muted-foreground">
                Regular updates and support until visa approval
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Visa Services</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Expert Consultants</h3>
                <p className="text-sm text-muted-foreground">Certified immigration consultants with years of experience</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">High Success Rate</h3>
                <p className="text-sm text-muted-foreground">Proven track record of successful visa approvals</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Document Support</h3>
                <p className="text-sm text-muted-foreground">Complete assistance with document preparation and verification</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Interview Coaching</h3>
                <p className="text-sm text-muted-foreground">Mock interviews and preparation for visa interviews</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Regular Updates</h3>
                <p className="text-sm text-muted-foreground">Timely communication on application progress</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Post-Visa Support</h3>
                <p className="text-sm text-muted-foreground">Continued guidance even after visa approval</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Visa Application?</h2>
            <p className="text-lg text-muted-foreground">
              Book a free consultation with our visa experts today and take the first step towards your international journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
