"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AnnualReportPage() {
  
  return (
    <>
      <Header />

      <main className="pt-[88px] max-w-container-max mx-auto px-gutter py-4 sm:py-6 md:py-8 lg:py-xl">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <section className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-xl">
            <h1 className="font-display-lg text-display-lg sm:text-display-xl md:text-display-2xl lg:text-display-3xl text-on-surface mb-4 sm:mb-6 md:mb-8">Annual Report 2026</h1>
            <p className="font-body-md text-body-md sm:font-body-lg text-body-lg md:text-body-xl text-on-surface-variant max-w-2xl mx-auto px-4">
              A year of transformative impact, community empowerment, and sustainable change across our global programs.
            </p>
          </section>

          {/* Key Highlights */}
          <section className="bg-surface-container-low rounded-2xl p-4 sm:p-6 md:p-8 lg:p-xl mb-8 sm:mb-10 md:mb-12 lg:mb-xl">
            <h2 className="font-headline-md text-headline-md sm:font-headline-lg text-headline-lg md:font-headline-xl text-headline-xl text-on-surface mb-4 sm:mb-6 md:mb-8 text-center">Year in Review</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary block mb-2 sm:mb-3 md:mb-4">2.5M+</span>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant">Lives Impacted</p>
              </div>
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-tertiary block mb-2 sm:mb-3 md:mb-4">150+</span>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant">Communities Served</p>
              </div>
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary block mb-2 sm:mb-3 md:mb-4">95%</span>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant">Program Efficiency</p>
              </div>
              <div className="text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary block mb-2 sm:mb-3 md:mb-4">₹45M</span>
                <p className="text-sm sm:text-base md:text-lg text-on-surface-variant">Total Impact</p>
              </div>
            </div>
          </section>

          {/* Program Impact */}
          <section className="mb-8 sm:mb-10 md:mb-12 lg:mb-xl">
            <h2 className="font-headline-lg text-headline-lg sm:font-headline-xl text-headline-xl text-on-surface mb-6 sm:mb-8 md:mb-10">Program Impact Stories</h2>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Climate Action */}
              <div className="bg-surface rounded-2xl p-4 sm:p-6 md:p-8 border border-outline-variant/20">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-tertiary/10 p-3 sm:p-4 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-xl sm:text-2xl md:text-3xl">eco</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-md text-headline-md sm:font-headline-lg text-headline-lg text-on-surface mb-2 sm:mb-3">Climate Action Initiative</h3>
                    <p className="font-body-sm text-body-sm sm:font-body-md text-body-md md:text-base text-on-surface-variant mb-4 sm:mb-6">
                      Planted 2.5 million trees across 45 communities, reducing carbon footprint by 15% and creating sustainable livelihoods for 50,000+ families.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center">
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-tertiary block mb-1 sm:mb-2">2.5M</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Trees Planted</p>
                      </div>
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-tertiary block mb-1 sm:mb-2">45</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Communities</p>
                      </div>
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-tertiary block mb-1 sm:mb-2">15%</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Carbon Reduction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nutrition Program */}
              <div className="bg-surface rounded-2xl p-4 sm:p-6 md:p-8 border border-outline-variant/20">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl md:text-3xl">restaurant</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-md text-headline-md sm:font-headline-lg text-headline-lg text-on-surface mb-2 sm:mb-3">Nutrition Program</h3>
                    <p className="font-body-sm text-body-sm sm:font-body-md text-body-md md:text-base text-on-surface-variant mb-4 sm:mb-6">
                      Provided 1.8 million nutritious meals, established 380 water points, and supported 64,000 children with essential nutrition and clean water access.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center">
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary block mb-1 sm:mb-2">1.8M</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Meals Served</p>
                      </div>
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary block mb-1 sm:mb-2">380</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Water Points</p>
                      </div>
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary block mb-1 sm:mb-2">64K</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Children Supported</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Initiative */}
              <div className="bg-surface rounded-2xl p-4 sm:p-6 md:p-8 border border-outline-variant/20">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-secondary/10 p-3 sm:p-4 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl md:text-3xl">school</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline-md text-headline-md sm:font-headline-lg text-headline-lg text-on-surface mb-2 sm:mb-3">Education Initiative</h3>
                    <p className="font-body-sm text-body-sm sm:font-body-md text-body-md md:text-base text-on-surface-variant mb-4 sm:mb-6">
                      Distributed 45,000 books, built/restored 112 schools, and trained 8,200 educators, creating educational opportunities for underserved communities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center">
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary block mb-1 sm:mb-2">45K</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Books Distributed</p>
                      </div>
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary block mb-1 sm:mb-2">112</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Schools Built</p>
                      </div>
                      <div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary block mb-1 sm:mb-2">8.2K</span>
                        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">Educators Trained</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Financial Overview */}
          <section className="bg-surface-container-low rounded-2xl p-4 sm:p-6 md:p-8 lg:p-xl mb-8 sm:mb-10 md:mb-12 lg:mb-xl">
            <h2 className="font-headline-lg text-headline-lg sm:font-headline-xl text-headline-xl text-on-surface mb-6 sm:mb-8 md:mb-10">Financial Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <div>
                <h3 className="font-headline-sm text-headline-sm sm:font-headline-md text-headline-md text-on-surface mb-4 sm:mb-6">Revenue Sources</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm sm:text-base text-on-surface-variant">Individual Donations</span>
                      <span className="text-sm sm:text-base font-bold text-on-surface">65%</span>
                    </div>
                    <div className="h-3 sm:h-4 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[65%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm sm:text-base text-on-surface-variant">Corporate Partners</span>
                      <span className="text-sm sm:text-base font-bold text-on-surface">25%</span>
                    </div>
                    <div className="h-3 sm:h-4 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary w-[25%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm sm:text-base text-on-surface-variant">Grants</span>
                      <span className="text-sm sm:text-base font-bold text-on-surface">10%</span>
                    </div>
                    <div className="h-3 sm:h-4 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[10%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm sm:font-headline-md text-headline-md text-on-surface mb-4 sm:mb-6">Program Allocation</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm sm:text-base text-on-surface-variant">Program Services</span>
                      <span className="text-sm sm:text-base font-bold text-on-surface">92%</span>
                    </div>
                    <div className="h-3 sm:h-4 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[92%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm sm:text-base text-on-surface-variant">Administrative</span>
                      <span className="text-sm sm:text-base font-bold text-on-surface">8%</span>
                    </div>
                    <div className="h-3 sm:h-4 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-outline w-[8%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-8 sm:mb-10 md:mb-12 lg:mb-xl">
            <h2 className="font-headline-lg text-headline-lg sm:font-headline-xl text-headline-xl text-on-surface mb-6 sm:mb-8 md:mb-10">Voices of Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-surface rounded-xl p-4 sm:p-6 border border-outline-variant/20">
                <p className="font-body-sm text-body-sm sm:font-body-md text-body-md md:text-base text-on-surface-italic mb-4 sm:mb-6">
                  "Kindred's nutrition program saved my family. My children now have regular meals and I've learned sustainable farming practices that feed our entire village."
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm sm:text-base">person</span>
                  </div>
                  <div>
                    <p className="font-body-sm text-body-sm sm:text-base font-bold text-on-surface">Maria Rodriguez</p>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Community Leader, Rural Village</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-xl p-4 sm:p-6 border border-outline-variant/20">
                <p className="font-body-sm text-body-sm sm:font-body-md text-body-md md:text-base text-on-surface-italic mb-4 sm:mb-6">
                  "The education initiative transformed my daughter's future. She's now the first in our family to attend university, thanks to Kindred's support."
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-tertiary/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-sm sm:text-base">person</span>
                  </div>
                  <div>
                    <p className="font-body-sm text-body-sm sm:text-base font-bold text-on-surface">James Chen</p>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Parent, Urban Community</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Goals */}
          <section className="bg-primary-container/10 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-xl border border-primary/20 mb-8 sm:mb-10 md:mb-12 lg:mb-xl">
            <h2 className="font-headline-lg text-headline-lg sm:font-headline-xl text-headline-xl text-primary mb-6 sm:mb-8 md:mb-10 text-center">Looking Ahead: 2025 Goals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6 block">trending_up</span>
                <h3 className="font-headline-sm text-headline-sm sm:font-headline-md text-headline-md text-primary mb-2 sm:mb-3">Expand to 200 Communities</h3>
                <p className="text-sm sm:text-base text-on-surface-variant">Reach 50% more underserved areas with our integrated programs</p>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6 block">groups</span>
                <h3 className="font-headline-sm text-headline-sm sm:font-headline-md text-headline-md text-primary mb-2 sm:mb-3">5 Million Lives</h3>
                <p className="text-sm sm:text-base text-on-surface-variant">Double our impact to reach 5 million people by year end</p>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6 block">volunteer_activism</span>
                <h3 className="font-headline-sm text-headline-sm sm:font-headline-md text-headline-md text-primary mb-2 sm:mb-3">10,000 Volunteers</h3>
                <p className="text-sm sm:text-base text-on-surface-variant">Build a global network of community changemakers</p>
              </div>
            </div>
          </section>

                  </div>
      </main>
      <Footer />
    </>
  );
}
