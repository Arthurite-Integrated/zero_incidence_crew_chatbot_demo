import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Zero Incidence Crew Logo" width={180} height={60} className="h-12 w-auto" />
          <div className="ml-3">
            <div className="text-sm font-semibold tracking-wider">ZERO INCIDENCE</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/shop" className="text-white hover:text-yellow-400 transition-colors font-medium">
            SHOP
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-400 transition-colors font-medium">
            ABOUT US
          </Link>
          <Link href="/contacts" className="text-white hover:text-yellow-400 transition-colors font-medium">
            CONTACTS
          </Link>
          <Link
            href="/cart"
            className="flex items-center text-white hover:text-yellow-400 transition-colors font-medium"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            SHOPPING BAG (0)
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-100px)] px-6 lg:px-12">
        <div className="flex-1 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
            Safety First
            <br />
            Safety Always
          </h1>
          <Button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 text-lg font-medium" size="lg">
            Shop now
          </Button>
        </div>

        <div className="flex-1 max-w-lg">
          <Image
            src="/hero-workers.avif"
            alt="Two construction workers wearing safety equipment - yellow hard hats and high-visibility vests"
            width={500}
            height={600}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </main>

      {/* Bottom Section */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-light mb-4">Invest in yourself</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Your safety is our priority. Discover our comprehensive range of professional safety equipment designed to
            protect you in every work environment. From construction sites to industrial facilities, we provide the gear
            you need to stay safe and productive.
          </p>
        </div>
      </section>
    </div>
  )
}
