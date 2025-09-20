const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Post = require('./models/Post');

// Load env vars
dotenv.config();

// Connect to database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

// Sample users data
const users = [
    {
        name: 'Admin User',
        email: 'admin@zerra.com',
        password: 'admin123',
        role: 'admin',
        isVerified: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        role: 'user',
        isVerified: true
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123',
        role: 'user',
        isVerified: true
    },
    {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        password: 'password123',
        role: 'user',
        isVerified: false
    }
];

// Sample posts data
const posts = [
    {
        title: 'Welcome to Zerra Platform',
        content: 'This is the first post on our new platform. We are excited to share this journey with you and look forward to building an amazing community together.',
        category: 'general',
        status: 'published',
        tags: ['welcome', 'announcement', 'community']
    },
    {
        title: 'Getting Started with Our API',
        content: 'Learn how to integrate with our powerful API. This guide will walk you through authentication, making requests, and handling responses effectively.',
        category: 'technology',
        status: 'published',
        tags: ['api', 'tutorial', 'development']
    },
    {
        title: 'Best Practices for Content Creation',
        content: 'Creating engaging content is key to success on any platform. Here are some proven strategies to help you create content that resonates with your audience.',
        category: 'education',
        status: 'published',
        tags: ['content', 'writing', 'tips']
    },
    {
        title: 'Building a Strong Online Presence',
        content: 'In today\'s digital world, having a strong online presence is crucial for businesses and individuals alike. This post covers the fundamentals of digital branding.',
        category: 'business',
        status: 'draft',
        tags: ['branding', 'online', 'marketing']
    }
];

// Import data
const importData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await User.deleteMany();
        await Post.deleteMany();
        console.log('Existing data cleared...');

        // Create users
        const createdUsers = await User.create(users);
        console.log(`${createdUsers.length} users created...`);

        // Add author to posts and create them
        const postsWithAuthors = posts.map((post, index) => ({
            ...post,
            author: createdUsers[index % createdUsers.length]._id
        }));

        const createdPosts = await Post.create(postsWithAuthors);
        console.log(`${createdPosts.length} posts created...`);

        // Add some likes and comments to posts
        for (let i = 0; i < createdPosts.length; i++) {
            const post = createdPosts[i];
            
            // Add random likes
            const numLikes = Math.floor(Math.random() * 5) + 1;
            for (let j = 0; j < numLikes; j++) {
                const randomUser = createdUsers[Math.floor(Math.random() * createdUsers.length)];
                if (!post.likes.some(like => like.user.toString() === randomUser._id.toString())) {
                    post.likes.push({ user: randomUser._id });
                }
            }

            // Add random comments
            const numComments = Math.floor(Math.random() * 3) + 1;
            const sampleComments = [
                'Great post! Very informative.',
                'Thanks for sharing this valuable information.',
                'I found this really helpful.',
                'Looking forward to more content like this.',
                'Excellent points made here.'
            ];

            for (let j = 0; j < numComments; j++) {
                const randomUser = createdUsers[Math.floor(Math.random() * createdUsers.length)];
                const randomComment = sampleComments[Math.floor(Math.random() * sampleComments.length)];
                post.comments.push({
                    user: randomUser._id,
                    text: randomComment
                });
            }

            // Set random view count
            post.views = Math.floor(Math.random() * 100) + 10;
            
            await post.save();
        }

        console.log('Sample data imported successfully!');
        console.log('\nSample user accounts:');
        console.log('Admin: admin@zerra.com / admin123');
        console.log('User: john@example.com / password123');
        console.log('User: jane@example.com / password123');
        console.log('User: mike@example.com / password123');
        
        process.exit(0);
    } catch (error) {
        console.error('Error importing data:', error);
        process.exit(1);
    }
};

// Delete data
const deleteData = async () => {
    try {
        await connectDB();
        
        await User.deleteMany();
        await Post.deleteMany();
        
        console.log('All data deleted successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error deleting data:', error);
        process.exit(1);
    }
};

// Run based on command line arguments
if (process.argv[2] === '-d') {
    deleteData();
} else {
    importData();
}

module.exports = { importData, deleteData };