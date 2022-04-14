# intro-app-dev-2022-project-1-node-js-rest-api-gpseal

intro-app-dev-2022-project-1-node-js-rest-api-gpseal created by GitHub Classroom
cvb

****To run locally:****
- Clone repository to local PC
- Install dependencies: $ npm install
- Add .env file to root directory with relevant information inserted
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
- Enter MONGO_URI (from .env) to connect to mongodb
- Enter JWT_SECRET (from .env) to set tocken password
- Enter JWT_LIFETIME (from .env) to set token lifespan
- Copy the generated URL and use as required
