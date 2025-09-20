const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// @desc    Generate content using Google AI
// @route   POST /api/ai/generate
// @access  Private
exports.generateContent = async (req, res, next) => {
    try {
        const { prompt, model = 'gemini-pro' } = req.body;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: 'Prompt is required'
            });
        }

        // Get the generative model
        const generativeModel = genAI.getGenerativeModel({ model });

        // Generate content
        const result = await generativeModel.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({
            success: true,
            data: {
                prompt,
                generatedText: text,
                model: model,
                timestamp: new Date()
            }
        });
    } catch (error) {
        console.error('AI Generation Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error generating content',
            error: error.message
        });
    }
};

// @desc    Generate content with custom parameters
// @route   POST /api/ai/generate-advanced
// @access  Private
exports.generateAdvancedContent = async (req, res, next) => {
    try {
        const { 
            prompt, 
            model = 'gemini-pro',
            maxTokens,
            temperature,
            topP,
            topK
        } = req.body;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: 'Prompt is required'
            });
        }

        // Configure generation parameters
        const generationConfig = {};
        if (maxTokens) generationConfig.maxOutputTokens = maxTokens;
        if (temperature !== undefined) generationConfig.temperature = temperature;
        if (topP !== undefined) generationConfig.topP = topP;
        if (topK !== undefined) generationConfig.topK = topK;

        // Get the generative model with config
        const generativeModel = genAI.getGenerativeModel({ 
            model,
            generationConfig
        });

        // Generate content
        const result = await generativeModel.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({
            success: true,
            data: {
                prompt,
                generatedText: text,
                model,
                generationConfig,
                timestamp: new Date()
            }
        });
    } catch (error) {
        console.error('AI Generation Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error generating content',
            error: error.message
        });
    }
};