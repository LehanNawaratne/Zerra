import { useState } from 'react';
import { 
  XMarkIcon,
  BellIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const NotificationPanel = ({ isOpen, onClose }) => {
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Buyer Inquiry',
      message: 'FreshMart Colombo is interested in your Organic Tomatoes listing',
      type: 'inquiry',
      time: '2 minutes ago',
      unread: true,
      action: 'View Details'
    },
    {
      id: 2,
      title: 'Price Alert',
      message: 'Tomato prices increased by 15% in Colombo market',
      type: 'price',
      time: '1 hour ago',
      unread: true,
      action: 'View Trends'
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'LKR 125,000 payment received for Red Onions order',
      type: 'payment',
      time: '3 hours ago',
      unread: false,
      action: 'View Transaction'
    },
    {
      id: 4,
      title: 'Listing Expiring',
      message: 'Your Basmati Rice listing expires in 2 days',
      type: 'warning',
      time: '5 hours ago',
      unread: false,
      action: 'Renew Listing'
    },
    {
      id: 5,
      title: 'Weather Alert',
      message: 'Heavy rain expected in Kandy region for next 3 days',
      type: 'weather',
      time: '6 hours ago',
      unread: false,
      action: 'View Forecast'
    },
    {
      id: 6,
      title: 'Order Completed',
      message: 'Green Beans order successfully delivered to Metro Mart',
      type: 'success',
      time: '1 day ago',
      unread: false,
      action: 'Rate Buyer'
    }
  ]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'inquiry':
        return <BellIcon className="h-5 w-5 text-blue-500" />;
      case 'price':
        return <InformationCircleIcon className="h-5 w-5 text-orange-500" />;
      case 'payment':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
      case 'weather':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />;
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      default:
        return <BellIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getNotificationBgColor = (type, unread) => {
    if (unread) {
      switch (type) {
        case 'inquiry':
          return 'bg-blue-50 border-blue-200';
        case 'price':
          return 'bg-orange-50 border-orange-200';
        case 'payment':
          return 'bg-green-50 border-green-200';
        case 'warning':
          return 'bg-red-50 border-red-200';
        case 'weather':
          return 'bg-blue-50 border-blue-200';
        case 'success':
          return 'bg-green-50 border-green-200';
        default:
          return 'bg-gray-50 border-gray-200';
      }
    }
    return 'bg-white border-gray-200';
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Notification Panel */}
      <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-green-50">
          <div className="flex items-center space-x-3">
            <BellIcon className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-green-100 rounded-full transition-colors duration-200"
          >
            <XMarkIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Notification Stats */}
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              {notifications.filter(n => n.unread).length} unread notifications
            </span>
            <button className="text-green-600 hover:text-green-700 font-medium">
              Mark all as read
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${getNotificationBgColor(notification.type, notification.unread)}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`text-sm font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                      {notification.title}
                    </p>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <ClockIcon className="h-3 w-3" />
                      <span>{notification.time}</span>
                    </div>
                    <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                      {notification.action}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium">
            View All Notifications
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationPanel;