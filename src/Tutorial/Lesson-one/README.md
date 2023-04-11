# Components - UI Building Blocks

## How to build a component
___
1. Export the component
   
   The ==export default== prefix is a standard JavaScript Syntax.
   It helps you mark the main function in a file so that you can later import it from other files

   ```
   export default
   
   ```

2. Define the function

    React components are regular JavaScript functions, but **their names must be in capital letters or they wont work**
   
   ```
   function UserName(){

   }
    ```
3. Add Markup
   
   ```
   return (
    <div>
    <p>Brian Isadia</p>
    </div>
   )
   ```

## Using a component


Now that you have defined your *AmazingBoxes* component, you can nest it inside other components

```
export default function Component (){
  return (
    <div className="mt-4 mx-2">
      <h1 className="my-4 font-semibold underline text-3xl">Amazing-Boxes</h1>
      <div className="flex gap-2 ">
        <AmazingBoxes />
        <AmazingBoxes />
        <AmazingBoxes />
      </div>
    </div>
  );
};

function AmazingBoxes() {
  return <div className="h-24 w-24 bg-yellow-300"></div>;
}


```

## Nesting and organizing components 

Components are regular JavaScript functions, so you can keep multiple components in the same file. 

This is convenient when components are relatively small or tightly related to each other. 

If this file gets crowded, you can always move **AmazingBoxes** to a separate file. 

**Parent Component** - A component that renders other components(**child components**) 
____

**NB:Components can render other components, but you must never nest their definitions:**

For example this is wrong:

```
export default function Component() {
  // 🔴 Never define a component inside another component!
  function AmazingBoxes() {
    // ...
  }
  // ...
}
```

This is right:

**Define each component at top level**

```
export default function Component() {

  // ...
}

function AmazingBoxes() {
    // ...
  }
  

```

When a child component needs some data from a parent, ==pass it by props== instead of nesting definitions.