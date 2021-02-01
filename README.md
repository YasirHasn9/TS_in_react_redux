# TS_in_react_redux
## Practicing Typescript with React/Redux 
Just a simple app that display a button on screen, once the client presses , it will fetch fake data(Fake Api ) to bring a todo list. The todo will be removed once we click on it.

### The benefits/pros of using TS with ReRe --> React/Redux ;)?
1. easier to find the common typos
2. better understanding of the flowing data around the app
3. easier to refactor
--------------------
** Note **
When using a pure js in redux with react we cant catch the error right and also if we want to change something we have to change it manually.
with TS , we can easily spot the error in our editor because we are gonna get notations telling us where we need to make a change    



### The cons of TS ?
1. not the best type definition 
2. tons of generic 
3. tons of imports
4. Redux inherently functional in nature, tough integration with TS classes.


### Setup
to create a react app with ts using the following command line
`npx create-react-app app-name --template typescript`
this will make sure to turn your files into ts.


### TS in class based component 
```js
class App extends React.Component<TypesOfProps , TypesOfState>{
    constructor(props:TypesOfProps){
        super(props)
    }
    render(){
        return(
            <div>Element</div>
        )
    }
}
```

### TS in functional based component 
```js

function  App(props:TypesOfProps):JSX.Element{
    return(
        <div>Element</div>
    )
}
```


### Now, lets play with react and redux
since we are gonna fetch data, we need to install third-party called axios that helps with that.
Also , we need the redux, react-redux and middle ware package manager called redux-thunk
`npm install axios redux react-redux redux-thunk`