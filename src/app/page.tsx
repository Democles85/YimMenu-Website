"use client"

import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { GameData } from "@/types/data"
import { siteConfig } from "@config/site"
import { Button } from "@ui/button"
import { FeatureCard, FeatureCardTitle } from "@ui/feature-card"
import { Heading } from "@ui/heading"
import { Skeleton } from "@ui/skeleton"
import { StageLight } from "@ui/stage-light"
import { Icons } from "@components/icons"

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
              <h1 className="mb-4 text-center text-3xl font-[450] tracking-tight md:text-4xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <div className="max-w-xl text-justify font-normal tracking-tight ">
                <p className="text-sm md:text-base lg:text-base">
                  A mod menu base for Grand Theft Auto V. Strictly for
                  educational purposes. YimMenu is originally based of off{" "}
                  <a
                    href="https://github.com/Pocakking/BigBaseV2"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    BigBaseV2
                  </a>{" "}
                  which was an amazing base at the time but nowadays is a bit
                  dated. So here I am with an up-to-date menu focusing on
                  protecting the user from toxic modders.
                </p>
              </div>
              <div className="md:text-md my-4 flex items-center rounded-md border-[1px] border-[#10B981] bg-[#10B98120] p-2 text-sm lg:text-lg">
                <Icons.greenTick className="h-5 w-5" />
                <div className="ml-[0.25rem]">
                  {isLoading ? (
                    <Skeleton className="h-[24px] w-[300px] max-w-[360px] rounded-full bg-[#10B981]/30 md:h-[24px] lg:h-[28px]" />
                  ) : (
                    <span>
                      YimMenu is working on v{data?.game.build} ( Online v
                      {data?.game.online})
                    </span>
                  )}
                </div>
              </div>
              <div className="my-1 hidden w-full sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-4">
                <Button className="w-full md:w-auto" variant="default">
                  <a
                    href="
                      https://github.com/YimMenu/YimMenu/releases/download/nightly/YimMenu.dll
                      "
                    rel="noreferrer"
                    className="flex w-full items-center justify-center"
                  >
                    Download <Icons.download className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button className="w-full md:w-auto" variant="outline">
                  <a
                    href="/docs"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center"
                  >
                    Documentation{" "}
                    <Icons.documentation className="ml-2 h-5 w-5" />
                  </a>
                </Button>
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
        <Heading className="text-3xl md:text-4xl lg:text-6xl">Features</Heading>
        <div className="z-[100] max-w-6xl py-[3rem]">
          <div className="grid w-full grid-cols-3 grid-rows-2 gap-4">
            <FeatureCard className="col-span-2">
              <FeatureCardTitle>
                <Icons.shield />
                Protections
              </FeatureCardTitle>
              <div className="mt-4">
                <p className="text-sm md:text-base lg:text-base">
                  Enjoy a stress-free gaming experience knowing you are
                  protected from toxic players.
                </p>
              </div>
            </FeatureCard>
            <FeatureCard className="col-start-3">
              <FeatureCardTitle>
                <Icons.openSource />
                Open Source
              </FeatureCardTitle>
              <div className="mt-4">
                <p className="text-sm md:text-base lg:text-base">
                  Rest assured that your data is safe. YimMenu contains no
                  tracking or malware, but don&apos;t take our word for it,
                  it&apos;s 100% auditable!
                </p>
              </div>
            </FeatureCard>
            <FeatureCard className="row-start-2">
              <FeatureCardTitle>
                <Icons.updated />
                Always Updated
              </FeatureCardTitle>
              <div className="mt-4">
                <p className="text-sm md:text-base lg:text-base">
                  YimMenu is always updated to the latest version of GTA V. This
                  means that you&apos;ll always be able to play with your
                  friends.
                </p>
              </div>
            </FeatureCard>
            <FeatureCard className="col-span-2 row-start-2">
              <FeatureCardTitle>
                <Icons.biohazard />
                Trolling
              </FeatureCardTitle>
              <div className="mt-4">
                <p className="text-sm md:text-base lg:text-base">
                  Trying to prank your friends or teach someone, who tried to
                  crash you unsuccessfully, a lesson? YimMenu includes some
                  lighthearted trolling features!
                </p>
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>
    </>
  )
}
