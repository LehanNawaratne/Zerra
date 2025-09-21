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
              <img className="h-8 w-8" src="/zerra.png" alt="Zerra" />
              <span className="ml-2 text-xl font-bold text-green-600">Zerra</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
                <a href="#contact" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <Link to="/profile" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
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
                Sign Up
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
              Choose your role and join the AI-powered agricultural revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sign Up Card */}
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                👤
              </div>
              <h3 className="text-xl font-semibold mb-4">New User</h3>
              <p className="text-gray-600 mb-6">
                Join Zerra to connect with the agricultural community and access AI-powered insights
              </p>
              <Link 
                to="/signup" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 inline-block"
              >
                Sign Up
              </Link>
            </div>

            {/* Login Card */}
            <div className="bg-blue-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🔑
              </div>
              <h3 className="text-xl font-semibold mb-4">Existing User</h3>
              <p className="text-gray-600 mb-6">
                Access your dashboard, manage crops, view matches, and track orders
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

      {/* Trust-Building Section - Updated Color Palette */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
              🏆 Real Impact Metrics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Proven Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of farmers and buyers who've revolutionized their agricultural practices through AI-powered insights
            </p>
          </div>

          {/* Enhanced Stats Grid with Green Theme */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-green-600 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="text-4xl font-bold mb-4 text-black">
                  150+
                </div>
                <div className="text-lg font-semibold text-black mb-2">Tons Saved</div>
                <div className="text-sm text-gray-600">Agricultural waste prevented through smart matching</div>
                <div className="mt-4 h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-green-600 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="text-4xl font-bold mb-4 text-black">
                  35%
                </div>
                <div className="text-lg font-semibold text-black mb-2">Income Boost</div>
                <div className="text-sm text-gray-600">Average farmer income increase achieved</div>
                <div className="mt-4 h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-green-600 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="text-4xl font-bold mb-4 text-black">
                  2.5K+
                </div>
                <div className="text-lg font-semibold text-black mb-2">Active Users</div>
                <div className="text-sm text-gray-600">Farmers and buyers in our network</div>
                <div className="mt-4 h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-green-600 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="text-4xl font-bold mb-4 text-black">
                  98%
                </div>
                <div className="text-lg font-semibold text-black mb-2">Success Rate</div>
                <div className="text-sm text-gray-600">Successful farmer-buyer matches</div>
                <div className="mt-4 h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Impact Timeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CurrencyDollarIcon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">LKR 500M+</h3>
              <p className="text-gray-600">Total value of transactions facilitated</p>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <UserGroupIcon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">15 Districts</h3>
              <p className="text-gray-600">Coverage across Sri Lanka's agricultural regions</p>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <ChartBarIcon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-20"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">92% Accuracy</h3>
              <p className="text-gray-600">AI prediction accuracy for crop demand</p>
            </div>
          </div>

          {/* Enhanced Testimonials with Green Theme */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-green-200 rounded-3xl blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-8 italic leading-relaxed text-gray-700">
                  "Zerra's AI predictions helped me switch from rice to high-demand vegetables. My profits increased by 250% in just two seasons!"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                  <div>
                    <div className="font-semibold text-xl text-black">Ranil Wickramasinghe</div>
                    <div className="text-green-600 font-medium">Organic Farmer, Kandy</div>
                    <div className="text-gray-500 text-sm">⭐ Top Performer 2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-green-200 rounded-3xl blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-8 italic leading-relaxed text-gray-700">
                  "As a wholesale buyer, Zerra's demand forecasting eliminated our inventory risks. We now operate with 99% supply certainty."
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-xl text-black">Saman Kumara</div>
                    <div className="text-green-600 font-medium">Supply Chain Manager, Colombo</div>
                    <div className="text-gray-500 text-sm">💼 Enterprise Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action with Green Theme */}
          <div className="text-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-green-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-12 border-2 border-green-200 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-black">
                  Ready to Transform Your Agricultural Journey?
                </h3>
                <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                  Join Sri Lanka's most innovative agricultural platform and start experiencing these results for yourself
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/signup" 
                    className="relative group px-8 py-4 bg-green-600 rounded-xl text-white font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span className="relative z-10">Start Your Success Story</span>
                  </Link>
                  <Link 
                    to="/login" 
                    className="px-8 py-4 bg-white border-2 border-green-600 rounded-xl text-green-600 font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Access Dashboard
                  </Link>
                </div>
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
                <img className="h-8 w-8" src="/zerra.png" alt="Zerra" />
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