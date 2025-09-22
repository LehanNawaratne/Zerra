import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CurrencyDollarIcon,
  ChartBarIcon,
  TruckIcon,
  CalendarIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const ViewAllActivity = () => {
  useEffect(() => {
    document.title = 'Zerra | Activity History';
  }, []);

  const [activities] = useState([
    { id: 1, type: 'sale', crop: 'Organic Tomatoes', quantity: '500kg', buyer: 'Green Valley Markets', price: 125000, date: '2024-09-18', status: 'completed' },
    { id: 2, type: 'listing', crop: 'Basmati Rice', quantity: '1000kg', buyer: '-', price: 280000, date: '2024-09-16', status: 'active' },
    { id: 3, type: 'match', crop: 'Green Beans', quantity: '200kg', buyer: 'Fresh Foods Ltd', price: 45000, date: '2024-09-14', status: 'pending' },
    { id: 4, type: 'sale', crop: 'Coconut', quantity: '300 units', buyer: 'Island Exports', price: 90000, date: '2024-09-12', status: 'completed' },
    { id: 5, type: 'sale', crop: 'Red Onions', quantity: '800kg', buyer: 'City Wholesale', price: 160000, date: '2024-09-10', status: 'completed' },
    { id: 6, type: 'listing', crop: 'Carrots', quantity: '400kg', buyer: '-', price: 80000, date: '2024-09-08', status: 'active' },
    { id: 7, type: 'match', crop: 'Cabbage', quantity: '600kg', buyer: 'Health Foods Co', price: 120000, date: '2024-09-06', status: 'negotiating' },
    { id: 8, type: 'sale', crop: 'Sweet Potatoes', quantity: '250kg', buyer: 'Local Supermarket', price: 62500, date: '2024-09-04', status: 'completed' },
    { id: 9, type: 'listing', crop: 'Bell Peppers', quantity: '150kg', buyer: '-', price: 75000, date: '2024-09-02', status: 'expired' },
    { id: 10, type: 'sale', crop: 'Eggplant', quantity: '300kg', buyer: 'Restaurant Chain', price: 90000, date: '2024-08-30', status: 'completed' }
  ]);

  const [filteredActivities, setFilteredActivities] = useState(activities);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getActivityIcon = (type) => {
    switch (type) {
      case 'sale': return <CurrencyDollarIcon className="h-5 w-5 text-green-500" />;
      case 'listing': return <ChartBarIcon className="h-5 w-5 text-blue-500" />;
      case 'match': return <TruckIcon className="h-5 w-5 text-purple-500" />;
      default: return <CalendarIcon className="h-5 w-5 text-gray-500" />;
    }
  };



  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'negotiating': return 'bg-orange-100 text-orange-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  useEffect(() => {
    let filtered = activities;
    
    if (filter !== 'all') {
      filtered = filtered.filter(activity => activity.type === filter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(activity => 
        activity.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.buyer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredActivities(filtered);
  }, [filter, searchTerm, activities]);

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
              <Link to="/profile" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link to="/logout" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">Logout</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/profile" 
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Back to Profile</span>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Activity History</h1>
          <p className="text-gray-600">Complete record of your transactions, listings, and matches</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                placeholder="Search crops or buyers..."
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-4">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="block w-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">All Activities</option>
                <option value="sale">Sales Only</option>
                <option value="listing">Listings Only</option>
                <option value="match">Matches Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* Activity List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              {filteredActivities.length} Activities Found
            </h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className={`p-6 hover:bg-gray-50 transition-colors duration-200`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getActivityIcon(activity.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          {activity.crop}
                        </h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Quantity:</span> {activity.quantity}
                        </div>
                        <div>
                          <span className="font-medium">
                            {activity.type === 'listing' ? 'Expected Price:' : 'Buyer:'}
                          </span> {activity.type === 'listing' ? formatCurrency(activity.price) : activity.buyer}
                        </div>
                        <div>
                          <span className="font-medium">Date:</span> {new Date(activity.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      {activity.type !== 'listing' && (
                        <div className="mt-2 text-sm text-gray-600">
                          <span className="font-medium">Value:</span> {formatCurrency(activity.price)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900 capitalize">
                        {activity.type === 'sale' && 'Sale Completed'}
                        {activity.type === 'listing' && 'Listing Created'}
                        {activity.type === 'match' && 'Match Found'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(activity.date).toLocaleDateString('en-GB')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No activities found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Activity Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {activities.filter(a => a.type === 'sale' && a.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-600">Completed Sales</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {activities.filter(a => a.type === 'listing' && a.status === 'active').length}
              </div>
              <div className="text-sm text-gray-600">Active Listings</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {activities.filter(a => a.type === 'match').length}
              </div>
              <div className="text-sm text-gray-600">Total Matches</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {formatCurrency(activities.filter(a => a.status === 'completed').reduce((sum, a) => sum + a.price, 0))}
              </div>
              <div className="text-sm text-gray-600">Total Earnings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllActivity;