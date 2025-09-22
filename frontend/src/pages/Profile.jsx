import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  UserIcon, 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  PencilIcon,
  CameraIcon,
  CheckCircleIcon,
  XMarkIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TruckIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const Profile = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Zerra | Profile';
  }, []);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Ranil',
    lastName: 'Wickramasinghe',
    email: 'ranil.w@gmail.com',
    phone: '+94 77 123 4567',
    userType: 'farmer',
    location: 'kandy',
    bio: 'Organic farmer specializing in high-quality vegetables and traditional rice varieties. Member of Kandy Farmers Cooperative.',
    profileImage: null,
    joinedDate: '2024-01-15',
    verified: true
  });

  const [stats] = useState({
    totalTransactions: 48,
    totalValue: 2450000,
    successfulMatches: 45,
    avgRating: 4.8,
    cropsListed: 12,
    activeBuyers: 8
  });

  const [recentActivity] = useState([
    { id: 1, type: 'sale', crop: 'Organic Tomatoes', quantity: '500kg', date: '2024-09-18', status: 'completed' },
    { id: 2, type: 'listing', crop: 'Basmati Rice', quantity: '1000kg', date: '2024-09-16', status: 'active' },
    { id: 3, type: 'match', crop: 'Green Beans', quantity: '200kg', date: '2024-09-14', status: 'pending' },
    { id: 4, type: 'sale', crop: 'Coconut', quantity: '300 units', date: '2024-09-12', status: 'completed' }
  ]);

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // TODO: API call to save profile data
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original data or fetch from API
    setIsEditing(false);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'sale': return <CurrencyDollarIcon className="h-5 w-5 text-green-500" />;
      case 'listing': return <ChartBarIcon className="h-5 w-5 text-blue-500" />;
      case 'match': return <TruckIcon className="h-5 w-5 text-purple-500" />;
      default: return <CalendarIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'sale': return 'bg-green-50 border-green-200';
      case 'listing': return 'bg-blue-50 border-blue-200';
      case 'match': return 'bg-purple-50 border-purple-200';
      default: return 'bg-gray-50 border-gray-200';
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
              <Link to="/dashboard" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              <Link to="/logout" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">Logout</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                    {profileData.profileImage ? (
                      <img src={profileData.profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
                    ) : (
                      `${profileData.firstName[0]}${profileData.lastName[0]}`
                    )}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                      <CameraIcon className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Name and Verification */}
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {profileData.firstName} {profileData.lastName}
                  </h1>
                  <div className="flex items-center justify-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      profileData.userType === 'farmer' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {profileData.userType === 'farmer' ? '🌱 Farmer' : '🏢 Buyer'}
                    </span>
                    {profileData.verified && (
                      <CheckCircleIcon className="h-5 w-5 text-green-500" title="Verified Account" />
                    )}
                  </div>
                </div>

                {/* Bio */}
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <p className="text-gray-600 text-sm mb-6">{profileData.bio}</p>
                )}

                {/* Contact Info */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{profileData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600 capitalize">{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Member since {new Date(profileData.joinedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Edit Button */}
                <div className="mt-6">
                  {isEditing ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center justify-center space-x-2"
                      >
                        <CheckCircleIcon className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-400 flex items-center justify-center space-x-2"
                      >
                        <XMarkIcon className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center justify-center space-x-2"
                    >
                      <PencilIcon className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  )}
                </div>

                {/* Quick Actions under profile */}
                {!isEditing && (
                  <div className="mt-6 space-y-3">
                    <h3 className="text-sm font-medium text-gray-900 text-center">Quick Actions</h3>
                    <div className="space-y-2">
                      <button 
                        onClick={() => navigate('/view-all-activity')}
                        className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-300"
                      >
                        <CurrencyDollarIcon className="h-4 w-4" />
                        <span>View All Activity</span>
                      </button>
                      <button 
                        onClick={() => alert('Account settings feature coming soon!')}
                        className="w-full flex items-center justify-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300"
                      >
                        <UserIcon className="h-4 w-4" />
                        <span>Account Settings</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Statistics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">{stats.totalTransactions}</div>
                  <div className="text-sm text-gray-600">Total Transactions</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{formatCurrency(stats.totalValue)}</div>
                  <div className="text-sm text-gray-600">Total Value</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{stats.successfulMatches}</div>
                  <div className="text-sm text-gray-600">Successful Matches</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">{stats.avgRating}</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">{stats.cropsListed}</div>
                  <div className="text-sm text-gray-600">Crops Listed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{stats.activeBuyers}</div>
                  <div className="text-sm text-gray-600">Active Buyers</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className={`border rounded-lg p-4 ${getActivityColor(activity.type)}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getActivityIcon(activity.type)}
                        <div>
                          <div className="font-medium text-gray-900">
                            {activity.type === 'sale' && 'Sale Completed'}
                            {activity.type === 'listing' && 'New Listing Created'}
                            {activity.type === 'match' && 'New Match Found'}
                          </div>
                          <div className="text-sm text-gray-600">
                            {activity.crop} - {activity.quantity}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                          activity.status === 'active' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {activity.status}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {new Date(activity.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button 
                  onClick={() => navigate('/view-all-activity')}
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  View All Activity →
                </button>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
              <div className="space-y-4">
                {/* Privacy Settings */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Privacy & Security</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Profile Visibility</p>
                        <p className="text-sm text-gray-500">Control who can see your profile</p>
                      </div>
                      <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                        <option>Public</option>
                        <option>Verified Buyers Only</option>
                        <option>Private</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Add extra security to your account</p>
                      </div>
                      <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                        Enable
                      </button>
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive updates via email</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 text-green-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">SMS Alerts</p>
                        <p className="text-sm text-gray-500">Get notified about urgent matters</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 text-green-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Price Alerts</p>
                        <p className="text-sm text-gray-500">Market price change notifications</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 text-green-600 rounded" />
                    </div>
                  </div>
                </div>

                {/* Payment Settings */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Payment & Billing</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Bank Account</p>
                        <p className="text-sm text-gray-500">**** **** **** 1234</p>
                      </div>
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                        Update
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Payment Method</p>
                        <p className="text-sm text-gray-500">Bank Transfer</p>
                      </div>
                      <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                        Change
                      </button>
                    </div>
                  </div>
                </div>

                {/* Account Actions */}
                <div className="pt-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Account Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                      Download Account Data
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                      Export Activity History
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
                      Deactivate Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;