import { Tokens } from "@/.mirrorful/theme"
import { motion } from "framer-motion"

export function StageLight() {
  return (
    <div className="relative z-[-1px] flex flex-col justify-center">
      <div
        className="absolute top-[-250px] h-[500px] w-[100vw] self-center"
        style={{
          maskImage:
            "radial-gradient(100% 50% at center center, black, transparent)",
        }}
      >
        <div className="relative flex h-full w-full">
          <motion.div
            className="absolute left-0 h-full w-[50%]"
            initial={{
              background: `conic-gradient(from 90deg at 80% 50%, ${Tokens.colors.purple[100]}, #000000)`,
              opacity: 0.2,
            }}
            whileInView={{
              background: `conic-gradient(from 90deg at 60% 50%, ${Tokens.colors.purple[300]}, #000000)`,
              opacity: 0.8,
            }}
            viewport={{
              amount: 0.9,
              margin: "20% 0px -5% 0px",
            }}
            transition={{
              duration: 0.5,
            }}
          />
          <motion.div
            className="absolute right-0 h-full w-[50%]"
            initial={{
              background: `conic-gradient(from 270deg at 20% 50%, #000000, ${Tokens.colors.purple[100]})`,
              opacity: 0.2,
            }}
            whileInView={{
              background: `conic-gradient(from 270deg at 40% 50%, #000000,  ${Tokens.colors.purple[300]})`,
              opacity: 0.8,
            }}
            viewport={{
              amount: 0.9,
              margin: "20% 0px -5% 0px",
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  )
}
