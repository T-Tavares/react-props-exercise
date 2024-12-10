# React and React Props Exercise

### What should be a component ?

-   Things that will refresh / update
-   Things that need dynamic data
-   UI elements that can be reused
-   When you want to break the UI up into more manageable pieces
-   a lot of it is also down to personal preference

### What is Props and Why we use it ?

-   Short for "properties", but you can actually call whatever you want.
-   Props are simply JS Objects
-   A way to pass data to from a parent to a child a component dynamically

### When do we use props ?

-   Data Flow
-   Reusability
-   Custom Behavior
-   Control

## Exercise - Mission Flix

![Exercise final result](src/assets/image.png)

1 - Add Props to MovieCard.jsx
2 - Import and add MovieCard to App.js
3 - Add MovieCard component to our <div className="movies-gallery">
3 - Copy a random movie from our database.js to App.js (save it in a variable)
4 - Use that movie variable you just created to feed / pass the props you setup on MovieCard (From App.jsx to the MovieCard component)

## Challenge I

1 - import the Database from database/database.js to our App.jsx and use a random movie from it as a prop to our MovieCard. Pass the Data directly from the database.js

2 - Repeat with a few other movies changing only the random movie.

Hint: You have to access an Object within an array first (The movie) Then you will access the data within this Movie Object.

## Challenge II

1 - Render all movies on the Database with a loop.

Hint: Map loops are the easiest and most common way to achieve that.
