import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Abdel Altarazi
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#features" className="text-gray-700 hover:text-primary">
            Features
          </Link>
          <Link
            href="/#testimonials"
            className="text-gray-700 hover:text-primary"
          >
            Testimonials
          </Link>
          <Link href="/#pricing" className="text-gray-700 hover:text-primary">
            Pricing
          </Link>
          <Button href="/contact" variant="outline" size="sm">
            Contact Us
          </Button>
          <Button href="/signup" variant="primary" size="sm">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-2 space-y-1">
            <Link
              href="/#features"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/#testimonials"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="/#pricing"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              Pricing
            </Link>
            <div className="mt-4 space-y-2">
              <Button href="/contact" variant="outline" fullWidth>
                Contact Us
              </Button>
              <Button href="/signup" variant="primary" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
