import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileCheck, Plane, Users, Award, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your Gateway to Global Education
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert guidance for IELTS, PTE preparation and comprehensive visa services. 
              Start your journey to success with Gyan Education Consultancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for your international education and immigration needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-2" />
                <CardTitle>IELTS Preparation</CardTitle>
                <CardDescription>
                  Expert coaching for all four modules with proven strategies to achieve your target band score.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/ielts">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileCheck className="h-12 w-12 text-primary mb-2" />
                <CardTitle>PTE Coaching</CardTitle>
                <CardDescription>
                  Comprehensive PTE Academic preparation with practice tests and personalized feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/pte">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Visa Services</CardTitle>
                <CardDescription>
                  Complete visa assistance for students, workers, and immigrants to various countries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/visa-services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              We are committed to your success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Trainers</h3>
              <p className="text-muted-foreground">
                Highly qualified and experienced instructors with proven track records
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">High Success Rate</h3>
              <p className="text-muted-foreground">
                Our students consistently achieve their target scores and visa approvals
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Global Partnerships</h3>
              <p className="text-muted-foreground">
                Strong network with universities and institutions worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6 bg-primary/5 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground">
              Contact us today for a free consultation and take the first step towards your dreams.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
