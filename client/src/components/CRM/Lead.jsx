import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaChartLine, FaTasks, FaCheckCircle } from 'react-icons/fa'; // Importing icons
export default function OnboardingPage  ()  {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    {
      icon: <FaUserPlus className="text-blue-500 text-4xl mb-4" />,
      title: "Effortless Lead Management",
      description: "Track and nurture your leads from initial contact to conversion with intuitive tools."
    },
    {
      icon: <FaChartLine className="text-green-500 text-4xl mb-4" />,
      title: "Insightful Sales Analytics",
      description: "Gain deep insights into your sales performance with comprehensive dashboards and reports."
    },
    {
      icon: <FaTasks className="text-purple-500 text-4xl mb-4" />,
      title: "Streamlined Task Automation",
      description: "Automate repetitive tasks and focus on what truly matters – building customer relationships."
    }
  ];

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl w-full text-center border border-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight"
        variants={itemVariants}
      >
        Welcome to Your New CRM!
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Get ready to supercharge your sales, streamline your operations, and delight your customers.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-700 mb-3">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCheckCircle className="mr-3 text-2xl" /> Get Started Now
      </motion.button>
    </motion.div>
  );
};
