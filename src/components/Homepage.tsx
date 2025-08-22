import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Zap, Shield, Star, ArrowRight, Play } from 'lucide-react';

interface HomepageProps {
  onGetStarted: () => void;
}

export default function Homepage({ onGetStarted }: HomepageProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                AI Niche Match
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-pink-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-colors">Success Stories</a>
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Find Your
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                  Perfect Match
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the future of dating with AI-powered matching, stunning avatars, 
                and engaging games designed to create meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onGetStarted}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all duration-200 flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-600/20"></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center"
                  >
                    <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose AI Niche Match?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge platform combines artificial intelligence with human psychology 
              to create the most effective dating experience ever built.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Matching",
                description: "Advanced algorithms analyze compatibility across 50+ dimensions to find your perfect match.",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: Users,
                title: "Stunning AI Avatars",
                description: "Express yourself with beautiful, customizable AI-generated avatars that capture your essence.",
                gradient: "from-pink-400 to-rose-500"
              },
              {
                icon: Zap,
                title: "Interactive Games",
                description: "Break the ice with fun, engaging games designed to reveal compatibility and spark conversations.",
                gradient: "from-purple-400 to-indigo-500"
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Your privacy and safety are our top priorities with end-to-end encryption and verification.",
                gradient: "from-green-400 to-emerald-500"
              },
              {
                icon: Heart,
                title: "Meaningful Connections",
                description: "Focus on quality over quantity with matches based on deep compatibility and shared values.",
                gradient: "from-red-400 to-pink-500"
              },
              {
                icon: Star,
                title: "Premium Experience",
                description: "Enjoy an ad-free, premium experience with exclusive features and priority matching.",
                gradient: "from-blue-400 to-cyan-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is simple. Follow these three easy steps to begin your journey to finding love.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Sign up and create your unique profile with AI-generated avatars and personality insights.",
                color: "pink"
              },
              {
                step: "02",
                title: "Enter the Arena",
                description: "Join our interactive dating arena where you can discover and connect with potential matches.",
                color: "purple"
              },
              {
                step: "03",
                title: "Find Your Match",
                description: "Play our compatibility games and let our AI find your perfect match based on deep connections.",
                color: "indigo"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of happy couples who found their perfect match through AI Niche Match.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Mike",
                story: "We matched through the compatibility game and instantly clicked. The AI really understood what we were looking for!",
                rating: 5,
                image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              },
              {
                name: "Emma & David",
                story: "The AI avatars helped us connect on a deeper level before meeting. It felt like we already knew each other!",
                rating: 5,
                image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              },
              {
                name: "Lisa & James",
                story: "After trying other dating apps, AI Niche Match was refreshingly different. We're getting married next month!",
                rating: 5,
                image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.story}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Happy Couple</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Join thousands of singles who have already discovered meaningful connections through our AI-powered platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="bg-white text-pink-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-pink-50 transition-all duration-200 inline-flex items-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">AI Niche Match</span>
              </div>
              <p className="text-gray-400">
                The future of dating is here. Find your perfect match with AI.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Niche Match. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}