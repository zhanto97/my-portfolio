# Styling React Components 

This website is developed using [React](https://reactjs.org/) and I wanted to share how one can stylize different React Components and elements.

## Inline styles
Inline styles are the basic way of styling in React apps.
They are specified with an object, which in turn is passed to `style` JSX attribute. 

In most cases, CSS styles are reused to have a consistent UI and it will be hard to maintain the app if one chooses to extensively use inline styles.
Therefore, use inline styles only when you need a quick style application.
```
import React from 'react'

const Button = (props) => {
    const style = {
        display: 'block',
        color: 'black',
        textAlign: 'center',
        padding: '20px 24px',
        textDecoration: 'none'
    }
    return (
        <a style={style} href="#">Button</a>
    )
}

export default Button
```
Note that dashed CSS property names are changed to camelCase e.g. `text-align` property is specified as `textAlign`.

## [Radium](https://formidable.com/open-source/radium/) package

The limitations of inline styles are apparent when we want to use selectors such as `:hover` and `:active`.
We cannot define a different set of CSS styles for selectors with inline styles.

The `radium` package provides users with a powerful capability of defining inline styles for React elements.
As can be seen below, we can define different style for our button when mouse hovers over it using `:hover` selector.
```
import React from 'react'
import Radium from 'radium'

const Button = (props) => {
    const style = {
        backgroundColor: 'white',
        color: 'black',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'brown'
        }
    }
    return (
        <a style={style} href="#">Button</a>
    )
}

export default Radium(Button)
```

`radium` package also lets users define media queries.
To be able to do that, user needs to wrap the component with `<StyleRoot>` component imported from `radium` package.
```
import React from 'react'
import Radium, {StyleRoot} from 'radium'

const Button = (props) => {
    const style = {
        backgroundColor: 'white',
        color: 'black',
        padding: '15px 32px',
        '@media (max-width: 1000px)': {
            padding: '10px 22px'
        }
    }
    return (
        <StyleRoot>
            <a style={style} href="#">Button</a>
        </StyleRoot>
    )
}

export default Radium(Button)
```

The button above will change its `padding` if media screen size is less than 1000 pixels.

If you are interested in inline styling more, also check out [styled-components](https://styled-components.com/) package.
It utilizes a recent addition to Javascript called [tagged template literals](https://styled-components.com/docs/advanced#tagged-template-literals) to style components. 

## CSS Stylesheet

If you are a fan of having separate CSS files for styles, this method is for you.
Simply import the CSS file and pass the name of class you want to assign to the `className` attribute of JSX.
```
import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <a className="Button" href="#">Button</a>
    )
}

export default Button
```
`Button.css` file has the following content
```
.Button {
    background-color: white;
    color: black;
}
```

The drawback of this approach is the scope of class names which can result in conflicts.
If one of the sub-components of `<Button>` also use a CSS class named `Button`, it might result in a bug which will be difficult to debug.

## CSS Modules

The potential problem of CSS Stylesheet approach is resolved by CSS Modules.
CSS Module is, put simply, a CSS file.
However, when imported, every class name inside a CSS Module is scoped locally to the component which is importing it.
This allows users to use any class name without any worry of conflicts.

The requirement to use CSS Modules is `react-scripts@2.0.0` and higher.
Most importantly, CSS files have to be named `[name].module.css`.
After that, CSS files can be imported as objects and different classes can be referenced from that object as shown below.

```
import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <a className={styles.Button} href="#">Button</a>
    )
}

export default Button
```
`Button.module.css` file has the following content
```
.Button {
    background-color: white;
    color: black;
}
```

Avoiding global class name conflicts is accomplished by appending hashes to class names in the rendered DOM.
For example, in the rendered DOM, our `<Button>` component might have a class name `Button_Button_3ZxsR`.

## Summary

Key takeaway from this post is that there are different ways of styling React components.
I hope I could help in choosing a method suitable for you by describing pros and cons of different ways