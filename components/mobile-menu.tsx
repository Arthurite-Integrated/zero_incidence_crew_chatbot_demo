"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingBag } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-gray-800">
        <nav className="flex flex-col space-y-6 mt-8">
          <Link
            href="/shop"
            className="text-white hover:text-yellow-400 transition-colors font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            SHOP
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-yellow-400 transition-colors font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            ABOUT US
          </Link>
          <Link
            href="/contacts"
            className="text-white hover:text-yellow-400 transition-colors font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            CONTACTS
          </Link>
          <Link
            href="/cart"
            className="flex items-center text-white hover:text-yellow-400 transition-colors font-medium text-lg"
            onClick={() => setOpen(false)}
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            SHOPPING BAG (0)
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
