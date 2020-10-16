## Project Requirements:
1. The main screen will then need to present with the Pokemon name and image. You may use any layout.
2. is redirected to a detail screen explained on step 3
3. The user should see a minimum of six descriptions with info plus your image. You may use any layout.
4. Use pagination
5. Unit & UI tests
6. Adapt UI so it can be displayed in different screen sizes (e.g Mobile)


## Solution Explanation
This project uses React as framework, and i'm using React Bootstrap for the UI and React Router for navigation. I tried first to "check" all the "mandatory" requirements, and then, add as many features as possible or improve the code for the already existing features. 

With React, i made use of Hooks, and the state is stored on the main ``<App/>`` component. The size of this project didn't require any complex state managment library like Redux or Mobx. For the UI i used Boostrap, as it already provides some baseline CSS and Componetns, and made the development of this project alot faster. I also used React Router to trigger a screen change, when clicking on a pokemon on the list. For the requests i wrote a class that provides static methods to access the PokeAPI, and it's the app itself that handles the pagination (via URL parameters). I also wrote some utility code to manipulate some strings in order to transform names and access the query parameters.

I did my best to write meaningfull tests, but testing is so new to me that i had to plunge on the testing library docs, but i wrote four tests that test if the components are being rendered on the page

## Setup

1. Clone this repository   
    ```sh
    https://github.com/alicescfernandes/pokemon-react.git
    ```


2. Install the packages  
    ```sh 
    yarn
    ```
    or

    ```sh
    npm install
    ```


3. Start the development server with  
    ```sh
    yarn start
    ```
    or

    ```sh
    npm run start
    ```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
