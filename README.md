# OMDB Movie Search

This is a simple movie search app that uses omdb api. [OMDB API](http://www.omdbapi.com/).

## Demo app

The is hosted using github pages and can be accessed [HERE](HERE).

## Running app locally

In order to run the app locally you need to run two screipts"

`npm i`

and then

`npm start`

The app will be availeble on `http://localhost:3000`;

## Key dependencies

The app is uses a number of dependencies however the most important are:

- react
- redux
- redux Thunk
- @reduxjs/toolkit
- styled-components
- redux-hook-form
- react-router-dom
- react-testing-library

## Future work

At this stage the app is tested and production ready. However there is always space for improvement.

Some of the future work items would be:

- Adjust css styling for mobile devices
- Allow user to 'go back' from the movie details page to movie list, without reloading the movie list.
- Add more advanced search allowing the user to specify year.
- Introduce integration test and full e2e tests with cypress.
