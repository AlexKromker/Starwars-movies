# Star Wars Movies / SWAPI API

Displays a table containing Star Wars movies. Any movie can be clicked on to redirect the user to a details page. Once there the user can click on any character, planet, species, starship or vehicle for some extra information.

This project was created with [Create React App](https://github.com/facebook/create-react-app).
Using API from [SWAPI](https://swapi-node.now.sh).

# App folder structure

```
── src
  ├── components
  ├── pages
  ├── shared
    ├── api
    ├── assets
      ├── images
      ├── styles
    ├── hooks
    ├── routes
    ├── store
    ├── utils
```

- 'components': Folder for all components
- 'pages': Folder containing one folder for each route
- 'shared/assets': Folder containing all assets
- 'shared/assets/styles/variables': File containing all scss variables including breakpoints and main colors used
- 'shared/routes': Folder containing all route logic
- 'shared/store': Folder containing logic for shared redux store(slices are imported from pages/components)

# Packages used

- Jest: Testing tool to verify FE stability.
- Axios: A promise-based http client used for making asynchronous requests. Axios allows you to create request and response interceptors and create baseApi's allowing you to specify the endpoint for an api once and use it repeatedly.
- Classnames: Used to conditionally add classes to elements (Also allows classes to be overwritten if some are passed from parent elements).
- Redux: State management library used to store and mutate data accross the site.
- SASS: Syntactically Awesome Style Sheets is a css extension used to organize and nest css classes and allows for usage of mixins, functions, @directives and more.
- TypeScript: A javascript superset that enforces strict use of types.

# Table implementation

Table is strictly a visual component, having all rows, headers and callbacks passed through props.
For the table content, only the properties specified in the header are mapped, allowing the callbacks to have access to properties not intended to be displayed (e.g the object url)

# Demo site

Feel free to go to my [starwars moveis demo site](https://starwars-movies-seven.vercel.app/film-details) for a quick preview.
