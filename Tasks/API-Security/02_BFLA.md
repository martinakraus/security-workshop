# Broken Function Level Authorization

## Task: Increase your balance by $1,000 or more

1. Login to the application from http://localhost:8888/login
2. Click Shop in the navbar to visit http://localhost:8888/shop
3. There is an initial available balance of $100. Try to order the Seat item for $10 from the shop by using the Buy button and observe the request sent.
4. On observing the POST request /workshop/api/shop/orders, it can be observed that credit has been reduced by $10 and the current available balance is $90.
5. With this knowledge, we can try to send the captured POST request /workshop/api/shop/orders to Repeater.
6. Try to change the value of quantity in the request body to a negative value and send the request. It can be observed that the available balance has now increased and the order has been placed.
7. Inorder to increase the balance by $1000 or more, provide an appropriate value in the ‘quantity’ (ie: -100 or less) and send the request. It can be observed that the available balance has now increased by $1000 or more.
