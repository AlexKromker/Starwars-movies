# Star Wars Movies / SWAPI API

his project was created with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi-node.now.sh).<br>

# App folder structure

```
── src
  ├── components
  ├── pages
    ├── page
      ├── components
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

<br/>
- `components`: Folder for all shared components
- `pages`: Folder containing one folder for each route
- `pages/components`: Folder containing all components specific to only one route
- `shared/assets`: Folder containing all assets
- `shared/routes`: Folder containing all route logic
- `shared/store`: Folder containing logic for shared redux store(slices are imported from pages/components)<br/>

# Table implementation

Requires only row data, headerItems and click events. All rows are mapped and only properties with keys matching those in the headerItemList are used (other data can still be used inside the clickHandlers such us `rowItem.url`).
