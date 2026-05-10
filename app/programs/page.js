"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProgramsPage() {
 
return (
  <>
    <Header />

    <main className="pt-[56px] max-w-7xl mx-auto px-6">
        <div className="py-xl">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Our Global Programs
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl">
          We partner with local communities to create sustainable impact
          across climate, education, healthcare, and social equity.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        <Link href="/climate" className="border rounded-3xl overflow-hidden p-4 block hover:shadow-lg transition-all">
          <Image
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
            alt="Climate"
            className="w-full h-64 object-cover rounded-2xl"
            width={400}
            height={256}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Climate Action
          </h2>

          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Supporting renewable energy and environmental restoration.
          </p>

          <div className="inline-block mt-4 text-blue-600 text-sm md:text-base">
            Learn More
          </div>
        </Link>

        <Link href="/nutrition" className="border rounded-3xl overflow-hidden p-4 block hover:shadow-lg transition-all">
          <Image
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200&auto=format&fit=crop"
            alt="Nutrition"
            className="w-full h-64 object-cover rounded-2xl"
            width={400}
            height={256}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          <h2 className="text-2xl font-semibold mt-4">
            Nutrition Program
          </h2>

          <p className="text-gray-600 mt-2">
            Helping communities access healthy and sustainable food.
          </p>

          <div className="inline-block mt-4 text-blue-600">
            Learn More
          </div>
        </Link>

        <Link href="/education" className="border rounded-3xl overflow-hidden p-4 block hover:shadow-lg transition-all">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
            alt="Education"
            className="w-full h-64 object-cover rounded-2xl"
            width={400}
            height={256}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          <h2 className="text-2xl font-semibold mt-4">
            Education Initiative
          </h2>

          <p className="text-gray-600 mt-2">
            Providing quality education resources for children worldwide.
          </p>

          <div className="inline-block mt-4 text-blue-600">
            Learn More
          </div>
        </Link>

        <Link href="/animal-welfare" className="border rounded-3xl overflow-hidden p-4 block hover:shadow-lg transition-all">
          <Image
            src="https://images.unsplash.com/photo-1592664858934-40ca080ab56b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Animal Welfare"
            className="w-full h-64 object-cover rounded-2xl"
            width={400}
            height={256}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          <h2 className="text-2xl font-semibold mt-4">
            Animal Welfare
          </h2>

          <p className="text-gray-600 mt-2">
            Protecting and caring for animals through rescue and conservation efforts.
          </p>

          <div className="inline-block mt-4 text-blue-600">
            Learn More
          </div>
        </Link>

        <Link href="/health" className="border rounded-3xl overflow-hidden p-4 block hover:shadow-lg transition-all">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
            alt="Health"
            className="w-full h-64 object-cover rounded-2xl"
            width={400}
            height={256}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          <h2 className="text-2xl font-semibold mt-4">
            Health Program
          </h2>

          <p className="text-gray-600 mt-2">
            Providing healthcare access and medical services to underserved communities.
          </p>

          <div className="inline-block mt-4 text-blue-600">
            Learn More
          </div>
        </Link>

        <Link href="/social-equity" className="border rounded-3xl overflow-hidden p-4 block hover:shadow-lg transition-all">
          <Image
            src="https://images.unsplash.com/vector-1739203267494-c46af83e43b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1wYWN0JTIwb2YlMjBuZ288ZW58MHx8MHx8fDA%3D"
            alt="Social Equity"
            className="w-full h-64 object-cover rounded-2xl"
            width={400}
            height={256}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

          <h2 className="text-2xl font-semibold mt-4">
            Social Equity
          </h2>

          <p className="text-gray-600 mt-2">
            Promoting social justice and equal opportunities for all communities.
          </p>

          <div className="inline-block mt-4 text-blue-600">
            Learn More
          </div>
        </Link>

      </section>

      <section className="mt-16">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 text-blue-600 h-12 w-12 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">psychology</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Not sure which program to choose?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take our quick quiz to find the cause that matches your values and interests.
          </p>
          <Link 
            href="/match-cause"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Take the Quiz <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

              </div>

    </main>

    <Footer />
  </>
);


}