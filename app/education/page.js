"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function EducationPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px]">
        <section className="relative h-[530px] min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Teacher helping students learn in classroom environment"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent"></div>
          </div>
          <div className="relative w-full max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl">
              <span className="inline-block bg-tertiary/10 text-tertiary px-md py-xs rounded-full font-label-md text-label-md mb-md">
                Education Pillar
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-md">Universal Literacy Initiative</h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-lg">
                Breaking the cycle of poverty through the power of the written word. We provide the tools, spaces, and teachers necessary
                to unlock every child&apos;s potential.
              </p>
              <a
                className="inline-flex items-center gap-sm bg-primary-container text-on-primary-container px-lg py-md rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-all"
                href="#donate"
              >
                Support the Initiative
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="impact-card p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md">menu_book</span>
                <h3 className="font-display-lg text-display-lg text-primary mb-xs">45,000+</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Books Distributed</p>
              </div>
              <div className="impact-card p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md">school</span>
                <h3 className="font-display-lg text-display-lg text-primary mb-xs">112</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Schools Built &amp; Restored</p>
              </div>
              <div className="impact-card p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md">group</span>
                <h3 className="font-display-lg text-display-lg text-primary mb-xs">8,200</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Educators Trained</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col lg:flex-row gap-xl items-center">
              <div className="w-full lg:w-1/2">
                <img
                  alt="Amara studying"
                  className="w-full h-[600px] object-cover rounded-[24px] shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZck5PClb6OJEGDpWSf_4uVfLF6Ssnm_mXFhSg6FrUWJfo3fs1Cx5JZplG7ZWznHW79O7T0NTvqYgpvC__k0IFwNYmzEX1Oko15A74M1asog9wN8i61rPlcmNlKXhf_ofVmnDfeEW2m2G4do-wIvGponbw4mDL4F3g_uUMKUPR8A3uusxxu3Jl6d91Nue0rL4iawQFOz4omglO9mPiJ-HBItMCkpuWbUgwFJkVDO03rAQbnZ6zg5vmS-8GfUpcIYO_YLhuYyfOmPs"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <span className="font-label-md text-primary uppercase tracking-widest mb-sm block">A Life Transformed</span>
                <h2 className="font-headline-lg text-headline-lg mb-md text-on-surface leading-tight">Amara&apos;s Journey to the Stars</h2>
                <div className="space-y-md font-body-md text-on-surface-variant">
                  <p>
                    In the rural outskirts of her village, Amara used to spend her days fetching water, her dreams limited by the horizon
                    she could see. When Kindred opened the first community library within walking distance, her world expanded overnight.
                  </p>
                  <p>
                    Through our Universal Literacy Initiative, Amara didn&apos;t just learn to decode letters; she discovered science,
                    history, and the vast possibilities of her own future.
                  </p>
                </div>
                <div className="mt-lg p-md border-l-4 border-primary bg-surface-container-low rounded-r-xl">
                  <p className="font-body-md text-on-surface">
                    <strong>The Goal:</strong> We are currently raising ₹50,000 to bring digital literacy toolkits to 20 more rural hubs
                    like Amara&apos;s.
                  </p>
                  <div className="mt-md h-3 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container" style={{ width: "65%" }}></div>
                  </div>
                  <p className="text-label-md mt-xs text-on-surface-variant font-bold">₹32,500 raised of ₹50,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-on-background text-white relative overflow-hidden" id="donate">
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <h2 className="font-display-lg text-display-lg mb-md">Invest in a Child&apos;s Future</h2>
            <p className="font-body-lg text-body-lg mb-xl max-w-2xl mx-auto opacity-90">
              100% of your donation to the Education Pillar goes directly to books, building materials, and teacher training.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl max-w-4xl mx-auto">
              <button className="p-lg border-2 border-white/20 rounded-xl hover:border-primary-container hover:bg-white/5 transition-all">
                <span className="block font-headline-md text-headline-md mb-xs">₹250</span>
                <span className="block font-label-md opacity-70">Provides a set of 10 storybooks</span>
              </button>
              <button className="p-lg border-2 border-primary-container bg-primary-container text-on-primary-container rounded-xl hover:scale-105 transition-all">
                <span className="block font-headline-md text-headline-md mb-xs">₹1,000</span>
                <span className="block font-label-md font-bold">Funds one month of teacher training</span>
              </button>
              <button className="p-lg border-2 border-white/20 rounded-xl hover:border-primary-container hover:bg-white/5 transition-all">
                <span className="block font-headline-md text-headline-md mb-xs">₹5,000</span>
                <span className="block font-label-md opacity-70">Equips an entire classroom</span>
              </button>
            </div>
            <a className="bg-primary-container text-on-primary-container px-xl py-md rounded-full font-label-md text-label-md font-bold uppercase tracking-widest hover:scale-95 transition-all inline-block" href="/donate">
              Complete Donation
            </a>
            
            <div className="mt-xl">
              <h3 className="font-headline-sm text-headline-sm text-on-surface text-center mb-md">Share This Program</h3>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Support education with Kindred! Help us provide quality education and learning resources to children in underserved communities.&url=${window.location.href}`, '_blank')}
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
