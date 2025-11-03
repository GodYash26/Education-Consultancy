import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold">Gyan Education</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for international education and visa services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ielts" className="text-muted-foreground hover:text-primary transition-colors">
                  IELTS
                </Link>
              </li>
              <li>
                <Link href="/pte" className="text-muted-foreground hover:text-primary transition-colors">
                  PTE
                </Link>
              </li>
              <li>
                <Link href="/visa-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Visa Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>IELTS Preparation</li>
              <li>PTE Coaching</li>
              <li>Student Visa</li>
              <li>Work Visa</li>
              <li>Immigration Consultancy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Education Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@gyaneducation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gyan Education Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
