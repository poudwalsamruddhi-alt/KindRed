"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NutritionPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px]">
        <section className="relative h-[530px] min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              fill
              alt="Volunteers serving nutritious meals to children in community kitchen"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 to-transparent"></div>
          </div>
          <div className="relative w-full max-w-container-max mx-auto px-gutter">
            <div className="max-w-2xl">
              <span className="inline-block bg-tertiary/10 text-tertiary px-md py-xs rounded-full font-label-md text-label-md mb-md">
                Nutrition Pillar
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-md">Nourish Every Child Initiative</h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-lg">
                Fighting hunger with community kitchens, school meals, and clean water access so every child can learn, grow, and thrive.
              </p>
              <a
                className="inline-flex items-center gap-sm bg-primary-container text-on-primary-container px-lg py-md rounded-full font-label-md text-label-md font-bold hover:scale-95 transition-all"
                href="#donate"
              >
                Support Nutrition
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="impact-card p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md">restaurant</span>
                <h3 className="font-display-lg text-display-lg text-primary mb-xs">1.2M+</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Meals Served</p>
              </div>
              <div className="impact-card p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md">water_drop</span>
                <h3 className="font-display-lg text-display-lg text-primary mb-xs">380</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Water Points Installed</p>
              </div>
              <div className="impact-card p-lg rounded-xl flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary text-[48px] mb-md">favorite</span>
                <h3 className="font-display-lg text-display-lg text-primary mb-xs">64,000</h3>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Children Supported</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col lg:flex-row gap-xl items-center">
              <div className="w-full lg:w-1/2">
                <Image
                  width={1200}
                  height={600}
                  alt="Community nutrition support"
                  className="w-full h-[600px] object-cover rounded-[24px] shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx4mKIEb1CwOFsI6EppolD-Seq89MtwdlN_fGG0s-w2-Vw7zAgu5L3nGoQi8n5i89zCv_6OEkJsbq9DIqXQ7lrIWaraicR1f75KszQBVfUBF1pD6Q6kIF3BugZ31soPjz6cCiYR2TaIT0QRmshzWVz8bIp71jNlQ4IXFPfqpmn7xRpVDBBDi0UOF38VRXOvibUzpfT_yoMLCLkms6pgw40TCzGj-VIzM0Opw8daR3hBrYjjjvixIuSHA8jkrO3rShgwfjS6n6Jxl8"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <span className="font-label-md text-primary uppercase tracking-widest mb-sm block">A Family Restored</span>
                <h2 className="font-headline-lg text-headline-lg mb-md text-on-surface leading-tight">Mila&apos;s Path to Healthy Growth</h2>
                <div className="space-y-md font-body-md text-on-surface-variant">
                  <p>
                    In Mila&apos;s village, families once skipped meals during dry seasons. Through Kindred&apos;s community kitchen and food
                    cooperative, parents now access nutritious staples year-round.
                  </p>
                  <p>
                    With school meals and clean water, Mila&apos;s attendance improved and her energy returned. Her story reflects how
                    nutrition unlocks learning, health, and hope.
                  </p>
                </div>
                <div className="mt-lg p-md border-l-4 border-primary bg-surface-container-low rounded-r-xl">
                  <p className="font-body-md text-on-surface">
                    <strong>The Goal:</strong> We are raising ₹60,000 to launch 25 school meal hubs and 15 clean-water stations in
                    underserved communities.
                  </p>
                  <div className="mt-md h-3 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container" style={{ width: "58%" }}></div>
                  </div>
                  <p className="text-label-md mt-xs text-on-surface-variant font-bold">₹34,800 raised of ₹60,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-on-background text-white relative overflow-hidden" id="donate">
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <h2 className="font-display-lg text-display-lg mb-md">Fuel a Child&apos;s Tomorrow</h2>
            <p className="font-body-lg text-body-lg mb-xl max-w-2xl mx-auto opacity-90">
              Your gift to the Nutrition Pillar directly funds school meals, fortified food kits, and local nutrition training.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl max-w-4xl mx-auto">
              <button className="p-lg border-2 border-white/20 rounded-xl hover:border-primary-container hover:bg-white/5 transition-all">
                <span className="block font-headline-md text-headline-md mb-xs">₹200</span>
                <span className="block font-label-md opacity-70">Feeds one child for a month</span>
              </button>
              <button className="p-lg border-2 border-primary-container bg-primary-container text-on-primary-container rounded-xl hover:scale-105 transition-all">
                <span className="block font-headline-md text-headline-md mb-xs">₹750</span>
                <span className="block font-label-md font-bold">Supports a family nutrition kit</span>
              </button>
              <button className="p-lg border-2 border-white/20 rounded-xl hover:border-primary-container hover:bg-white/5 transition-all">
                <span className="block font-headline-md text-headline-md mb-xs">₹3,000</span>
                <span className="block font-label-md opacity-70">Funds a community meal day</span>
              </button>
            </div>
            <a className="bg-primary-container text-on-primary-container px-xl py-md rounded-full font-label-md text-label-md font-bold uppercase tracking-widest hover:scale-95 transition-all inline-block" href="/donate">
              Complete Donation
            </a>
            
            <div className="mt-xl">
              <h3 className="font-headline-sm text-headline-sm text-on-surface text-center mb-md">Share This Program</h3>
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Support nutrition programs with Kindred! Help us provide healthy meals and nutrition education to communities in need.&url=${window.location.href}`, '_blank')}
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
