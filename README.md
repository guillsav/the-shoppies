# The Shoppies

The Shoppies is an application where users can search for movies based on their title and nominate up to 5 movies for awards.

## How to run the app

1. Either fork or download the app and open the folder in the terminal.
2. Install all dependencies using the `yarn install` command.
3. Start the web server using the `yarn start` local command. The app will be served at http://localhost:3000/
4. Go to http://localhost:3000/ in your browser and start searching for movies.

## Live Project

https://the-shoppies-awards.netlify.app/

## How to nominate movies

1. Click on the movie poster of the movie you want to nominate.
2. Scroll down to see that the movie you selected is now in the nominations.

## How to remove a movie from nominations

1. Scroll down to look at your list of nominations.
2. Click on the movie poster of the movie you want to remove.

## User Stories

- A user can search for movies based on title.
- A user can nominate a movie by clicking on it.
- A user can remove a movie from nominations by clicking on it.
- A user can navigate through the pages of movie results.

## Features

- State management with context API.
- Fetch movies from the OMDB API.
- Store selected movies in localStorage.

## Dependencies

- React
- Axios
- React Transition Group
- Styled Components
- Use Reducer Logger (dev dependency)

## Mockups

![alt text](https://github.com/guillsav/the-shoppies/blob/master/Mockup.png)
