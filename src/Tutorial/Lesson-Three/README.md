## JSX: Putting markup into JavaScript

As the web became more interactive, logic increasingly determined content.

JavaScript was in charge of the HTML!

**React makes rendering logic and markup live together in same place - components**

It uses a syntax called JSX to represent markup

```
export default function SideBar (){
    if(isLoggedIn()){
        <p>Welcome</p>
    }else{
        <Form>
    }
}

function Form (){
    const onClick = ()=>{
        ...
    }
    const onSubmit = ()=>{
        ...
    }

    return(
        <form onSubmit = {onSubmit}>

        <input onClick ={onClick}>
        </form>
    )
}

```

Keeping a components rendering logic and markup together ensures that they stay in sync with each other

JSX looks alot like html but is a bit stricter and can display and can display dynamic information

## The rules of JSX

1. Multiple elements from a component should be wrapped in a single parent tag such as a div or fragment

```
<div>
  <h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>

```

or

```
<h1>Hedy Lamarr's Todos</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
  >
  <ul>
    ...
  </ul>

```

_JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment._

2. Close all tags

All tags must explicitily be closed

Self-closing tags such as <img> must become <img/>

Wrapping tags such as li must be closed with a closing tag(-->/li)

```
<>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Hedy Lamarr"
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>

```

3. camelCase all most of the things!

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.

In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

This is why, in React, many HTML and SVG attributes are written in camelCase.

For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property:

```
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  className="photo"
/>

```
