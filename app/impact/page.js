"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ImpactPage() {
  return (
    <>
      <Header />

      <main className="pt-32">
        <section className="px-gutter max-w-container-max mx-auto mb-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Our Impact: Building Dignified Connections.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
                Through our integrated programs in climate action, nutrition, education, and healthcare, we create sustainable change that transforms communities. Every initiative is designed to empower individuals and build lasting dignity for generations to come.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg transition-all flex items-center gap-2"
                  href="/programs"
                >
                  Explore Our Programs <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="/annual-report" className="border-2 border-outline text-on-surface px-8 py-4 rounded-full font-label-md text-label-md hover:bg-surface-container-low transition-all inline-block">
                  View Annual Report
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                alt="Community members working together on sustainable development project"
                className="rounded-[24px] shadow-xl w-full h-[500px] object-cover"
                src="https://images.unsplash.com/vector-1739799629595-6612d298b2f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltcGFjdCUyMG9mJTIwbmdvfGVufDB8fDB8fHww"
                width={600}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/wA=="
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest py-xl">
          <div className="px-gutter max-w-container-max mx-auto">
            <div className="text-center mb-lg">
              <span className="bg-tertiary/10 text-tertiary px-4 py-1 rounded-full font-label-md text-label-md mb-4 inline-block">Global Reach</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Measurable Change in Real Time</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 hover:scale-[1.02] transition-transform shadow-sm">
                <p className="text-display-lg font-display-lg text-on-surface mb-2">2.5M</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Trees planted through climate action initiatives.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 hover:scale-[1.02] transition-transform shadow-sm">
                <p className="text-display-lg font-display-lg text-on-surface mb-2">1.8M</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Nutritious meals served to children daily.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 hover:scale-[1.02] transition-transform shadow-sm">
                <p className="text-display-lg font-display-lg text-on-surface mb-2">125k</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Students educated through our literacy programs.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 hover:scale-[1.02] transition-transform shadow-sm">
                <p className="text-display-lg font-display-lg text-on-surface mb-2">450k</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Healthcare consultations provided annually.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl px-gutter max-w-container-max mx-auto overflow-hidden">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg text-center">Our Journey of Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface border border-outline-variant p-8 rounded-xl">
              <span className="text-primary font-bold text-headline-sm mb-2 block">2018</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Climate Action Begins</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">First reforestation project launched with community volunteers.</p>
            </div>
            <div className="bg-surface border border-outline-variant p-8 rounded-xl">
              <span className="text-primary font-bold text-headline-sm mb-2 block">2020</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Nutrition Expansion</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">School meal programs established across 50 communities.</p>
            </div>
            <div className="bg-surface border border-outline-variant p-8 rounded-xl">
              <span className="text-primary font-bold text-headline-sm mb-2 block">2022</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Education & Health Growth</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">100 schools built and mobile clinics launched.</p>
            </div>
            <div className="bg-primary-container border border-primary p-8 rounded-xl shadow-lg">
              <span className="text-on-primary-container font-bold text-headline-sm mb-2 block">Present</span>
              <h3 className="font-headline-sm text-headline-sm text-on-primary-container mb-4">Integrated Impact</h3>
              <p className="font-body-md text-body-md text-on-primary-container">Active in 24 countries with climate, nutrition, education, and health programs.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
