# Broken Object Level Authorization

## Preperation

1. Follow QuickStart Guide for crAPI: https://github.com/OWASP/crAPI#quickstart-guide
2. Visit http://localhost:8888 and sign up.
Note: All emails are sent to mailhog service by default and can be checked on http://localhost:8025 
You can change the smtp configuration if required however all emails with domain example.com will still go to mailhog.

## Task: Access mechanic reports of other users

1. Login to the application from http://localhost:8888/login
2. After adding a vehicle, we will have an option to send service request to mechanic by using the Contact Mechanic option (you need to send your VIN inside the body).
3. Observe the request sent after the Send Service Request. In the response of /workshop/api/merchant/contact_mechanic, we will be able to find the hidden API endpoint in report_link.
4. Go to the link present as value in report_link.
5. Change the value of report_id in the request and send it to access mechanic reports of other users.

