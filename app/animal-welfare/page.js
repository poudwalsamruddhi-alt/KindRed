"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AnimalWelfarePage() {
  return (
    <>
      <Header />

      <main className="pt-[88px]">
        <section className="relative h-[530px] min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              fill
              className="object-cover"
              alt="Community volunteering activity"

              src="https://images.unsplash.com/photo-1553434133-96822a8e94af?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent"></div>
          </div>
          <div className="relative w-full max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl">
              <span className="inline-block bg-primary/10 text-primary px-md py-xs rounded-full font-label-md text-label-md mb-md">
                Animal Welfare Pillar
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-md">Animal Protection Program</h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-lg">
                Rescuing and protecting animals through shelters, medical care, and adoption services while promoting humane treatment.
              </p>
              <a
                className="inline-flex items-center gap-sm bg-primary text-on-primary px-lg py-md rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-all"
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
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Our Animal Welfare Mission</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                We're dedicated to protecting and improving the lives of animals through rescue operations, medical care, and adoption services. Our programs focus on creating safe havens for abandoned animals and promoting humane treatment in communities.
              </p>
              <div className="space-y-md">
                <div className="flex items-start gap-md">
                  <div className="bg-primary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-primary">pets</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Rescue & Rehabilitation</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Saving abused and abandoned animals, providing medical care and rehabilitation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="bg-primary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-primary">home</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Adoption Services</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Connecting rescued animals with loving families through our adoption programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="bg-primary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-primary">school</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Humane Education</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Teaching communities about responsible pet ownership and animal welfare.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-xl rounded-xl">
              <h3 className="font-headline-md text-headline-md text-primary mb-lg">Animal Welfare Impact</h3>
              <div className="space-y-lg">
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Animals Rescued</span>
                    <span className="font-label-md text-label-md text-primary font-bold">5,000+</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Successful Adoptions</span>
                    <span className="font-label-md text-label-md text-primary font-bold">3,200</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container" style={{ width: "64%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Shelters Supported</span>
                    <span className="font-label-md text-label-md text-primary font-bold">25</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-xl">
          <div className="px-gutter max-w-container-max mx-auto">
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Support Our Animal Welfare Work</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Your donation helps us rescue more animals, provide medical care, and find loving homes for those in need.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-3xl mx-auto">
              <button className="bg-surface border border-outline-variant p-lg rounded-xl hover:border-primary hover:scale-105 transition-all text-center group">
                <span className="text-3xl font-bold text-primary block mb-sm">₹250</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Provides food for 10 animals</span>
              </button>
              <button className="bg-primary text-on-primary p-lg rounded-xl hover:scale-105 transition-all text-center group shadow-lg">
                <span className="text-3xl font-bold block mb-sm">₹500</span>
                <span className="font-label-md text-label-md">Funds medical care for 1 animal</span>
              </button>
              <button className="bg-surface border border-outline-variant p-lg rounded-xl hover:border-primary hover:scale-105 transition-all text-center group">
                <span className="text-3xl font-bold text-primary block mb-sm">₹1,000</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Supports shelter operations for 1 week</span>
              </button>
            </div>
            <div className="text-center mt-lg">
              <a className="bg-primary text-on-primary px-xl py-md rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-all inline-flex items-center gap-sm" href="/donate">
                Complete Donation
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            
            <div className="mt-xl">
              <h3 className="font-headline-sm text-headline-sm text-on-surface text-center mb-md">Share This Program</h3>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Support animal welfare with Kindred! Help us rescue animals, provide medical care, and find loving homes for those in need.&url=${window.location.href}`, '_blank')}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-primary hover:scale-105 transition-all group"
                  aria-label="Share on Twitter"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">share</span>
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-primary hover:scale-105 transition-all group"
                  aria-label="Share on Facebook"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">thumb_up</span>
                </button>
                <button 
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-primary hover:scale-105 transition-all group"
                  aria-label="Copy link"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">link</span>
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
