import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Users, Clock, Award, Laptop } from "lucide-react";

export const metadata: Metadata = {
  title: "PTE Preparation | Gyan Education Consultancy",
  description: "Expert PTE Academic coaching with AI-powered practice and proven strategies to achieve your target score.",
};

export default function PTEPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              PTE Academic Preparation
            </h1>
            <p className="text-xl text-muted-foreground">
              Excel in the Pearson Test of English Academic with our comprehensive computer-based test preparation program.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About PTE Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About PTE Academic</h2>
              <p className="text-lg text-muted-foreground">
                PTE Academic is a computer-based English language test trusted by thousands of universities, colleges, and governments around the world.
              </p>
              <p className="text-muted-foreground">
                With quick results (usually within 48 hours), flexible test dates, and unbiased automated scoring, PTE Academic is becoming the preferred choice for students and professionals seeking to study or work abroad.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Fast results - Usually within 48 hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Accepted worldwide by universities and governments</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Unbiased AI-based scoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Flexible test dates available year-round</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>3-hour computer-based test</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Tests all four skills in one session</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Convenient online booking</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Score valid for 2 years</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Can send scores to unlimited institutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Test Format Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Test Format</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Speaking & Writing</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">54-67 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Personal Introduction</li>
                  <li>• Read Aloud</li>
                  <li>• Repeat Sentence</li>
                  <li>• Describe Image</li>
                  <li>• Re-tell Lecture</li>
                  <li>• Answer Short Question</li>
                  <li>• Summarize Written Text</li>
                  <li>• Essay Writing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reading</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">29-30 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Multiple Choice (Single & Multiple)</li>
                  <li>• Re-order Paragraphs</li>
                  <li>• Fill in the Blanks</li>
                  <li>• Reading & Writing Fill in Blanks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Listening</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">30-43 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Summarize Spoken Text</li>
                  <li>• Multiple Choice (Single & Multiple)</li>
                  <li>• Fill in the Blanks</li>
                  <li>• Highlight Correct Summary</li>
                  <li>• Select Missing Word</li>
                  <li>• Highlight Incorrect Words</li>
                  <li>• Write from Dictation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Program Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our PTE Program</h2>
            <p className="text-lg text-muted-foreground">
              Advanced training with AI-powered practice to help you excel
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Computer-Based Practice</h3>
              <p className="text-muted-foreground">
                Extensive practice on actual PTE software interface to familiarize with the test environment
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Latest Study Materials</h3>
              <p className="text-muted-foreground">
                Access to updated PTE practice materials and question banks
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Coaching</h3>
              <p className="text-muted-foreground">
                Trained instructors specializing in PTE preparation strategies
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Scored Mock Tests</h3>
              <p className="text-muted-foreground">
                AI-scored practice tests with detailed performance analysis
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Time Management</h3>
              <p className="text-muted-foreground">
                Special focus on time management and test-taking strategies
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Personalized Feedback</h3>
              <p className="text-muted-foreground">
                Individual performance tracking and customized improvement plans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Score Guide Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">PTE Score Guide</h2>
            <Card>
              <CardHeader>
                <CardDescription>
                  PTE Academic scores range from 10 to 90 points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>86-90:</strong> Expert
                  </div>
                  <div className="text-muted-foreground">
                    Native-like proficiency
                  </div>
                  <div>
                    <strong>76-85:</strong> Very Good
                  </div>
                  <div className="text-muted-foreground">
                    Highly proficient
                  </div>
                  <div>
                    <strong>59-75:</strong> Good
                  </div>
                  <div className="text-muted-foreground">
                    Competent user
                  </div>
                  <div>
                    <strong>43-58:</strong> Competent
                  </div>
                  <div className="text-muted-foreground">
                    Modest user
                  </div>
                  <div>
                    <strong>30-42:</strong> Modest
                  </div>
                  <div className="text-muted-foreground">
                    Limited user
                  </div>
                  <div>
                    <strong>10-29:</strong> Limited
                  </div>
                  <div className="text-muted-foreground">
                    Non-user to limited user
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Achieve Your Target PTE Score?</h2>
            <p className="text-lg text-muted-foreground">
              Join our PTE Academic preparation program and get one step closer to your international education goals.
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
