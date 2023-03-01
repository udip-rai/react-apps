# My personal + professional portfolio resume ?

## Commit 00

- Initialized project with Create React App

## Commit 01

### git commit -m "01 - Created a project env with good folder structure"

- I installed a Typescript React project with yarn.
- Created a neat folder structure and installed npm dependencies.
- Provided a route endpoint where every page/component can access.
- Made a CustomTheme to make changes to the default theme.

## Commit 02

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

## Commit 03

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
  - temperature in C or F, fulldate & time from UNIX timestamp
  - find weather conditon based on the values
  - find the weather image based on the weather conditon etc.
