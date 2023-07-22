"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { GitHubRelease } from "@/types/nightly"

export function SiteFooter() {
  const { data } = useQuery<GitHubRelease>(["nightlyData"], async () => {
    const { data } = await axios.get(
      "https://api.github.com/repos/yimmenu/yimmenu/releases/tags/nightly"
    )

    return data as GitHubRelease
  })

  const date = data?.assets ? data?.assets[0]?.updated_at : data?.published_at

  function getRelativeTime(value: number, unit: Intl.RelativeTimeFormatUnit) {
    return new Intl.RelativeTimeFormat("en", {
      style: "long",
    }).format(value, unit)
  }

  function formatRelativeTime(date: string | undefined) {
    if (!date) {
      return "Unknown" // Handle the case when the date is not available
    }

    const now = new Date()
    const then = new Date(date)

    if (isNaN(then.getTime())) {
      return "Invalid Date" // Handle the case when the date string is invalid
    }

    const diff = now.getTime() - then.getTime()

    const seconds = Math.floor(diff / 1000)
    if (seconds < 60) return getRelativeTime(-seconds, "second")

    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return getRelativeTime(-minutes, "minute")

    const hours = Math.floor(minutes / 60)
    if (hours < 24) return getRelativeTime(-hours, "hour")

    const days = Math.floor(hours / 24)
    if (days < 7) return getRelativeTime(-days, "day")

    const weeks = Math.floor(days / 7)
    if (weeks < 4) return getRelativeTime(-weeks, "week")

    const months = Math.floor(weeks / 4)
    if (months < 12) return getRelativeTime(-months, "month")

    const years = Math.floor(months / 12)
    return getRelativeTime(-years, "year")
  }

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-center py-8">
        <div className="flex max-w-3xl flex-col items-center text-justify">
          <span>
            YimMenu is a hobby project made by{" "}
            <a
              href=""
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              a community of independent developers
            </a>{" "}
            in their free time.
          </span>
          <div className="mt-2">
            <span className="text-sm text-gray-500">
              GRAND THEFT AUTO and GRAND THEFT AUTO V FIVE are trademarks of
              Take-Two Interactive Software, Inc. We are not affiliated with,
              authorized by, sponsored by, or otherwise approved by Take-Two
              Interactive Software, Inc.
            </span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-500">
              Last{" "}
              {data?.assets ? (
                <a
                  href={data?.assets[0]?.browser_download_url}
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Nightly
                </a>
              ) : (
                "build"
              )}{" "}
              Build: {formatRelativeTime(date)}
            </span>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} YimMenu</span>
          <span className="mx-1">&middot;</span>
          <span>Created by</span>
          <a
            href="https://github.com/Yimura"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-gray-600 hover:text-gray-700"
          >
            <span>Yimura</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
