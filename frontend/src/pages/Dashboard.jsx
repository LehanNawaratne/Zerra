import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  CurrencyDollarIcon,
  TruckIcon,
  UserGroupIcon,
  PlusIcon,
  EyeIcon,
  BellIcon,
  ChevronRightIcon,
  CalendarIcon,
  MapPinIcon,
  StarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ShoppingBagIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  
  useEffect(() => {
    document.title = 'Zerra | Dashboard';
  }, []);

  const [stats] = useState({
    totalEarnings: 425000,
    activeListing: 8,
    completedDeals: 24,
    totalBuyers: 156,
    monthlyGrowth: 12.5,
    avgRating: 4.8
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: 'sale',
      description: 'Sold 500kg Organic Tomatoes to Fresh Mart',
      amount: 125000,
      date: '2024-09-22',
      status: 'completed',
      icon: '🍅'
    },
    {
      id: 2,
      type: 'listing',
      description: 'Created new listing for Basmati Rice',
      amount: null,
      date: '2024-09-21',
      status: 'active',
      icon: '🌾'
    },
    {
      id: 3,
      type: 'inquiry',
      description: 'New inquiry for Green Beans from Export Lanka',
      amount: null,
      date: '2024-09-20',
      status: 'pending',
      icon: '🥬'
    },
    {
      id: 4,
      type: 'payment',
      description: 'Payment received for Red Onions',
      amount: 160000,
      date: '2024-09-19',
      status: 'completed',
      icon: '💰'
    }
  ]);

  const [currentListings] = useState([
    {
      id: 1,
      crop: 'Organic Tomatoes',
      quantity: '300kg',
      price: 250,
      status: 'active',
      inquiries: 5,
      views: 48,
      datePosted: '2024-09-18'
    },
    {
      id: 2,
      crop: 'Basmati Rice',
      quantity: '1000kg',
      price: 280,
      status: 'urgent',
      inquiries: 12,
      views: 89,
      datePosted: '2024-09-15'
    },
    {
      id: 3,
      crop: 'Green Beans',
      quantity: '200kg',
      price: 225,
      status: 'pending',
      inquiries: 3,
      views: 22,
      datePosted: '2024-09-20'
    }
  ]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-8" src="/zerra.png" alt="Zerra" />
              <span className="ml-2 text-xl font-bold text-green-600">Zerra</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/marketplace" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Marketplace</Link>
              <Link to="/profile" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              <div className="relative">
                <button 
                  onClick={() => setIsNotificationPanelOpen(!isNotificationPanelOpen)}
                  className={`p-2 rounded-full transition-colors duration-200 ${isNotificationPanelOpen ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:text-green-600 hover:bg-gray-100'}`}
                >
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>
              </div>
              <Link to="/logout" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">Logout</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ranil!</h1>
          <p className="text-gray-600">Here's what's happening with your farm today</p>
        </div>

        {/* Inline Notification Panel */}
        {isNotificationPanelOpen && (
          <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 animate-in slide-in-from-top duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-green-50">
              <div className="flex items-center space-x-3">
                <BellIcon className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
              </div>
              <button
                onClick={() => setIsNotificationPanelOpen(false)}
                className="p-2 hover:bg-green-100 rounded-full transition-colors duration-200"
              >
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Notification Stats */}
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">2 unread notifications</span>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Mark all as read
                </button>
              </div>
            </div>

            {/* Quick Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              <div className="p-4 border-b border-blue-200 hover:bg-gray-50 transition-colors duration-200 bg-blue-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <BellIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900">New Buyer Inquiry</p>
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      FreshMart Colombo is interested in your Organic Tomatoes listing
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">2 minutes ago</span>
                      <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b border-orange-200 hover:bg-gray-50 transition-colors duration-200 bg-orange-50">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900">Price Alert</p>
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Tomato prices increased by 15% in Colombo market
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">1 hour ago</span>
                      <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                        View Trends
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-600">Payment Received</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      LKR 125,000 payment received for Red Onions order
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">3 hours ago</span>
                      <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                        View Transaction
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
                View All Notifications
              </button>
            </div>
          </div>
        )}

        {/* Small Notification Panel */}
        {!isNotificationPanelOpen && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <BellIcon className="h-5 w-5 text-blue-600 mt-0.5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-blue-900">
                    🌟 Quick Update
                  </h3>
                  <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                    View All
                  </button>
                </div>
                <div className="mt-1 space-y-1">
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">New inquiry</span> for your Organic Tomatoes from Fresh Mart
                  </p>
                  <p className="text-xs text-blue-600">
                    2 other notifications • Market prices up 15% this week
                  </p>
                </div>
              </div>
              <button className="flex-shrink-0 text-blue-400 hover:text-blue-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(stats.totalEarnings)}</p>
                <div className="flex items-center mt-1">
                  <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600 ml-1">+{stats.monthlyGrowth}%</span>
                </div>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeListing}</p>
                <p className="text-sm text-gray-500 mt-1">3 urgent</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <DocumentTextIcon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed Deals</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completedDeals}</p>
                <p className="text-sm text-gray-500 mt-1">This month</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <CheckCircleIcon className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Buyers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalBuyers}</p>
                <div className="flex items-center mt-1">
                  <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{stats.avgRating} rating</span>
                </div>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <UserGroupIcon className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/create-listing" className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                  <PlusIcon className="h-5 w-5" />
                  <span>Create Listing</span>
                </Link>
                <Link to="/marketplace" className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  <ShoppingBagIcon className="h-5 w-5" />
                  <span>Browse Market</span>
                </Link>
                <Link to="/view-all-activity" className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300">
                  <ChartBarIcon className="h-5 w-5" />
                  <span>View Analytics</span>
                </Link>
              </div>
            </div>

            {/* Current Listings */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Current Listings</h2>
                <Link to="/listings" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {currentListings.map((listing) => (
                  <div key={listing.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium text-gray-900">{listing.crop}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                            {listing.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span>{listing.quantity}</span>
                          <span>•</span>
                          <span>{formatCurrency(listing.price)}/kg</span>
                          <span>•</span>
                          <span>{listing.inquiries} inquiries</span>
                          <span>•</span>
                          <span>{listing.views} views</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <Link to="/view-all-activity" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">
                          {new Date(activity.date).toLocaleDateString()}
                        </span>
                        {activity.amount && (
                          <>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs font-medium text-green-600">
                              {formatCurrency(activity.amount)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Weather</h2>
                <div className="text-2xl">☀️</div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">28°C</p>
                <p className="text-blue-100">Sunny, Kandy</p>
                <div className="flex items-center space-x-4 text-sm text-blue-100 mt-4">
                  <span>🌧️ 20%</span>
                  <span>💨 12km/h</span>
                  <span>💧 65%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-400">
                <p className="text-sm text-blue-100">
                  Perfect conditions for harvesting tomatoes today!
                </p>
              </div>
            </div>

            {/* Market Trends */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Market Trends</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tomatoes</span>
                  <div className="flex items-center space-x-2">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">+15%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rice</span>
                  <div className="flex items-center space-x-2">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">+8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Green Beans</span>
                  <div className="flex items-center space-x-2">
                    <ArrowTrendingDownIcon className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-red-600">-3%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Onions</span>
                  <div className="flex items-center space-x-2">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">+22%</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-sm text-green-600 hover:text-green-700 font-medium">
                View Detailed Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
