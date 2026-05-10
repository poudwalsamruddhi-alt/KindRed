"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StoriesPage() {
  return (
    <>
      <Header />

      <main className="pt-[56px]">
        <section className="py-xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16">
              <h1 className="font-display-lg text-display-lg text-on-background mb-6">Real Stories</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                Narratives from the hearts of the communities we serve. These stories represent the real impact of your support and the lives transformed through our programs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-lg transition-all duration-300">
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
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Elena&apos;s First Day</h3>
                  <p className="text-on-surface-variant mb-6">
                    &quot;I never thought I would hold a pencil of my own. Now, I am writing stories that my mother reads at night.&quot;
                  </p>
                  <p className="font-bold text-on-surface mb-4">- Elena, Grade 3 Student</p>
                  <Link href="/education" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more about Education <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-lg transition-all duration-300">
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
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Healthy Futures</h3>
                  <p className="text-on-surface-variant mb-6">
                    The mobile clinic reaches over 500 families monthly, providing vital vaccinations and maternal care.
                  </p>
                  <p className="font-bold text-on-surface mb-4">- Dr. Aris Thorne</p>
                  <Link href="/health" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more about Health <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-lg transition-all duration-300">
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
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Harvesting Hope</h3>
                  <p className="text-on-surface-variant mb-6">
                    Community-led irrigation projects have doubled the crop yield, ensuring no child goes hungry this winter.
                  </p>
                  <p className="font-bold text-on-surface mb-4">- Samuel, Lead Farmer</p>
                  <Link href="/nutrition" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more about Nutrition <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-lg transition-all duration-300">
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
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Second Chances</h3>
                  <p className="text-on-surface-variant mb-6">
                    &quot;When we rescued Max, he was scared and alone. Today, he brings joy to our family and helps children learn compassion.&quot;
                  </p>
                  <p className="font-bold text-on-surface mb-4">- Maria, Animal Care Volunteer</p>
                  <Link href="/animal-welfare" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more about Animal Welfare <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-lg transition-all duration-300">
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
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Growing Together</h3>
                  <p className="text-on-surface-variant mb-6">
                    Our reforestation project has planted over 10,000 trees, creating sustainable livelihoods and fighting climate change.
                  </p>
                  <p className="font-bold text-on-surface mb-4">- James, Environmental Coordinator</p>
                  <Link href="/climate" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more about Climate Action <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-lg transition-all duration-300">
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
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Voices Heard</h3>
                  <p className="text-on-surface-variant mb-6">
                    &quot;For the first time, our community has a seat at the table. Our children&apos;s futures are finally being considered.&quot;
                  </p>
                  <p className="font-bold text-on-surface mb-4">- Aisha, Community Leader</p>
                  <Link href="/social-equity" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
                    Learn more about Social Equity <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-xl bg-surface relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <div className="bg-primary/5 py-lg px-gutter rounded-[40px] border border-primary/20">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Share Your Story</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                Every story matters. If you&apos;ve been impacted by our programs or want to share your experience, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a className="bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl inline-flex items-center justify-center" href="/contact">
                  Share Your Story
                </a>
                <a className="border-2 border-primary text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-primary hover:text-on-primary transition-all inline-flex items-center justify-center" href="/donate">
                  Support More Stories
                </a>
              </div>
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
