# Broken Object Level Authorization

## Task: Access mechanic reports of other users

1. Login to the application from http://localhost:8888/login
2. After adding a vehicle, we will have an option to send service request to mechanic by using the Contact Mechanic option (you need to send your VIN inside the body).
3. Observe the request sent after the Send Service Request. In the response of /workshop/api/merchant/contact_mechanic, we will be able to find the hidden API endpoint in report_link.
4. Go to the link present as value in report_link.
5. Change the value of report_id in the request and send it to access mechanic reports of other users.

