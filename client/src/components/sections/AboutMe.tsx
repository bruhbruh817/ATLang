import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "@/assets/images/profile-placeholder.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutMe() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-20 text-blue-100 font-sans space-y-28">
      {/* Title + Quote */}
      <div className="text-center space-y-10">
        <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-md">About Me</h1>
        <blockquote className="italic text-lg md:text-xl max-w-3xl mx-auto border-l-4 pl-4 border-blue-700 text-blue-300">
          "The adventure of life is to learn... The beauty of life is to give."
          <span className="block mt-3 text-sm font-medium text-blue-400">— William Arthur Ward</span>
        </blockquote>
        <div className="flex justify-center mt-6">
          <Image src={profilePic} alt="Sadi Bulut" width={160} height={160} className="rounded-full border-4 border-blue-700 shadow-xl" />
        </div>
      </div>

      {/* Who Am I */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0} className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-300">🌊 Who Am I?</h2>
        <p>
          Hey! My name is Sadi Bulut, and I’m currently a junior at Cannon School. I’ve been programming for nearly eight years—it started as a hobby, but quickly became a huge part of who I am.
        </p>

        {/* Image between paragraphs */}
        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-blue-900">
          <Image src="/images/programming.jpg" alt="Programming Passion" fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        <p>
          Today, I’m the President of both the Programming and Robotics Clubs, and a Model UN member, always looking for new ways to blend creativity, technology, and impact.
        </p>
        <p>
          Beyond the screen, I’m a scuba diver with a love for the ocean’s quiet mysteries. I’ve captured that world through underwater photography, a passion sparked by both exploration and storytelling.
        </p>

        {/* Image between paragraphs */}
        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-blue-900">
          <Image src="/images/underwater.jpg" alt="Underwater Photography" fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>

        <p>
          I’ve also spent years building games, chasing ideas that let players not just play, but feel.
        </p>
      </motion.section>

      {/* Reader Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={1} className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-300">📚 As a Reader...</h2>
        <p>
          I didn’t grow up with English as my first language—I actually started teaching myself at age 6 through YouTube videos. That curiosity never faded. By age 9, I was reading classics.
        </p>
        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-blue-900">
          <Image src="/images/books.jpg" alt="Reading Journey" fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <p>
          That same year, I traveled alone to New York for a summer school program, and it changed everything. Seeing the U.S. as a kid from another country was surreal—but it also felt like a calling.
        </p>
      </motion.section>

      {/* Writer Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={2} className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-300">✍️ As a Writer...</h2>
        <p>
          My journey with writing mirrors my journey with language itself—gradual, personal, and shaped by constant learning. I’ve always been an intrigued observer of words.
        </p>
        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-blue-900">
          <Image src="/images/writing.jpg" alt="Writing Growth" fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <p>
          Through years of reading, traveling, and studying different subjects, I’ve developed a voice that is reflective, curious, and layered.
        </p>
      </motion.section>

      {/* Identity Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={3} className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-300">🧭 What Makes Me, Me?</h2>
        <p>
          I owe a lot to the people and places that have shaped me. My mentor Tahsin Ceylan, an expert in marine life and underwater cinematography, taught me to look deeper.
        </p>
        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border border-blue-900">
          <Image src="/images/travel.jpg" alt="World Travel" fill className="object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <p>
          My internships, projects, and even the mistakes I’ve made along the way have helped me become not just a better student—but a more self-aware human.
        </p>
      </motion.section>
    </div>
  );
}
