# Importing and Exporting Components

## The root component file

In Lesson One we made an **AmazingBoxes** component and a **Component** component😄 that renders it:

We then Imported _Component_ file from the Lesson-one Folder within the Tutorial folder to the _App.jsx_ file. This file is the root component for our app and any app scaffolded with _create-react-app_ or **vite** in our case.

## Exporting and Importing a component

In future we might want to change what appears on the landing page which by default is provided by the root component **App**

#### How to move a component

1. Make a new JS/JSX file to put the components in.
2. Export your function component from that file (using either default or named exports).
3. Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

Just as we did in Lesson One inside the **App.jsx** file we can have the components in the _Components.jsx_ file be in different files in the Lesson Two folder, export them and Import them in the _App.jsx_ file

We now have a root file _App.jsx_ that renders children but with a cleaner file structure

```
import AmazingBox from "./Tutorial/Lesson-Two/AmazingBox";
import Component from "./Tutorial/Lesson-Two/Component";

function App() {
  return (
    <div>
      <Component />
      <div className="flex gap-2 ">
        <AmazingBox />
        <AmazingBox />
        <AmazingBox />
      </div>
    </div>
  );
}

export default App;

```

We also have two separate files

1. **Component.jsx** - that has been exported

```
export default function Component() {
  return (
    <div className="mt-4 mx-2">
      <h1 className="my-4 font-semibold underline text-3xl">Amazing Boxes</h1>
    </div>
  );
}
```

2.  **AmazingBox.jsx** - that has also been exported

```
function AmazingBox() {
    return <div className="h-24 w-24 bg-yellow-300"></div>;
  }


  export default AmazingBox
```

## Default VS Named exports

There are two primary ways to export values with JavaScript: default exports and named exports.

Our examples are based on default exports but you can use both of them in one file

**BUT NOTE**

A file can have only **ONE** default export. A file can have more than one named export

##### Default export

```
Component.jsx
_______________________

export default function Button(){
  return (
    \\\
  )
}

```

##### Named export

```
Component.jsx
_______________________

export function Button(){
  return (
    \\\
  )
}
export function SideBar(){
  return (
    \\\
  )
}

```

##### Named export & One Default export

```
Component.jsx
_______________________

export function Button(){
  return (
    \\\
  )
}
export default function SideBar(){
  return (
    \\\
  )
}

```

How you export your component dictates how you must import it and you will get an error if you try to import a named export the way you would a default export

The table below is how you would import both exports

| Syntax  | Export Statement                      |                Import Statement |
| ------- | :------------------------------------ | ------------------------------: |
| Default | export default function Button( ) { } |   import Button from './Button' |
| Named   | export function Button( ) { }         | import {Button} from './Button' |

Default imports can have any names after the import keyword

e.g import Banana from './Button'

But named imports should maintain their names hence the word **named** imports

**Use default exports if the file exports only one component, and use named exports if it exports multiple components and values.**

