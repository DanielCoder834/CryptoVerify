import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              CryptoLTV
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              © 2025 Crypto LTV. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
