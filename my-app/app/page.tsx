/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */

"use client";

// IMP START - Quick Start
import { CHAIN_NAMESPACES, IAdapter, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { getDefaultExternalAdapters } from "@web3auth/default-evm-adapter";
import { Web3Auth, Web3AuthOptions } from "@web3auth/modal";
// IMP END - Quick Start
import { useEffect, useState } from "react";
import Header from "@/components/header"
import Hero from "@/components/hero"
// import HeroSection from "@/components/blocks/hero-section";
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Link from "next/link";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;