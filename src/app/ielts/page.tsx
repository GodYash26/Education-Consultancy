import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Users, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "IELTS Preparation | Gyan Education Consultancy",
  description: "Expert IELTS coaching with proven strategies. Achieve your target band score with our comprehensive preparation program.",
};

export default function IELTSPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              IELTS Preparation
            </h1>
            <p className="text-xl text-muted-foreground">
              Master the International English Language Testing System with our expert guidance and proven methodologies.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About IELTS Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About IELTS</h2>
              <p className="text-lg text-muted-foreground">
                The International English Language Testing System (IELTS) is the world's most popular English language proficiency test for higher education and global migration.
              </p>
              <p className="text-muted-foreground">
                IELTS assesses all four language skills - Listening, Reading, Writing, and Speaking. Whether you're planning to study abroad, migrate to an English-speaking country, or advance your career, IELTS is your gateway to global opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    IELTS Academic
                  </CardTitle>
                  <CardDescription>
                    For students applying to universities and professional registration
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    IELTS General Training
                  </CardTitle>
                  <CardDescription>
                    For immigration purposes and work experience programs
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Test Format Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Test Format</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Listening</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">30 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  40 questions based on four recorded monologues and conversations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reading</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">60 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  40 questions from three reading passages with a variety of question types
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Writing</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">60 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Two writing tasks - Task 1 (150 words) and Task 2 (250 words)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Speaking</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">11-14 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Face-to-face interview in three parts with a certified examiner
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Program Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IELTS Program</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive training designed to help you achieve your target score
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Study Materials</h3>
              <p className="text-muted-foreground">
                Access to the latest IELTS books, practice tests, and online resources
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Trainers</h3>
              <p className="text-muted-foreground">
                Learn from certified IELTS trainers with years of teaching experience
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Flexible Timings</h3>
              <p className="text-muted-foreground">
                Weekend and weekday batches available to suit your schedule
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mock Tests</h3>
              <p className="text-muted-foreground">
                Regular mock tests under real exam conditions with detailed feedback
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Individual Attention</h3>
              <p className="text-muted-foreground">
                Small batch sizes ensuring personalized attention for each student
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Strategy Sessions</h3>
              <p className="text-muted-foreground">
                Learn exam strategies, time management, and band score improvement techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Achieve Your Target Band Score?</h2>
            <p className="text-lg text-muted-foreground">
              Join our IELTS preparation program and get closer to your dreams of studying or working abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Enroll Now</Link>
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
