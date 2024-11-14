import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoGraph } from "react-icons/go";
import { FaDatabase } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { SiCodeblocks } from "react-icons/si";

export const HoverEffect = ({ items = [], className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <section className="py-10 bg-[#6D9672]">
      <h1 className="md:text-4xl text-xl  text-black text-center text-wrap break-words  font-bold relative z-20">
        Challenges faced by the <br />
        business teams today
      </h1>
      <p className="text-center text-xl mx-14 mt-5  font-semibold relative z-20">
        Many businesses struggle to harness the full potential of Quality due to
        outdated frameworks, insufficient comparative analysis, biased audits,
        and a limited understanding of Quality`s diverse applications.
      </p>
      <div className={cn("md:flex md:flex-row   py-10", className)}>
        {items.map((item, idx) => (
          <Link
            to={item?.link} // Fixed the prop to 'to' instead of 'href'
            key={item?.link}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="absolute top-0 right-52 ">
                {idx === 0 && <GoGraph size={30} color="F87171" />}
                {idx === 1 && <FaDatabase size={30} color="green" />}
                {idx === 2 && <FaRegStarHalfStroke size={30} color="blue" />}
                {idx === 3 && <SiCodeblocks size={30} color="violet" />}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div

      className={cn(
        "rounded-2xl h-full w-72 mx-auto p-4   overflow-hidden bg-slate-200 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
