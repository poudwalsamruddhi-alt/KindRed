"use client";
import { useState } from "react";
import Link from "next/link";
export default function Footer() {
  const [showToast, setShowToast] = useState(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <footer className="bg-surface-container-lowest border-t border-outline-variant">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg px-gutter py-xl max-w-container-max mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-headline-sm">diversity_1</span>
              <span className="font-headline-sm text-headline-sm text-primary">Kindred</span>
            </div>
            <p className="text-on-surface-variant font-body-md">
              Dignified connections for global change. We believe in human potential and community-led resilience.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-on-surface uppercase tracking-widest text-sm">Programs</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/climate">
                  Climate Action
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/nutrition">
                  Nutrition Program
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/education">
                  Education Initiative
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/animal-welfare">
                  Animal Welfare
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/health">
                  Health Program
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/social-equity">
                  Social Equity
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-on-surface uppercase tracking-widest text-sm">Engagement</h5>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/impact">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/stories">
                  Stories
                </Link>
              </li>
              <li>
                <Link className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/volunteer">
                  Volunteer
                </Link>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors hover:underline" href="/annual-report">
                  Annual Reports
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-on-surface uppercase tracking-widest text-sm">Connect</h5>
            <p className="text-on-surface-variant text-sm">Stay updated with our monthly impact newsletter.</p>
            <div className="flex gap-2">
              <input
                className="bg-surface border border-outline-variant px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-primary-container outline-none"
                placeholder="Email"
                type="email"
              />
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter py-md border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-on-surface-variant text-sm font-label-md text-center md:text-left">© 2026 Kindred Impact. Dignified connections for global change.</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-lg">
            <Link className="text-on-surface-variant text-sm hover:text-primary transition-all" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-on-surface-variant text-sm hover:text-primary transition-all" href="/terms">
              Terms
            </Link>
            <Link className="text-on-surface-variant text-sm hover:text-primary transition-all" href="/contact">
              Contact
            </Link>
            <Link className="text-on-surface-variant text-sm hover:text-primary transition-all" href="/annual-report">
              Annual Report
            </Link>
          </div>
        </div>
      </footer>

          </>
  );
}
