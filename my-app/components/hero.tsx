import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Unlock the Value of Your Crypto Assets
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Get instant loans using your cryptocurrency as collateral. No credit checks, low interest rates, and
            flexible terms.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

