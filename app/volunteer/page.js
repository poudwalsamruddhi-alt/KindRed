"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VolunteerPageClient from "./VolunteerPageClient";

export default function VolunteerPage() {
  return (
    <>
      <Header />

      <main className="pt-[88px]">
        <VolunteerPageClient />
      </main>
      <Footer />
    </>
  );
}
