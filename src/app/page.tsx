"use client"

import Image from "next/image"
import Link from "next/link"
import { Tokens } from "@/.mirrorful/theme"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { siteConfig } from "@config/site"
import { Heading } from "@ui/heading"
import { Skeleton } from "@ui/skeleton"
import { StageLight } from "@ui/stage-light"
import { Icons } from "@components/icons"
import { buttonVariants } from "@components/ui/button"

interface GameData {
  game: {
    online: string
    build: string
  }
}

export default function IndexPage() {
  const { data, isError, isLoading } = useQuery<GameData>(
    ["gameData"],
    async () => {
      const { data } = await axios.get<GameData>(
        "https://raw.githubusercontent.com/YimMenu/YimMenu/master/metadata.json"
      )
      return data as GameData
    }
  )

  return (
    <>
      <section className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col items-center justify-center">
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-10 px-4 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                <span className="block xl:inline">
                  <h2 className="text-6xl font-[450] tracking-tight">
                    {siteConfig.name}
                  </h2>
                </span>
              </h1>
              <div className="max-w-xl text-justify text-base font-normal tracking-tight sm:text-base md:text-base">
                <span className="block xl:inline">
                  A mod menu base for Grand Theft Auto V. Strictly for
                  educational purposes. YimMenu is originally based of off{" "}
                  <a
                    href="https://github.com/Pocakking/BigBaseV2"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    BigBaseV2
                  </a>{" "}
                  which was an amazing base at the time but nowadays is a bit
                  dated. So here I am with an up-to-date menu focusing on
                  protecting the user from toxic modders.
                </span>
              </div>
              <div className="mt-4 flex rounded-md border-[1px] border-[#10B981] bg-[#10B98120] p-2">
                <Icons.greenTick className="h-5 w-5" />
                <div className="ml-[0.25rem]">
                  {isLoading ? (
                    <Skeleton className="h-full w-[260px]" />
                  ) : (
                    <span>
                      YimMenu is working on GTA V v{data?.game.build} (GTA
                      Online v{data?.game.online})
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/yim_menu.png"
                width={500}
                height={500}
                alt="YimMenu"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <StageLight />
        <Heading>Features</Heading>
      </section>
    </>
  )
}
