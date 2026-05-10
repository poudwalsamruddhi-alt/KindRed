"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const storiesRef = useRef(null);

  const scrollStories = (direction) => {
    if (storiesRef.current) {
      const scrollAmount = 400;
      storiesRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <Header />

      <main className="pt-[56px]">
        <section className="py-xl relative min-h-[751px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              fill
              className="object-cover"
              alt="Community volunteers and children in educational setting"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-gutter w-full max-w-container-max mx-auto py-xl">
            <div className="max-w-5xl">
              <span className="bg-tertiary/10 text-tertiary px-4 py-1 rounded-full font-label-md text-label-md inline-block mb-6">Dignity for all</span>
              <div className="flex flex-row flex-wrap items-start gap-6 mb-10">
                <h1 className="font-display-lg text-display-lg text-on-background m-0">Every child deserves a childhood.</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant m-0 max-w-2xl">
                  Kindred is a community-driven NGO dedicated to breaking the cycle of poverty through dignified healthcare, nutrition, and
                  education.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:scale-95 transition-transform shadow-lg inline-flex items-center justify-center" href="/donate">
                  Donate Now
                </a>
                <a
                  className="border-2 border-outline text-on-surface px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-low transition-all inline-flex items-center justify-center"
                  href="/programs"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-lg border-y border-outline-variant">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-wrap justify-around gap-lg text-center">
              <div className="flex flex-col">
                <span className="font-display-lg text-primary text-4xl mb-2">₹1.2M</span>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest">Funds Raised</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-primary text-4xl mb-2">50k+</span>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest">Children Helped</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-primary text-4xl mb-2">12</span>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest">Active Regions</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-primary text-4xl mb-2">92%</span>
                <span className="font-label-md text-on-surface-variant uppercase tracking-widest">Efficiency Rate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">Our Core Pillars</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mx-auto">
                We tackle systemic issues by focusing on three essential pillars<br />
                of community growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              <div className="bg-[#FFF8E1] p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all group border border-outline-variant/30">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-primary text-3xl">school</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Education</h3>
                <p className="text-on-surface-variant mb-6">
                  Providing school supplies, building local classrooms, and training community educators for sustainable literacy.
                </p>
                <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" href="/education">
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>

              <div className="bg-[#FFF8E1] p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all group border border-outline-variant/30">
                <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:bg-tertiary-container transition-colors">
                  <span className="material-symbols-outlined text-tertiary text-3xl">restaurant</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Nutrition</h3>
                <p className="text-on-surface-variant mb-6">
                  Ensuring access to clean water and balanced daily meals for developing children in rural partnerships.
                </p>
                <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" href="/nutrition">
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>

              <div className="bg-[#FFF8E1] p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all group border border-outline-variant/30">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-secondary text-3xl">medical_services</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Healthcare</h3>
                <p className="text-on-surface-variant mb-6">
                  Mobile clinics and preventative care workshops designed to protect the health of future generations.
                </p>
                <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all" href="/healthcare">
                  Learn more <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-background">Real Stories</h2>
                <p className="text-on-surface-variant">Narratives from the hearts of the communities we serve.</p>
              </div>
              <div className="hidden md:flex gap-4">
                <button 
                  className="p-3 rounded-full border border-outline hover:bg-surface transition-colors"
                  onClick={() => scrollStories('left')}
                  aria-label="Previous stories"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button 
                  className="p-3 rounded-full border border-outline hover:bg-surface transition-colors"
                  onClick={() => scrollStories('right')}
                  aria-label="Next stories"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div ref={storiesRef} className="flex gap-6 pb-8 overflow-x-auto scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
              <div className="story-card bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 flex-shrink-0 w-[400px]">
                <Image
                  width={1024}
                  height={256}
                  className="w-full h-64 object-cover"
                  alt="A young student writing in class"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo28BtSZT9ZeBkNK74Jh3bFbFaY5NGvvWUhyKBaESVFiEDlMtWO9BjLEBb-uAnfxRDTgcnQxQmh0ZQw9nJv3MxcABb6AtIX6HXrgJAVq0UDybnA2XfCXGMItPxo2tsmvj4MwHoM6Pl3Nl4i-3HpZsjmg3APrWu8s3J0QQgf4sAZZXqaaibZiOiFGyflj3QIhsJQFrUThDe7uyJ06zlhH7B4_RSqYNE53XTsoSXrqFeLaMA5jiHDPDpcznPKk1Mx0I-TDv66Qzccuc"
                  sizes="(min-width: 768px) 45vw, 85vw"
                />
                <div className="p-8">
                  <span className="text-tertiary bg-tertiary/10 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Education Impact</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Elena&apos;s First Day</h4>
                  <p className="text-on-surface-variant mb-6">
                    &quot;I never thought I would hold a pencil of my own. Now, I am writing stories that my mother reads at night.&quot;
                  </p>
                  <p className="font-bold text-on-surface">- Elena, Grade 3 Student</p>
                </div>
              </div>

              <div className="story-card bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 flex-shrink-0 w-[400px]">
                <Image
                  width={1024}
                  height={256}
                  className="w-full h-64 object-cover"
                  alt="A local health worker in clinic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwgs7fWPLe5Dy9-P-hNVyQfJvbt0rhMTnDq84PIuqSfH6p3q6F1dcIZMRHbIAUndU-P4RiYTjuSj7wgnBl-uWcchx10Evu_CMmTwChDiTu4M7gT8tesFofiv4gDzsCgLpAen2FfcTKhR4sWD_8ILdS6gU-GcztozzKKjzcVRVL5lwD4daHjUjZwdpMBZw_AiCLwU8Hd1KPmhTw0HbI5O3_Tp0hOAPAbuzBANu6XfnK-afOjn_gWtaenNpJLl0QOLVXo3SsMJhm0vM"
                  sizes="(min-width: 768px) 45vw, 85vw"
                />
                <div className="p-8">
                  <span className="text-secondary bg-secondary/10 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Healthcare Progress</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Healthy Futures</h4>
                  <p className="text-on-surface-variant mb-6">
                    The mobile clinic reaches over 500 families monthly, providing vital vaccinations and maternal care.
                  </p>
                  <p className="font-bold text-on-surface">- Dr. Aris Thorne</p>
                </div>
              </div>

              <div className="story-card bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 flex-shrink-0 w-[400px]">
                <Image
                  width={1024}
                  height={256}
                  className="w-full h-64 object-cover"
                  alt="Community garden harvest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx4mKIEb1CwOFsI6EppolD-Seq89MtwdlN_fGG0s-w2-Vw7zAgu5L3nGoQi8n5i89zCv_6OEkJsbq9DIqXQ7lrIWaraicR1f75KszQBVfUBF1pD6Q6kIF3BugZ31soPjz6cCiYR2TaIT0QRmshzWVz8bIp71jNlQ4IXFPfqpmn7xRpVDBBDi0UOF38VRXOvibUzpfT_yoMLCLkms6pgw40TCzGj-VIzM0Opw8daR3hBrYjjjvixIuSHA8jkrO3rShgwfjS6n6Jxl8"
                  sizes="(min-width: 768px) 45vw, 85vw"
                />
                <div className="p-8">
                  <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Nutrition Sustenance</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Harvesting Hope</h4>
                  <p className="text-on-surface-variant mb-6">
                    Community-led irrigation projects have doubled the crop yield, ensuring no child goes hungry this winter.
                  </p>
                  <p className="font-bold text-on-surface">- Samuel, Lead Farmer</p>
                </div>
              </div>

              <div className="story-card bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 flex-shrink-0 w-[400px]">
                <Image
                  width={1024}
                  height={256}
                  className="w-full h-64 object-cover"
                  alt="Animal rescue volunteer with rescued dog"
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop"
                  sizes="(min-width: 768px) 45vw, 85vw"
                />
                <div className="p-8">
                  <span className="text-tertiary bg-tertiary/10 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Animal Welfare</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Second Chances</h4>
                  <p className="text-on-surface-variant mb-6">
                    &quot;When we rescued Max, he was scared and alone. Today, he brings joy to our family and helps children learn compassion.&quot;
                  </p>
                  <p className="font-bold text-on-surface">- Maria, Animal Care Volunteer</p>
                </div>
              </div>

              <div className="story-card bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 flex-shrink-0 w-[400px]">
                <Image
                  width={1024}
                  height={256}
                  className="w-full h-64 object-cover"
                  alt="Climate action volunteers planting trees"
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
                  sizes="(min-width: 768px) 45vw, 85vw"
                />
                <div className="p-8">
                  <span className="text-tertiary bg-tertiary/10 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Climate Action</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Growing Together</h4>
                  <p className="text-on-surface-variant mb-6">
                    Our reforestation project has planted over 10,000 trees, creating sustainable livelihoods and fighting climate change.
                  </p>
                  <p className="font-bold text-on-surface">- James, Environmental Coordinator</p>
                </div>
              </div>

              <div className="story-card bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 flex-shrink-0 w-[400px]">
                <Image
                  width={1024}
                  height={256}
                  className="w-full h-64 object-cover"
                  alt="Community meeting for social equity program"
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                  sizes="(min-width: 768px) 45vw, 85vw"
                />
                <div className="p-8">
                  <span className="text-tertiary bg-tertiary/10 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">Social Equity</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Voices Heard</h4>
                  <p className="text-on-surface-variant mb-6">
                    &quot;For the first time, our community has a seat at the table. Our children&apos;s futures are finally being considered.&quot;
                  </p>
                  <p className="font-bold text-on-surface">- Aisha, Community Leader</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <div className="bg-primary/5 py-lg px-gutter rounded-[40px] border border-primary/20">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Will you help us reach the next 50,000?</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                Your monthly gift of any size provides consistent support for the programs that change lives. Join the Kindred circle
                today.
              </p>
              <a className="bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl inline-flex items-center justify-center" href="/donate">
                Donate Now
              </a>
              <p className="mt-6 text-on-surface-variant text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                100% of your donation goes directly to the field.
              </p>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary-container/10 rounded-full blur-3xl"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
