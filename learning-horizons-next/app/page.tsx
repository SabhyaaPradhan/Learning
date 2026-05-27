"use client";

import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BooksSection from "@/components/BooksSection";
import StatsSection from "@/components/StatsSection";
import IndiaMapSection from "@/components/IndiaMapSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BooksSection />
        <StatsSection />
        <IndiaMapSection />
        <TimelineSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
