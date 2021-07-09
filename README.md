# Use

I'm using NPM.

Install dependencies 
`npm install`

Run tests
`npm run test`

Run the App

`npm run start`

build the app

`npm run build`

The config could be ejected but it's not recommended.


# Dev notes

This App implements the specification at https://github.com/Neurons-inc/Neurons-Frontend-test 
with create-react-app because using the manual setup, babel was compiling <button onClick={()=>{}}></button> onClick as props instead of an event emitter.
I was using the latest versions of Babel and the cause could be the dependencies. Dependencies need to be pinned to a specific version and they only work with a specific combination. The last documentation on React's website about manual setup is from 2018 with pinned dependencies that instantly break with newer ones.

As you can see with this setup,"react-scripts": "4.0.3" , these dependencies need to be pinned and used without a caret ^ symbol otherwise it's a liability.

## State management

Because this is a really simple application, I just keep all state in the top component and pass it like props. 
There should be no updateable state in the components lower in the tree cuz that makes the code more complex.
All the state setters and the state itself will be passed down and come from the same place

For a bigger application, I would use Redux , maybe with Async thunk but for this application, that is out of scope.