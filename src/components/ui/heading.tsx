import { motion } from "framer-motion"

import { cn } from "@lib/utils"

export function Heading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className="relative z-10 flex flex-col justify-center">
      <motion.h2
        style={{
          backgroundImage:
            "radial-gradient(40% 70% at 50% 100%, rgba(255, 255, 255, 0.4), rgb(255, 255, 255))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fill: "transparent",
        }}
        className={cn(
          "mb-6 mt-[3.25rem] text-6xl font-[450] tracking-tight drop-shadow-md",
          className
        )}
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          amount: 0.9,
          margin: "20% 0px -5% 0px",
        }}
      >
        {props.children}
      </motion.h2>
    </div>
  )
}
