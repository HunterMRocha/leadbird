## Installation

### Clone repo

``` bash
# clone the repo
$ git clone git@github.com:HunterMRocha/leadbird.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```


## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

see also:
[CRA docs](https://create-react-app.dev/docs/getting-started)
[CoreUi](https://coreui.io/pro/react/)

### Basic usage

``` bash
# dev server with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
Orion-React#V1.0.0
├── public/          #static files
│   └── index.html   #html template
│
├── src/             #project root
│   ├── assets/      #assets - js icons object
│   ├── containers/  #container source - template layout
|   │   ├── _nav.js  #sidebar config
|   │   └── ...      
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── routes.js    #routes config
│   └── store.js     #template state example 
│
└── package.json
```

# User Instructions:


### Accounts Needed: 
<[apispreadhsheets.com](https://apispreadsheets.com/)>

* this website is used to help turn a google sheet into a database that can be used for the web app. Depending on how many campaigns you are running you might need different plans. Rows are the number of google sheet rows & requests are the amount of times the google sheet data is requested

### Steps: 
* Create copy of this spreadsheet: 
<https://docs.google.com/spreadsheets/d/14YRlcU-aPVKP-cKOv0ubL4wAOVL4IdDtTAC3_o6TJ1M/edit#gid=626557051>

* Head to <[apispreadhsheets.com](https://apispreadsheets.com/)> and click 'upload'
* Click Google Sheet
* Choose the google sheet template listed above 
* Locate the API URL and copy the 5 digits(unique number) at the end of the link. It should be like the picture below, and you would just need to copy the unique number at the end. In this instance that would be 14617.
* Change the fields that are all caps to match whatever you want to name your campaign and whatever 5 digit number you received on the api webiste
https://leadbird-data.web.app/#/dashboard?account=UNIQUE_NUMBER&campaign=CAMPAIGN_NAME
* Note: Make sure on the api website the box 'API Private?' in unchecked



# Creator
**Hunter Macias**
* <https://github.com/HunterMRocha>
* <https://www.youtube.com/channel/UCehlaH65-4g7NywRWX0MlkA>



## Copyright and License

copyright 2021 Orion - Hunter Macias   
