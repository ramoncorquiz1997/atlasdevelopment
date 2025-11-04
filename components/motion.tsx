// components/motion.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

export const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-10% 0px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
  >
    {children}
  </motion.div>
);

export const Item = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
    {children}
  </motion.div>
);