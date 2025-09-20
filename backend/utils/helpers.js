// Generate random string
const generateRandomString = (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

// Format date to readable string
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

// Validate email format
const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};

// Sanitize string for safe database storage
const sanitizeString = (str) => {
    if (typeof str !== 'string') return str;
    return str.trim().replace(/[<>]/g, '');
};

// Generate slug from string
const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
};

// Capitalize first letter
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Check if object is empty
const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

// Deep clone object
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

// Generate pagination info
const getPaginationInfo = (page, limit, total) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const pagination = {
        current: page,
        limit,
        total,
        pages: Math.ceil(total / limit)
    };
    
    if (endIndex < total) {
        pagination.next = page + 1;
    }
    
    if (startIndex > 0) {
        pagination.prev = page - 1;
    }
    
    return pagination;
};

// Format file size
const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

module.exports = {
    generateRandomString,
    formatDate,
    validateEmail,
    sanitizeString,
    generateSlug,
    capitalize,
    isEmpty,
    deepClone,
    getPaginationInfo,
    formatFileSize
};