const axios = require('axios');

class APIService {
    constructor(baseURL, timeout = 10000) {
        this.api = axios.create({
            baseURL,
            timeout,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Request interceptor
        this.api.interceptors.request.use(
            (config) => {
                console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
                return config;
            },
            (error) => {
                console.error('Request error:', error);
                return Promise.reject(error);
            }
        );

        // Response interceptor
        this.api.interceptors.response.use(
            (response) => {
                console.log(`Response received from: ${response.config.url}`);
                return response;
            },
            (error) => {
                console.error('Response error:', error.message);
                return Promise.reject(error);
            }
        );
    }

    // GET request
    async get(endpoint, config = {}) {
        try {
            const response = await this.api.get(endpoint, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // POST request
    async post(endpoint, data = {}, config = {}) {
        try {
            const response = await this.api.post(endpoint, data, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // PUT request
    async put(endpoint, data = {}, config = {}) {
        try {
            const response = await this.api.put(endpoint, data, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // DELETE request
    async delete(endpoint, config = {}) {
        try {
            const response = await this.api.delete(endpoint, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // PATCH request
    async patch(endpoint, data = {}, config = {}) {
        try {
            const response = await this.api.patch(endpoint, data, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Set authentication header
    setAuthToken(token) {
        this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    // Remove authentication header
    removeAuthToken() {
        delete this.api.defaults.headers.common['Authorization'];
    }

    // Handle errors
    handleError(error) {
        if (error.response) {
            // Server responded with error status
            return {
                status: error.response.status,
                message: error.response.data?.message || 'Server error',
                data: error.response.data
            };
        } else if (error.request) {
            // Network error
            return {
                status: 0,
                message: 'Network error',
                data: null
            };
        } else {
            // Other error
            return {
                status: 0,
                message: error.message,
                data: null
            };
        }
    }
}

module.exports = APIService;