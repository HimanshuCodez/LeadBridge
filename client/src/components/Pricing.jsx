import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiStar, FiZap } from 'react-icons/fi';

const PricingComparison = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: { monthly: 29, yearly: 290 },
      description: "Perfect for small teams",
      features: [
        { name: "Up to 1,000 leads", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "API access", included: false },
        { name: "Advanced automation", included: false },
        { name: "Custom integrations", included: false }
      ],
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: "Professional",
      price: { monthly: 79, yearly: 790 },
      description: "Most popular for growing teams",
      features: [
        { name: "Up to 10,000 leads", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority support", included: true },
        { name: "API access", included: true },
        { name: "Advanced automation", included: true },
        { name: "Custom integrations", included: false }
      ],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: 199, yearly: 1990 },
      description: "For large organizations",
      features: [
        { name: "Unlimited leads", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 phone support", included: true },
        { name: "API access", included: true },
        { name: "Advanced automation", included: true },
        { name: "Custom integrations", included: true }
      ],
      color: "from-emerald-500 to-emerald-600",
      popular: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FiZap className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Start free, scale as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              className={`relative w-16 h-8 rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setIsYearly(!isYearly)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 8 : 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <FiStar className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Free Trial
                </motion.button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <FiX className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${
                      feature.included ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            All plans include 14-day free trial • No credit card required
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact Sales
            </button>
            <button className="border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300">
              View Full Features
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingComparison;