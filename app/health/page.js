"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function HealthPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px]">
        <section className="relative h-[530px] min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              fill
              alt="Healthcare workers providing medical care to community members"
              className="object-cover"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent"></div>
          </div>
          <div className="relative w-full max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl">
              <span className="inline-block bg-secondary/10 text-secondary px-md py-xs rounded-full font-label-md text-label-md mb-md">
                Health Pillar
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-md">Community Mobile Clinics</h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-lg">
                Bridging healthcare gaps through mobile medical units, preventive care, and health education in underserved communities.
              </p>
              <a
                className="inline-flex items-center gap-sm bg-secondary text-on-secondary px-lg py-md rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-all"
                href="/donate"
              >
                Support the Initiative
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-xl px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Our Health Mission</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                We're committed to providing quality healthcare to underserved communities through mobile clinics, preventive health programs, and medical education. Our initiatives focus on maternal health, child nutrition, and disease prevention.
              </p>
              <div className="space-y-md">
                <div className="flex items-start gap-md">
                  <div className="bg-secondary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-secondary">medical_services</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Mobile Clinics</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Bringing medical care directly to remote and underserved communities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="bg-secondary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-secondary">vaccines</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Vaccination Programs</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Providing essential vaccines and immunizations to prevent diseases.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="bg-secondary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-secondary">pregnant_woman</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Maternal Health</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Supporting mothers and newborns with prenatal and postnatal care.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-xl rounded-xl">
              <h3 className="font-headline-md text-headline-md text-secondary mb-lg">Health Impact Metrics</h3>
              <div className="space-y-lg">
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Patients Treated</span>
                    <span className="font-label-md text-label-md text-secondary font-bold">25,000+</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-container" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Vaccines Administered</span>
                    <span className="font-label-md text-label-md text-secondary font-bold">15,000</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-container" style={{ width: "82%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Mobile Clinics</span>
                    <span className="font-label-md text-label-md text-secondary font-bold">12</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-container" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-xl">
          <div className="px-gutter max-w-container-max mx-auto">
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Support Our Health Programs</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Your donation helps us provide essential medical care, vaccines, and health education to communities in need.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-3xl mx-auto">
              <button className="bg-surface border border-outline-variant p-lg rounded-xl hover:border-secondary hover:scale-105 transition-all text-center group">
                <span className="text-3xl font-bold text-secondary block mb-sm">₹250</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Provides basic medical supplies</span>
              </button>
              <button className="bg-secondary text-on-secondary p-lg rounded-xl hover:scale-105 transition-all text-center group shadow-lg">
                <span className="text-3xl font-bold block mb-sm">₹500</span>
                <span className="font-label-md text-label-md">Funds vaccinations for 20 children</span>
              </button>
              <button className="bg-surface border border-outline-variant p-lg rounded-xl hover:border-secondary hover:scale-105 transition-all text-center group">
                <span className="text-3xl font-bold text-secondary block mb-sm">₹1,000</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Supports mobile clinic for 1 day</span>
              </button>
            </div>
            <div className="text-center mt-lg">
              <a className="bg-secondary text-on-secondary px-xl py-md rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-all inline-flex items-center gap-sm" href="/donate">
                Complete Donation
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            
            <div className="mt-xl">
              <h3 className="font-headline-sm text-headline-sm text-on-surface text-center mb-md">Share This Program</h3>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Support healthcare with Kindred! Help us provide medical care, vaccines, and health services to communities in need.&url=${window.location.href}`, '_blank')}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-secondary hover:scale-105 transition-all group"
                  aria-label="Share on Twitter"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">share</span>
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-secondary hover:scale-105 transition-all group"
                  aria-label="Share on Facebook"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">thumb_up</span>
                </button>
                <button 
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-secondary hover:scale-105 transition-all group"
                  aria-label="Copy link"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary">link</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
