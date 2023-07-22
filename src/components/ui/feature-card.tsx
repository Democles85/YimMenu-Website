import React from "react"

import { cn } from "@lib/utils"

const FeatureCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) =>
  React.createElement(
    "div",
    Object.assign(
      {
        ref: ref,
        className: cn(
          "rounded-md border border-[#1d283a] bg-[#1d283a]/30 p-[2rem]",
          className
        ),
      },
      props
    )
  )
)
FeatureCard.displayName = "FeatureCard"

const FeatureCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) =>
  React.createElement(
    "h3",
    Object.assign(
      {
        ref: ref,
        className: cn(
          "flex items-center gap-2 text-2xl font-[450] leading-none tracking-tight",
          className
        ),
      },
      props
    )
  )
)
FeatureCardTitle.displayName = "FeatureCardTitle"

export { FeatureCard, FeatureCardTitle }
