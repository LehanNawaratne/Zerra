import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  XMarkIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon,
  TruckIcon,
  ChartBarIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img className="h-8 w-8" src="/zerra-logo.svg" alt="Zerra" />
              <span className="ml-2 text-xl font-bold text-green-600">Zerra</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
                <a href="#contact" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">Login</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Marketplace for <br />
              <span className="text-green-200">Smarter Farming</span> in Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Reduce waste, stabilize farmer income, and create fairer markets through AI-driven demand prediction
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link 
                to="/signup" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 w-full md:w-auto"
              >
                Get Started - Sign Up
              </Link>
              <Link 
                to="/login" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300 w-full md:w-auto"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Problems to Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Transforming Sri Lanka's agricultural landscape with AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Current Challenges</h3>
              
              <div className="flex items-start space-x-4">
                <XMarkIcon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Post-harvest Waste</h4>
                  <p className="text-gray-600">25% of agricultural produce goes to waste due to market mismatches</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <XMarkIcon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Unpredictable Income</h4>
                  <p className="text-gray-600">Farmers struggle with income volatility below LKR 30,000/month</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <XMarkIcon className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Unfair Middlemen</h4>
                  <p className="text-gray-600">Complex supply chains reduce farmer profits</p>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Zerra's Solutions</h3>
              
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">AI Demand Prediction</h4>
                  <p className="text-gray-600">Smart algorithms predict market demand before planting</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Direct Matching</h4>
                  <p className="text-gray-600">Connect farmers directly with bulk buyers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Pre-order System</h4>
                  <p className="text-gray-600">Secure buyers before harvest, guaranteed income</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Zerra Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple 3-step process powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <UserGroupIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p className="text-gray-600">
                Sign up as a farmer or buyer. Complete your profile with crop preferences and location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <ChartBarIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Input & Predict</h3>
              <p className="text-gray-600">
                Farmers input planned crops. Buyers post requirements. AI analyzes and predicts demand.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <TruckIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">
                AI matches farmers with buyers. Secure pre-orders and guarantee successful harvests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600">
              Join the AI-powered agricultural marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sign Up Card */}
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🌱
              </div>
              <h3 className="text-xl font-semibold mb-4">New User</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of farmers and buyers already using Zerra to transform their agricultural business
              </p>
              <Link 
                to="/signup" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
              >
                Sign Up Now
              </Link>
            </div>

            {/* Login Card */}
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🔑
              </div>
              <h3 className="text-xl font-semibold mb-4">Existing User</h3>
              <p className="text-gray-600 mb-6">
                Access your dashboard, manage your profile, view matches, and track your agricultural activities
              </p>
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
              >
                Login to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust-Building Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Real impact from our pilot programs across Sri Lanka - transforming lives and communities through AI-powered agriculture
            </p>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-yellow-300">150+</div>
              <div className="text-lg font-semibold text-green-100 mb-2">Tons of Waste Prevented</div>
              <div className="text-sm text-green-200">Saving environment & resources</div>
            </div>
            
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-yellow-300">25%</div>
              <div className="text-lg font-semibold text-green-100 mb-2">Better Income for Farmers</div>
              <div className="text-sm text-green-200">Average income increase</div>
            </div>
            
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-yellow-300">500+</div>
              <div className="text-lg font-semibold text-green-100 mb-2">Successful Matches</div>
              <div className="text-sm text-green-200">Farmers connected to buyers</div>
            </div>
            
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-5xl md:text-6xl font-bold mb-3 text-yellow-300">95%</div>
              <div className="text-lg font-semibold text-green-100 mb-2">Satisfaction Rate</div>
              <div className="text-sm text-green-200">Happy farmers & buyers</div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LKR 150M</h3>
              <p className="text-green-200">Total transactions facilitated through our platform</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2,500+</h3>
              <p className="text-green-200">Active farmers and buyers on our platform</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">85%</h3>
              <p className="text-green-200">Accuracy in AI demand predictions</p>
            </div>
          </div>

          {/* Enhanced Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-15 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 italic leading-relaxed">
                "Zerra completely transformed my farming business. I used to lose 40% of my harvest, but now with their AI predictions, I know exactly what to plant and when. My income increased by 35% in just one season!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">Sunil Perera</div>
                  <div className="text-green-200">Rice Farmer, Anuradhapura</div>
                  <div className="text-green-300 text-sm">Member since 2024</div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-15 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 italic leading-relaxed">
                "As a wholesale buyer, Zerra gives me unprecedented visibility into future supply. No more emergency sourcing or disappointing customers. The quality predictions are incredibly accurate!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">Priya Fernando</div>
                  <div className="text-green-200">Wholesale Buyer, Colombo</div>
                  <div className="text-green-300 text-sm">Processing 50+ tons monthly</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action within results section */}
          <div className="text-center mt-16">
            <div className="bg-white bg-opacity-20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Join the Agricultural Revolution</h3>
              <p className="text-green-100 mb-6 text-lg">
                Be part of Sri Lanka's smartest farming community and start seeing results like these farmers and buyers
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link 
                  to="/signup" 
                  className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition duration-300"
                >
                  Join Zerra Today
                </Link>
                <Link 
                  to="/login" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Login to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img className="h-8 w-8" src="/zerra-logo.svg" alt="Zerra" />
                <span className="ml-2 text-xl font-bold">Zerra</span>
              </div>
              <p className="text-gray-400">
                AI-powered marketplace connecting farmers and buyers for a smarter agricultural future in Sri Lanka.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><Link to="/signup" className="text-gray-400 hover:text-white">Sign Up</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-gray-400 space-y-2">
                <p>Email: lehanxp@gmail.com</p>
                <p>Phone: +94 76 3541 666</p>
                <p className="text-sm mt-4 text-green-400">
                  Built at IntelliCon Hackathon 2025 – Demo Prototype
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zerra. Built by Team ExZero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;