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
- 'shared/routes': Folder containing all route logic
- 'shared/store': Folder containing logic for shared redux store(slices are imported from pages/components)

# Table implementation

Table is strictly a visual component, having all rows, headers and callbacks passed through props.
For the table content, only the properties specified in the header are mapped, allowing the callbacks to have access to properties not intended to be displayed (e.g the object url)
