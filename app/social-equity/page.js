"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function SocialEquityPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px]">
        <section className="relative h-[530px] min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              fill
              alt="Community members working together on social justice initiatives"
              className="object-cover"
              src="https://images.unsplash.com/photo-1680778469988-132441c89c7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent"></div>
          </div>
          <div className="relative w-full max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl">
              <span className="inline-block bg-tertiary/10 text-tertiary px-md py-xs rounded-full font-label-md text-label-md mb-md">
                Social Equity Pillar
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-md">Justice & Inclusion Program</h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-lg">
                Advancing social justice through legal aid, advocacy, and community empowerment initiatives for marginalized groups.
              </p>
              <a
                className="inline-flex items-center gap-sm bg-tertiary text-on-tertiary px-lg py-md rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-all"
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
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Our Social Equity Mission</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                We're dedicated to creating a more just and inclusive society by providing legal aid, advocating for policy changes, and empowering marginalized communities. Our programs focus on equal access to education, healthcare, and economic opportunities.
              </p>
              <div className="space-y-md">
                <div className="flex items-start gap-md">
                  <div className="bg-tertiary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-tertiary">gavel</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Legal Aid Services</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Providing free legal assistance to those who cannot afford representation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="bg-tertiary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-tertiary">campaign</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Advocacy & Policy</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Advocating for systemic changes that promote equity and inclusion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <div className="bg-tertiary/10 p-sm rounded-lg mt-1">
                    <span className="material-symbols-outlined text-tertiary">diversity_3</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Community Empowerment</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Building leadership capacity in marginalized communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-xl rounded-xl">
              <h3 className="font-headline-md text-headline-md text-tertiary mb-lg">Social Equity Impact</h3>
              <div className="space-y-lg">
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Legal Cases Won</span>
                    <span className="font-label-md text-label-md text-tertiary font-bold">850</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-container" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">People Trained</span>
                    <span className="font-label-md text-label-md text-tertiary font-bold">3,500</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-container" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-xs">
                    <span className="font-label-md text-label-md text-on-surface">Communities Served</span>
                    <span className="font-label-md text-label-md text-tertiary font-bold">45</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-container" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-xl">
          <div className="px-gutter max-w-container-max mx-auto">
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Support Our Social Equity Work</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Your donation helps us provide legal aid, advocacy services, and empowerment programs to marginalized communities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-3xl mx-auto">
              <button className="bg-surface border border-outline-variant p-lg rounded-xl hover:border-tertiary hover:scale-105 transition-all text-center group">
                <span className="text-3xl font-bold text-tertiary block mb-sm">₹250</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Supports legal consultation</span>
              </button>
              <button className="bg-tertiary text-on-tertiary p-lg rounded-xl hover:scale-105 transition-all text-center group shadow-lg">
                <span className="text-3xl font-bold block mb-sm">₹500</span>
                <span className="font-label-md text-label-md">Funds advocacy campaign</span>
              </button>
              <button className="bg-surface border border-outline-variant p-lg rounded-xl hover:border-tertiary hover:scale-105 transition-all text-center group">
                <span className="text-3xl font-bold text-tertiary block mb-sm">₹1,000</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Supports training program</span>
              </button>
            </div>
            <div className="text-center mt-lg">
              <a className="bg-tertiary text-on-tertiary px-xl py-md rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-all inline-flex items-center gap-sm" href="/donate">
                Complete Donation
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            
            <div className="mt-xl">
              <h3 className="font-headline-sm text-headline-sm text-on-surface text-center mb-md">Share This Program</h3>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Support social equity with Kindred! Help us promote social justice and equal opportunities for marginalized communities.&url=${window.location.href}`, '_blank')}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-tertiary hover:scale-105 transition-all group"
                  aria-label="Share on Twitter"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary">share</span>
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-tertiary hover:scale-105 transition-all group"
                  aria-label="Share on Facebook"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary">thumb_up</span>
                </button>
                <button 
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="bg-surface border border-outline-variant p-3 rounded-xl hover:border-tertiary hover:scale-105 transition-all group"
                  aria-label="Copy link"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary">link</span>
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
