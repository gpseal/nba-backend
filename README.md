# intro-app-dev-2022-project-1-node-js-rest-api-gpseal

intro-app-dev-2022-project-1-node-js-rest-api-gpseal created by GitHub Classroom
cvb

****To run locally:****
- Clone repository to local PC
- Open a terminal and proceed with the following:
- Install dependencies: $ npm install
- Create .env file: $ cp example.env .env
- Open .env file and complete with appropriate values
- Run app: $ npm start



**To seed data:**
- Adjust or add data to /data files
- To seed data: $ records:create
- To delete all data: $ records:delete



**Postman API**

https://documenter.getpostman.com/view/19952142/Uyr4KKjD#09b58324-b76e-4f42-bcaf-b6e065231108


**Heroku API**

https://id607001-sealgp1.herokuapp.com

**To deploy to Heroku**
- Login to heroku.com
- select the **"new"** dropdown menu and choose **"Create new app"**
- Enter your chosen application name
- Select the **"Deploy"** tab, choose **GitHub** deployment
- Find and select the appropriate reprository to connect to
- New options will appear, enable **automatic deploys** and choose the appropriate branch to deploy from
- Under the **"settings"** tab, click **"Reveal Config Vars"**
- Enter MONGO_URI (from .env) and the appropriate string to connect to mongodb
- Enter JWT_SECRET (from .env) and the appropriate string to set tocken password
- Enter JWT_LIFETIME (from .env) and the appropriate value to set token lifespan
- Copy the generated URL and use as required

# References
- Kanna, M. (20). How to Check if a JavaScript Array is Empty or Not with .length. freeCodeCamp. https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length
- Tarpara, R. (2018, Oct 11). How to deal when calling a wrong endpoint using app.get? [Online forum post]. Stack Overflow. https://stackoverflow.com/questions/52552150/how-to-deal-when-calling-a-wrong-endpoint-using-app-get
- freeCodeCamp.org. (2018, September 13). MongoDB Full Tutorial w/ Node.js, Express, & Mongoose [Video]. YouTube. https://www.youtube.com/watch?v=4yqu8YF29cU
- Saturday Developer. (2020, July 29). Add Pagination using Node,Express, Mongo DB [Video]. YouTube. https://www.youtube.com/watch?v=1KTK6JplLLw
