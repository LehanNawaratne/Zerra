import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  MapPinIcon,
  CalendarIcon,
  StarIcon,
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const Marketplace = () => {
  useEffect(() => {
    document.title = 'Zerra | Marketplace';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [favorites, setFavorites] = useState([]);

  const [listings] = useState([
    {
      id: 1,
      crop: 'Organic Tomatoes',
      farmer: 'Ranil Wickramasinghe',
      location: 'Kandy',
      quantity: '500kg',
      pricePerKg: 250,
      totalPrice: 125000,
      category: 'vegetables',
      harvestDate: '2024-09-25',
      rating: 4.8,
      image: '/api/placeholder/300/200',
      description: 'Premium organic tomatoes grown without chemicals. Perfect for restaurants and health-conscious buyers.',
      verified: true,
      urgent: false
    },
    {
      id: 2,
      crop: 'Basmati Rice',
      farmer: 'Saman Perera',
      location: 'Anuradhapura',
      quantity: '1000kg',
      pricePerKg: 280,
      totalPrice: 280000,
      category: 'grains',
      harvestDate: '2024-09-20',
      rating: 4.9,
      image: '/api/placeholder/300/200',
      description: 'High-quality basmati rice with excellent aroma and taste. Aged for 6 months.',
      verified: true,
      urgent: true
    },
    {
      id: 3,
      crop: 'Green Beans',
      farmer: 'Priya Fernando',
      location: 'Nuwara Eliya',
      quantity: '200kg',
      pricePerKg: 225,
      totalPrice: 45000,
      category: 'vegetables',
      harvestDate: '2024-09-28',
      rating: 4.6,
      image: '/api/placeholder/300/200',
      description: 'Fresh green beans from hill country. Crisp and tender, perfect for export quality.',
      verified: true,
      urgent: false
    },
    {
      id: 4,
      crop: 'Coconuts',
      farmer: 'Kumara Silva',
      location: 'Gampaha',
      quantity: '500 units',
      pricePerKg: 180,
      totalPrice: 90000,
      category: 'fruits',
      harvestDate: '2024-09-22',
      rating: 4.7,
      image: '/api/placeholder/300/200',
      description: 'Fresh coconuts directly from plantation. High water content and sweet taste.',
      verified: false,
      urgent: false
    },
    {
      id: 5,
      crop: 'Red Onions',
      farmer: 'Nimal Rathnayake',
      location: 'Hambantota',
      quantity: '800kg',
      pricePerKg: 200,
      totalPrice: 160000,
      category: 'vegetables',
      harvestDate: '2024-09-18',
      rating: 4.5,
      image: '/api/placeholder/300/200',
      description: 'Premium red onions with long shelf life. Ideal for wholesale distribution.',
      verified: true,
      urgent: true
    },
    {
      id: 6,
      crop: 'King Coconut',
      farmer: 'Chaminda Perera',
      location: 'Colombo',
      quantity: '300 units',
      pricePerKg: 150,
      totalPrice: 45000,
      category: 'fruits',
      harvestDate: '2024-09-26',
      rating: 4.4,
      image: '/api/placeholder/300/200',
      description: 'Fresh king coconuts perfect for beverages. Rich in electrolytes and nutrients.',
      verified: true,
      urgent: false
    }
  ]);

  const [filteredListings, setFilteredListings] = useState(listings);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'grains', label: 'Grains & Cereals' },
    { value: 'spices', label: 'Spices' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'kandy', label: 'Kandy' },
    { value: 'colombo', label: 'Colombo' },
    { value: 'anuradhapura', label: 'Anuradhapura' },
    { value: 'nuwara-eliya', label: 'Nuwara Eliya' },
    { value: 'gampaha', label: 'Gampaha' },
    { value: 'hambantota', label: 'Hambantota' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const toggleFavorite = (listingId) => {
    setFavorites(prev => 
      prev.includes(listingId) 
        ? prev.filter(id => id !== listingId)
        : [...prev, listingId]
    );
  };

  useEffect(() => {
    let filtered = [...listings];
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(listing => 
        listing.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(listing => listing.category === categoryFilter);
    }
    
    // Location filter
    if (locationFilter !== 'all') {
      filtered = filtered.filter(listing => 
        listing.location.toLowerCase() === locationFilter.replace('-', ' ')
      );
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.pricePerKg - b.pricePerKg);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricePerKg - a.pricePerKg);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'harvest':
        filtered.sort((a, b) => new Date(a.harvestDate) - new Date(b.harvestDate));
        break;
      default: // recent
        filtered.sort((a, b) => b.id - a.id);
    }
    
    setFilteredListings(filtered);
  }, [searchTerm, categoryFilter, locationFilter, sortBy, listings]);

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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Agricultural Marketplace</h1>
          <p className="text-gray-600">Discover fresh produce directly from verified farmers across Sri Lanka</p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search crops, farmers, or locations..."
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              >
                {locations.map(location => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              >
                <option value="recent">Most Recent</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="harvest">Harvest Date</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            {filteredListings.length} Listings Found
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FunnelIcon className="h-4 w-4" />
            <span>Filtered Results</span>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl">
                    {listing.category === 'vegetables' && '🥬'}
                    {listing.category === 'fruits' && '🥥'}
                    {listing.category === 'grains' && '🌾'}
                    {listing.category === 'spices' && '🌶️'}
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {listing.verified && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      ✓ Verified
                    </span>
                  )}
                  {listing.urgent && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      🔥 Urgent
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(listing.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {favorites.includes(listing.id) ? (
                    <HeartIconSolid className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{listing.crop}</h3>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{listing.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{listing.farmer} • {listing.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Harvest: {new Date(listing.harvestDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {listing.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(listing.pricePerKg)}/kg
                    </div>
                    <div className="text-sm text-gray-600">
                      {listing.quantity} available
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Total Value</div>
                    <div className="text-lg font-semibold text-green-600">
                      {formatCurrency(listing.totalPrice)}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1">
                    <ShoppingCartIcon className="h-4 w-4" />
                    <span>Contact Farmer</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No listings found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredListings.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 rounded-md px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              Load More Listings
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;