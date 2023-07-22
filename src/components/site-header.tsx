"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { siteConfig } from "@config/site"
import { cn } from "@lib/utils"
import { buttonVariants } from "@ui/button"
import { Icons } from "@components/icons"
import { MainNav } from "@components/main-nav"
import { ThemeToggle } from "@components/theme-toggle"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-[999] w-full border-b bg-background",
        isScrolled && "bg-background/30 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
