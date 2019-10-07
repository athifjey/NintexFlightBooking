Release notes:

App name: nintexv1
version: 0.0.1
Release date: 08 Oct 2019

Contents:

I. Functional features
II. Technical features
III. Known issues
IV. Pre-requisites
V. Application deployment

________________________________________________________________________________________________

I. Functional features implemented:

    1. Application header will have the following features
        a. Nintex logo
        d. Notification icon - Feature not available yet
        f. Link to nintex facebook page
        g. Link to nintex Instagram page
    2. Flight search page is made the home page.
    3. Input fields are : Departure city, Arrival city, Departure date and Arrival date
    4. No of passengers field is not available in the firm.
    5. The search form will have a Search button and reset button. 
    6. Following validations have been implemented and unt tests have also been written for the same.
        i. Departure and Arrival city should be max 3 characters. The field shall include only alphabets and numbers.
        ii. No field should be left empty. 
        iii. The departure date cannot be greater than arrival date when the search button is clicked. 
        iv. The Search button will  be disabled if any one of the fields are invalid. 
    7. On successful search query, the API is called and respective info is displayed in the next screen. 
    8. All results are displayed in row airline icon, airline name, departure and arrival city names, the travelling hours and fare, with a Book button. 
    9. There is a filter available to filter the search results based on airlines. 
    10. Additional feature: A news ticker is provided to the right that will display live news from around the world.
    11. The search form has been unit tested.
    12. Features for internationalization have been implemented. 
    13. Separate API service has been created to handle all API service calls.

Browser compatibility: Use screen with width greater than 1280px. Best viewed in last 3 latest Chrome versions, can also be viewed on mobile and tablet.

    
II. Technical features:

    1. The application is developed using Angular 7
    2. The UI components are developed using Angular material design
    3. This is a responsive application. Flex layout has been used mixed with media queries to achieve responsiveness.
    4. The search form component uses reactive form.
    5. The header is implemented using mat-toolbar
    6. The routing is handled using angular router
    7. The API calls are handled using Angular HttpClient
    8. convert-uts pipe has been used to convert UTC time to local time.
    9. Custom loaders are used to hand page loading
    10. Implemented polyfills for cross browser compatibility
    11. A production build of the app is kept at build/nintexBuild. The main.js is rendered with ~800kb. Its an AOT build. 
    12. The app is lightweight, sized at ~1mb.
    13. To create a new build, run '$npm run prod-build'
     

III. Known issues

IV. Pre-requisites

To run this application, following are the pre-requisites

    1. node version: v10.13.0
    2. npm version: 6.4.1

IV. Application Deployment

    Run the following commands to start the Angular application

    $ yarn install
    $ npm run start
    $ open http://localhost:4500

Author:

Athif J

Mail @: athifbijli@gmail.com
Call @: +91 9944089079 (India)
GitHub: https://github.com/athifjey