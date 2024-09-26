import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Counter = () => {
  // Define animation variants for counters
  const counterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#f5f5f5] text-black py-14">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Happy Patients */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-4xl font-bold text-[#1C7C82] mb-3">
              <CountUp start={0} end={20000} duration={3} separator="," />+
            </h3>
            <p className="font-lato text-lg font-semibold text-gray-700">
              Happy Patients
            </p>
          </motion.div>

          {/* Performed Treatments */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-[#1C7C82] mb-3">
              <CountUp start={0} end={10000} duration={3} separator="," />+
            </h3>
            <p className="font-lato text-lg font-semibold text-gray-700">
              Performed Treatments
            </p>
          </motion.div>

          {/* Years of Experience */}
          <motion.div
            className="p-6 bg-white shadow-lg rounded-lg"
            variants={counterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-4xl font-bold text-[#1C7C82] mb-3">
              <CountUp start={0} end={20} duration={3} separator="," />+
            </h3>
            <p className="font-lato text-lg font-semibold text-gray-700">
              Years of Experience
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
