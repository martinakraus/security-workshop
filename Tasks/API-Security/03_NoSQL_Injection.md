# No-SQL Injection

## Find a way to get free coupons without knowing the coupon code.

1. Login to the application from http://localhost:8888/login
2. Click Shop in the navbar to visit http://localhost:8888/shop
3. Try to add a Coupon and investigate the Response body (which should return a failure of validating the coupon)
4. Manipulate the Request by sending `{ "$ne": 1 } ` as a value for the coupon-Property
