# My personal + professional portfolio resume ?

## Todos

**Weather app**

- Modify the toast error msg into something more meaningful as -
  - Error 400, Type Error etc are hard to catch for normal people
- Create a hook that that calls axios requests in 1 call
- Update all the types that were marked as any (bad practice)

## All my commits

## Commit 00

- Initialized project with Create React App

### git commit -m "01 - Created a project env with good folder structure"

- I installed a Typescript React project with yarn.
- Created a neat folder structure and installed npm dependencies.
- Provided a route endpoint where every page/component can access.
- Made a CustomTheme to make changes to the default theme.

### git commit -m "02 - Managed Layouts, Pages, Context, Routes & added images"

- Added pages for (Apps & Websites)
- Designed a Layout that will be used in every page rendering.
- Created a context to change the color for dark/light mode across the whole project.
- Needed to add an ErrorBoundary component for context, which is actually helpful in all.
- I had actually forgotten to use the custom theme that I made before in ChakraProvider. My bad.
- Also forgot to wrap the component with Context Provider. Solved all the pertaining issues.
- Downloaded tons of free pics from & SVG images:
  - [FlatIcon](https://www.flaticon.com/)
  - [FreePik](https://www.freepik.com/)

### git commit -m "03 - Major changes in responsive design with components, hooks & contexts"

- Divided the weather app into 3 major components and other sub-components as per need.
- Put responsive design on every component with Global CSS stylings.
- Created a context to change the color for dark/light mode across the whole project.
- Frontend part of weather app completed
- Created a json file in the project which I copied from postman so
  - I can test the values like in the real API
  - A lot of API calls will result in API not working
  - The real API will replace the json making it dynamic later
- Added to utils part which contain logical operations like-
  - temp in C or F, fulldate & time from UNIX timestamp
  - find weather conditon based on the values
  - find the weather image based on the weather conditon etc.

### git commit -m "04 - Tested with json files for search functionality"

- Converted objects to arrays with Object.values()
- Converted 2d Array to 1d with Array.flat(1)
- Used Axios to send GET requests (no post request unfortunately)
- Added use-debounce yarn package for to control the time when search-box displays output
- Actually Im not gonna use debounce. Gonna apply the good old hard-codin' everything
- I also added a hook that makes component visible on click & closes when clicked anywhere else (except that component).
- Added some toast messages for status messages

### git commit -m "05 - Worked with REST API and got required results"

- Modified json file from API such that main components get the required props
- Used 3 different APIs,
  - 2 APIs from OpenWeather
    - One to fetch city names after the user hits Enter so that I dont have to call the other apis if this one fails (THIS API needs the API_KEY & city name)
    - Another one to fetch details of the weather of the entered city/place name (This API needs API_KEY & city name)
  - 1 BigDataCloud from BigDataCloud
    - In order to get the specific details of the city like accurate location of the place (This API needs API_KEY & Latitude/Longitude both)

### git commit -m "06 - Refractored codes & End of Weather App"

- Refractored codes on states since they were rendering way more than normal
- Special thanks to Senny dai/dada for pointing it out that I dont need to put in all the states in 1 place/component
- Perfected the debouncing concept with timer & setTimer
  - this is so much fun, I dont have to rely on useEffect that much anymore now
- Found out reasons of components to re-render:
  - Outside useEffect, Consoling logs that require values/states
  - Creating random keys from Math.random() for mapped elements
- Extra tip: If you declared a dynamic key on input text,
- the input text focuses out after you type on each key pressed
- this is due to the input component being rendered again with the new dynamic key
- Added slight stylings for user-feel and exp. (tooltip and error messages)

### git commit -m "07 - Fixed warning msg. shown while building in netlify"

- Could not deploy to netlify as the build failed
  - I had a unused variable declaration in code which I fixed just now
- Lets hope it deploys for real now fr fr

### git commit -m "08 - Managed UI/UX and cleared bugs in axios & slider"

- Fixed slider bug by making sure the values are not returned as undefined
- Location name was long, I made it responsive by splicing to fine-tune UI
- Customized the Loading Spinner into something better
- Web API Error - This request has been blocked; the content must be served over HTTPS
  - <ins>In order to solve it: Added these to meta tag inside index.html</ins>
    - http-equiv="Content-Security-Policy"
    - content="upgrade-insecure-requests"
- Added a popover on footer
