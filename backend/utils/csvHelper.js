const csv = require('csv-parser');
const fs = require('fs');

// Parse CSV file
const parseCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

// Convert object to CSV string
const objectToCSV = (data) => {
    if (!data.length) return '';
    
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => 
        Object.values(row).map(value => 
            typeof value === 'string' && value.includes(',') 
                ? `"${value}"` 
                : value
        ).join(',')
    ).join('\n');
    
    return `${headers}\n${rows}`;
};

// Save data to CSV file
const saveToCSV = (data, filePath) => {
    const csvString = objectToCSV(data);
    fs.writeFileSync(filePath, csvString);
};

module.exports = {
    parseCSV,
    objectToCSV,
    saveToCSV
};