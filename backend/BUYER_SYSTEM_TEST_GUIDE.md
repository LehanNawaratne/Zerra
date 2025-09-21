# Buyer Crop Reservation System - Complete Test Guide

## 🛒 **Buyer & Farmer System Testing**

### Prerequisites
1. Server running on: `http://localhost:5000`
2. MongoDB connected
3. Valid JWT tokens for both buyer and farmer accounts
4. Existing crops in the database

---

## 🌾 **Step 1: Setup Test Data (Farmer Creates Crops)**

### Add Sample Crops (Farmer Account)
```bash
# Farmer adds Tomatoes
curl -X POST http://localhost:5000/api/v1/crops \
-H "Content-Type: application/json" \
-H "Authorization: Bearer FARMER_JWT_TOKEN" \
-d '{
  "name": "Organic Tomatoes",
  "type": "vegetable",
  "plantingDate": "2024-02-15",
  "harvestDate": "2024-05-15",
  "status": "current",
  "totalQuantity": 100,
  "availableQuantity": 100,
  "pricePerUnit": 5.50
}'
```

```bash
# Farmer adds Corn
curl -X POST http://localhost:5000/api/v1/crops \
-H "Content-Type: application/json" \
-H "Authorization: Bearer FARMER_JWT_TOKEN" \
-d '{
  "name": "Sweet Corn",
  "type": "grain",
  "plantingDate": "2024-03-01",
  "harvestDate": "2024-07-01",
  "status": "current",
  "totalQuantity": 200,
  "availableQuantity": 200,
  "pricePerUnit": 3.25
}'
```

**Expected:** `201 Created` with crop data including inventory fields

---

## 🛒 **Step 2: Buyer Browse Crops**

### Browse All Available Crops
```bash
curl -X GET http://localhost:5000/api/v1/crops/browse \
-H "Authorization: Bearer BUYER_JWT_TOKEN"
```

**Expected Results:**
- `200 OK` with array of current crops only
- Each crop shows: name, type, availableQuantity, pricePerUnit, farmer info
- Only crops with `status: "current"` are shown
- Farmer details are populated

### Filter Crops by Type
```bash
# Get only vegetables
curl -X GET "http://localhost:5000/api/v1/crops/browse?type=vegetable" \
-H "Authorization: Bearer BUYER_JWT_TOKEN"
```

**Expected:** Only vegetable crops returned

---

## 🛒 **Step 3: Buyer Reserve Crops**

### Make Valid Reservation
```bash
curl -X POST http://localhost:5000/api/v1/crops/CROP_ID/reserve \
-H "Content-Type: application/json" \
-H "Authorization: Bearer BUYER_JWT_TOKEN" \
-d '{
  "reservedQuantity": 25,
  "pricePerUnit": 5.50,
  "notes": "Need for restaurant supply"
}'
```

**Expected Results:**
- `201 Created` with reservation details
- Crop's `reservedQuantity` increased by 25
- Crop's `availableQuantity` decreased by 25
- Total price automatically calculated

### Try to Over-Reserve
```bash
curl -X POST http://localhost:5000/api/v1/crops/CROP_ID/reserve \
-H "Content-Type: application/json" \
-H "Authorization: Bearer BUYER_JWT_TOKEN" \
-d '{
  "reservedQuantity": 999,
  "pricePerUnit": 5.50
}'
```

**Expected:** 
- `400 Bad Request`
- Error message showing available vs requested quantity

### Try to Reserve Own Crop (Should Fail)
```bash
# Farmer tries to reserve their own crop
curl -X POST http://localhost:5000/api/v1/crops/THEIR_CROP_ID/reserve \
-H "Content-Type: application/json" \
-H "Authorization: Bearer FARMER_JWT_TOKEN" \
-d '{
  "reservedQuantity": 10,
  "pricePerUnit": 5.50
}'
```

**Expected:** `400 Bad Request` - "You cannot reserve your own crop"

---

## 🛒 **Step 4: View Reservations**

### Buyer Views Their Reservations
```bash
curl -X GET http://localhost:5000/api/v1/my-reservations \
-H "Authorization: Bearer BUYER_JWT_TOKEN"
```

