"use client"
import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Benefits from "./components/Benefits/Benefits";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQs/FAQ";
import Footer from "./components/Footer/Footer";
import Sales from "./components/Sales";

import { use, useRef } from "react";

export default function Home() {
  // const salesRef = useRef(null); // Create the ref here


  return (
    <div>

      <Hero  />
      <Features />
      <Benefits />
      <Testimonials />
      <Sales  />
      <Footer />

    </div>
  );
}
