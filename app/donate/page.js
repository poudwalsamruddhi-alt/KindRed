import Header from "../components/Header";
import Footer from "../components/Footer";
import DonateForm from "./DonateForm";
import Image from "next/image";
import { Suspense } from "react";

export const metadata = {
  title: "Donate | Kindred Impact",
};

export default function DonatePage() {
  return (
    <>
      <Header />

      <main className="pt-[56px] max-w-container-max mx-auto px-gutter">
        <div className="py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Left Column - Hero Image and Impact Info */}
          <div className="space-y-xl">
            {/* Hero Image Section */}
            <section className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20">
              <Image
                alt="Community volunteers helping people in need"
                className="w-full h-[300px] md:h-[400px] object-cover"
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1200}
                height={500}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center p-lg md:p-xl">
                <div className="text-center max-w-4xl">
                  <h1 className="font-display-lg text-display-lg md:text-display-xl text-white mb-4 md:mb-6 leading-tight">
                    Your generosity creates a ripple of change
                  </h1>
                  <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-white/95 max-w-2xl mx-auto leading-relaxed">
                    Every donation transforms lives and builds stronger communities. Join us in making a lasting impact.
                  </p>
                </div>
              </div>
            </section>

            {/* Where Your Money Goes - Redesigned */}
            <section className="bg-surface rounded-2xl p-lg md:p-xl border border-outline-variant/20 shadow-sm">
              <div className="flex items-center gap-sm mb-lg">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">account_balance</span>
                <h2 className="font-headline-sm text-headline-sm md:font-headline-md text-on-surface">Where Your Money Goes</h2>
              </div>
              
              <div className="space-y-lg md:space-y-xl">
                <div className="flex items-start gap-md md:gap-lg">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg md:text-xl">restaurant</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body-sm text-body-sm md:font-body-md md:text-body-md font-bold text-on-surface">Nutrition Programs</span>
                      <span className="bg-primary text-on-primary px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">45%</span>
                    </div>
                    <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-primary rounded-full transition-all" style={{width: "45%"}}></div>
                    </div>
                    <p className="text-xs md:text-sm text-on-surface-variant">Providing meals and nutritional support to communities</p>
                  </div>
                </div>

                <div className="flex items-start gap-md md:gap-lg">
                  <div className="bg-tertiary/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-lg md:text-xl">school</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body-sm text-body-sm md:font-body-md md:text-body-md font-bold text-on-surface">Education & Skills</span>
                      <span className="bg-tertiary text-on-tertiary px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">35%</span>
                    </div>
                    <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-tertiary rounded-full transition-all" style={{width: "35%"}}></div>
                    </div>
                    <p className="text-xs md:text-sm text-on-surface-variant">Empowering students and vocational training</p>
                  </div>
                </div>

                <div className="flex items-start gap-md md:gap-lg">
                  <div className="bg-secondary/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-lg md:text-xl">medical_services</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body-sm text-body-sm md:font-body-md md:text-body-md font-bold text-on-surface">Healthcare Support</span>
                      <span className="bg-secondary text-on-secondary px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">20%</span>
                    </div>
                    <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-secondary rounded-full transition-all" style={{width: "20%"}}></div>
                    </div>
                    <p className="text-xs md:text-sm text-on-surface-variant">Medical care and health services for communities</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Donation Form */}
          <div>
            <Suspense fallback={<div className="p-lg border border-outline-variant rounded-xl">Loading donation form...</div>}>
              <DonateForm />
            </Suspense>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
