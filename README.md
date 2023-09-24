# intro-app-dev-2022-project-1-node-js-rest-api-gpseal


****To run locally:****
- Clone repository to local PC
- Open a terminal and proceed with the following:
- Install dependencies: $ npm install
- Create .env file: $ cp example.env .env
- Open .env file and complete with appropriate values
  - MONGO_URI = [string to connect to mongodb]
  - JWT_SECRET = [string to set tocken password]
  - JWT_LIFETIME = [value to set token lifespan]
- Run app: $ npm start
<br>



**To seed data:**
- Adjust or add data to /data files
- To seed data: $ npm run records:create
- To delete all data: $ npm run records:delete
<br>


**Postman Documentation**

https://documenter.getpostman.com/view/19952142/Uyr4KKjD
<br><br>

**Render URL**

https://nba-api-bvui.onrender.com
<br><br>

**To deploy to Render**
- Login to render.com
- select the **"new +"** dropdown menu and choose **"Web Service"**
- Choose "Build and deploy from a Git repository"
- Enter your chosen application name
- Select the **"Deploy"** tab, choose **GitHub** deployment
- Find and select the appropriate reprository to connect to and press "connect"
- Enter a name
- Enter 'npm install' as the build command
- Enter 'npm start' as the start command
- Towards the bottom of the page, press 'advanced' to reveal more options
- Enter appropriate Enironmental variables
- Enter MONGO_URI (from .env) and the appropriate string to connect to mongodb
- Enter JWT_SECRET (from .env) and the appropriate string to set tocken password
- Enter JWT_LIFETIME (from .env) and the appropriate value to set token lifespan
- Once statisfied, press the 'Create Web Service' button to complete the process
- Copy the generated URL and use as required

<br>
  
# References
  
- Kanna, M. (20). How to Check if a JavaScript Array is Empty or Not with .length. freeCodeCamp. https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length
- Tarpara, R. (2018, Oct 11). How to deal when calling a wrong endpoint using app.get? [Online forum post]. Stack Overflow. https://stackoverflow.com/questions/52552150/how-to-deal-when-calling-a-wrong-endpoint-using-app-get
- freeCodeCamp.org. (2018, September 13). MongoDB Full Tutorial w/ Node.js, Express, & Mongoose [Video]. YouTube. https://www.youtube.com/watch?v=4yqu8YF29cU
- Saturday Developer. (2020, July 29). Add Pagination using Node,Express, Mongo DB [Video]. YouTube. https://www.youtube.com/watch?v=1KTK6JplLLw
