import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-purple-600 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Leverage Your Crypto?</h2>
        <p className="text-xl mb-8">Join thousands of users who trust Horizon for their financial needs.</p>
        <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
          <Link href="/sign-up">Create Your Account</Link>
        </Button>
      </div>
    </section>
  )
}

