# React + TypeScript Todo App
This is an experimental project for setting up environment to run full stack TypeScript application,
i.e. writing Express and React.js with TypeScript. 

## Build & Compile
For compiling the backend source code, I am using `tsc`. 
```
npm run compile
```

For compiling the frontend source code, I am using webpack and `ts-loader`. So far it seems to me
that babel isn't needed. I am getting all the latest ES6/7 features running in my Chrome browser.
```
npm run build
```

## Start Server
Once the compilation is complete, the build folder will have the `server.js` file which you can use
to start the server, or simply type
```
npm start
```