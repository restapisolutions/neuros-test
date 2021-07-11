# Questionnarie

`What is your preferred reactjs stack today for building a modern SaaS application? What libraries and frameworks would be incl. And why?`

It really depends on the use case, for an SPA I would choose react with Redux and styled components, much like this app.
For applications where the SEO is important I would go with Next.js. I`m a full stack dev and I think it's great that I can have my back end and front end in the same project. 

Redux is nice. I like to keep all the state in the same place.

`How would you approach an application where multiple products and multiple teams working across the application?`

There is a joke that a job with 1 dev that takes 1 month will take 2 months with 2 devs because of the meetings.
I like consensus and I'm open to others opinions and what matters is to do it right. In a case when multiple teams work on the same product, full coverage in tests is super important, to not break other people's work.
A specification is also important to overview what needs to be done and understand how the code should work.

`Design / UI Component system, How would you deal with that? Build one, use a framework (e.g Ant, Materiale UI etc. ) and why your approach?`

I prefer to use an already existing framework if the project has a steep deadline. As I come from a fullstack background, I usually do the backend, front end and then writing a framework for UI/Components can be a bit too much.

If I write a Design/UI framework, I prefer to create a separate library and import it afterwards to divide the project.

`How to ensure good quality and high performance code?`

I like simple things. Code should not be over complicated, the most simple approach is usually the best and most performant.
Generally I prefer to not do too much fancy stuff and a cohesive specification also helps. It's nice to have a spec before and as we iterate on the code, the spec can be adjusted.
Documentation is also super important. I usually write a lot like you can see here.


`Why is testing important, how would you embed it in a team and with what tools?`

Without tests I don't know if the code works. 
Tests also help a lot with refactoring. It's important to get instant feedback about the integrity of the code during refactoring and any future changes can break stuff. I cannot keep everything in my mind, so tests are important to give me confidence that my code does work.

I use CI/CD a lot like  Google Cloud Build, Jenkins and platforms like CircleCi and it's great for teamwork cuz after I push I can see I didn't break the tests the other worker created so we can comfortably work together without sever conflicts in code.

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

## Vulnerabilities
There are Regular Expression Denial of Service and Memory exposure vulnerabilities in the react-scripts dependencies.
This is a problem and common with React and Webpack. I do admit that a custom config will have a lot less vulnerabilities. If you can pin the exact dependencies.
Sadly npm audit fix is worthless and it will actually add more high vulnerability bugs if you run it.


# Dev notes

This App implements the specification at https://github.com/Neurons-inc/Neurons-Frontend-test 

It's running here : https://neuros-react.vercel.app/

Created with create-react-app because using the manual setup, babel was compiling <button onClick={()=>{}}></button> onClick as props instead of an event emitter.
Here is the github repo for the bug, you can see my typecript, jest, webpack and babel config. It works without errors, just the event emitters are not attached.
https://github.com/restapisolutions/babel-bug-reproduction

I was using the latest versions of Babel and the cause could be the dependencies. Dependencies need to be pinned to a specific version and they only work with a specific combination. The last documentation on React's website about manual setup is from 2018 with pinned dependencies that instantly break with newer ones.

As you can see with this setup,"react-scripts": "4.0.3" , these dependencies need to be pinned and used without a caret ^ symbol otherwise it's a liability, preferably to a version without vulnerabilities.

## State management

Because this is a really simple application, I just keep all state in the top component and pass it like props. 
There should be no updateable state in the components lower in the tree cuz that makes the code more complex.
All the state setters and the state itself will be passed down and come from the same place

For a bigger application, I would use Redux , maybe with Async thunk but for this application, that is out of scope.

## Styles

I decided to use styled componentes for this and mostly flex box for arranging things.
All the dimensions of the elements,colors are copied from the CSS on Figma.


## Mistakes I left in:

1. The filtering popup and the search bar has a gap in between when the screen is small. I would need feedback how it should overlap or maybe it should not.

2. The cast is missing the gender icons, they looked weird on the top of the images and then I left them off

3. Episodes filtering menu and functionality. It was not specified what to filter for and I would just repeat a simmilar coding pattern like for the cast filter so I think you guys get the point!


## Bonus:
The UI is tabbable and can be used with a keyboard only.

A test in App.test.tsx to show the pattern of how I test the UI. 
