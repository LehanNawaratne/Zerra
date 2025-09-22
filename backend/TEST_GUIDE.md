# Crop Management API Testing Guide

## Test Endpoints

### Prerequisites
1. Start your server: `npm run dev` (from backend folder)
2. Server should run on: http://localhost:5000

### API Endpoints to Test

#### 1. GET All Crops
```
GET http://localhost:5000/api/crops
```

#### 2. GET Current Crops Only
```
GET http://localhost:5000/api/crops?status=current
```

#### 3. GET Planned Crops Only
```
GET http://localhost:5000/api/crops?status=planned
```

#### 4. POST Add New Crop
```
POST http://localhost:5000/api/crops
Content-Type: application/json

{
  "name": "Tomatoes",
  "type": "vegetable",
  "plantingDate": "2024-03-15",
  "harvestDate": "2024-06-15",
  "status": "current",
  "quantity": 50
}
```

#### 5. PUT Update Crop
```
PUT http://localhost:5000/api/crops/CROP_ID
Content-Type: application/json

{
  "name": "Cherry Tomatoes",
  "quantity": 75
}
```

#### 6. DELETE Crop
```
DELETE http://localhost:5000/api/crops/CROP_ID
```

## Expected Responses

✅ All endpoints should return JSON responses
✅ POST should create crop and return crop data
✅ GET should return array of crops
✅ PUT should return updated crop data
✅ DELETE should return success message
✅ All crops should be linked to authenticated user

## Test with Postman, Insomnia, or curl