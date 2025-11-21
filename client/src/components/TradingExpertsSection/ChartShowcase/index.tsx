import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { showcaseContainerStyles, imageStyles, imageWrapperStyle } from "./styles";

export default function ChartShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth entrance
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Box sx={showcaseContainerStyles}>
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          whileHover={{
            scale: 1.08,
            rotateZ: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          style={{
            ...imageWrapperStyle,
            perspective: "1000px",
          }}
        >
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 10px 40px rgba(0, 229, 255, 0.3))",
                "drop-shadow(0 15px 50px rgba(0, 229, 255, 0.5))",
                "drop-shadow(0 20px 60px rgba(105, 255, 255, 0.4))",
                "drop-shadow(0 15px 50px rgba(0, 229, 255, 0.5))",
                "drop-shadow(0 10px 40px rgba(0, 229, 255, 0.3))",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              filter: "drop-shadow(0 25px 70px rgba(0, 229, 255, 0.7))",
            }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component={motion.img}
              src="/assets/images/charts.svg"
              alt="Trading Charts"
              sx={imageStyles}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            />
          </motion.div>
        </motion.div>

        {/* Floating particles effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "rgba(0, 229, 255, 0.6)",
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              x: [0, 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glow rings */}
        <motion.div
          style={{
            position: "absolute",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
            border: "2px solid rgba(0, 229, 255, 0.1)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          style={{
            position: "absolute",
            width: "150%",
            height: "150%",
            top: "-25%",
            left: "-25%",
            border: "1px solid rgba(105, 255, 255, 0.15)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </Box>
    </motion.div>
  );
}