**Expected:**
- `200 OK` with buyer's reservations
- Each reservation shows crop details and farmer info
- Sorted by creation date (newest first)

### Farmer Views Crop Reservations
```bash
curl -X GET http://localhost:5000/api/v1/farmer-reservations \
-H "Authorization: Bearer FARMER_JWT_TOKEN"
```

**Expected:**
- `200 OK` with reservations for farmer's crops
- Each reservation shows buyer details and crop info
- Shows who reserved what and when

---

## 🌾 **Step 5: Farmer Manages Reservations**

### Confirm a Reservation
```bash
curl -X PUT http://localhost:5000/api/v1/reservations/RESERVATION_ID/status \
-H "Content-Type: application/json" \
-H "Authorization: Bearer FARMER_JWT_TOKEN" \
-d '{
  "status": "confirmed"
}'
```

**Expected:** `200 OK` with updated reservation status

### Complete a Reservation
```bash
curl -X PUT http://localhost:5000/api/v1/reservations/RESERVATION_ID/status \
-H "Content-Type: application/json" \
-H "Authorization: Bearer FARMER_JWT_TOKEN" \
-d '{
  "status": "completed"
}'
```

**Expected:** `200 OK` with status = "completed"

---

## 🧪 **Step 6: Inventory Testing**

### Check Crop Inventory After Reservations
```bash
curl -X GET http://localhost:5000/api/v1/crops/browse \
-H "Authorization: Bearer BUYER_JWT_TOKEN"
```

**Verify:**
- `availableQuantity` = `totalQuantity` - `reservedQuantity`
- Fully reserved crops show `availableQuantity: 0`
- Pricing information is accurate

### Multiple Reservations Test
```bash
# Make several small reservations for the same crop
curl -X POST http://localhost:5000/api/v1/crops/CROP_ID/reserve \
-H "Content-Type: application/json" \
-H "Authorization: Bearer BUYER_JWT_TOKEN" \
-d '{"reservedQuantity": 10, "pricePerUnit": 5.50}'

curl -X POST http://localhost:5000/api/v1/crops/CROP_ID/reserve \
-H "Content-Type: application/json" \
-H "Authorization: Bearer BUYER2_JWT_TOKEN" \
-d '{"reservedQuantity": 15, "pricePerUnit": 5.50}'
```

**Expected:** 
- Both reservations succeed if enough quantity
- `reservedQuantity` accumulates correctly
- `availableQuantity` decreases with each reservation

---

## ✅ **Expected System Behavior**

| Action | Buyer Experience | Farmer Experience |
|--------|------------------|-------------------|
| **Browse Crops** | See all available crops with inventory | N/A |
| **Reserve Crop** | Instant reservation (non-cancellable) | Notification of reservation |
| **View Reservations** | See all their reservations | See all reservations for their crops |
| **Inventory Updates** | See real-time availability | See reserved quantities |
| **Status Updates** | View status changes | Can confirm/complete reservations |

---

## 🚨 **Error Scenarios to Test**

1. **Authentication:** All endpoints require valid JWT
2. **Authorization:** Buyers can't reserve own crops
3. **Inventory:** Can't reserve more than available
4. **Validation:** Required fields must be provided
5. **Not Found:** Invalid crop/reservation IDs return 404
6. **Business Logic:** No cancellation endpoints exist

---

## 📊 **Test Results Checklist**

- [ ] Buyers can browse all current crops
- [ ] Buyers can filter crops by type
- [ ] Inventory shows correct available quantities
- [ ] Reservations reduce available quantity
- [ ] Over-reservations are rejected
- [ ] Self-reservations are blocked
- [ ] Buyers can view their reservations
- [ ] Farmers can view crop reservations
- [ ] Farmers can update reservation status
- [ ] No cancellation functionality exists
- [ ] All endpoints require authentication
- [ ] Error messages are clear and helpful

---

## 🎯 **Success Criteria**

✅ **Complete buyer workflow** from browse → reserve → view  
✅ **Proper inventory management** with real-time updates  
✅ **Secure operations** with authentication & authorization  
✅ **Non-cancellable reservations** as per requirements  
✅ **Farmer visibility** into their crop reservations  

The buyer crop reservation system is fully functional! 🌾🛒