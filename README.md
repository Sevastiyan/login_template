# Custom Project for Login

## Available Scripts

In the project directory, you need to run:
```
npm i
```

The app works with a custom and simple json-server. 

### Server Start
Open a new terminal and make sure that `json-server` is installed in the project folder. 

When installed please run the following command:

```
json-server --port 3001 --watch db.json
```

This will start a new instance on port `3001` To make sure its running simoply open `http://localhost:3001/registeredUser` To see verify that the contents are correct please open `db.json` inside the src folder and verify that the same information is displayed on the address above.

If the server does not start run you can install a JSON server globally on your machine using the command:
```
npm install -g json-server
```

Once that is done please start the app by running the following:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### When Running: 

When the app is running navigate to you should be able to see the login form in the page from the address listed above. The form is located inside `src/components/LoginForm.js` You can use the fields to write your credentials. 

When the  `Login` button is clicked the app will use the login method located in `src/services/login.js`. The `login` method will use a GET request to get the contents of the db.json and compare it with the provided credentials as input.

_**NOTE:** While this is not how it should work in the real world, the backend should be responsilbe for finding the correct user associated with the credentials provided from the frontend form._ 

I am using this method to replicate the actual login process. Typically a service should use the POST request to ask the server if the username and password match and successfully return only when the conditions are met. An alert window will open and be displayed once an error is made.

### Styling the page

I am not great with styling and formatting pages, I have created a CSS file that will serve as the main stylesheet of the page. `src/App.css` is already provided by React and I will write some styling in there.
