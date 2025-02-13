## App Layout
**Header**
  - Logo
  - Nav Items

 **Body**
 - Search
 - Restaurant Container
 - Restaurant Card
    - Dish Name
    - Image
    - Restaurant Name
    - Rating
    - Cuisines
    - Time to Deliver

 **Footer**
 - Copyright
 - Links
 - Address
 - Contact


## There are two types of export/import in JS
1. Named export/import: You can have multiple named exports in a file.
    - Export: `export const name = 'John';`
    - Import: `import { name } from './file.js';`

2. Default export/import: You can only have one default export in a file.
    - Export: `export default name;`
    - Import: `import name from './file.js';`

## React Hooks
1. useState: It is used to manage the state in functional components.
    - Syntax: `const [state, setState] = useState(initialState);`
2. useEffect: It is used to perform side effects in functional components.
    - Syntax: `useEffect(() => { // code }, [dependencies]);`

## React Lifecycle Methods
1. Mounting
    - constructor()
    - render()
    - componentDidMount()
2. Updating
    - render()
    - componentDidUpdate()
3. Unmounting
    - componentWillUnmount()
For more reference [React-Lifecycle-methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


## Setting up Testing in our app
- Install React Testing Library
- Install jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest: `npx jest --init`
- Install jsdom library to run tests in the browser environment
- Install @babel-preset-react : To transpile JSX code `npm install @babel/preset-react`
- Include @babel/preset-react in `babel.config.json` file
- Install jest-dom library to use custom matchers for Jest `npm install @testing-library/jest-dom`