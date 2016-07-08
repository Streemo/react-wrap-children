Wrap `children` with `props`.
`children` can be an array or a single child element.
All `children` receive `props`.
Useful for creating containers.
Should work with React and React-Native.
```
import wrap from "react-wrap-children";

//...
//...

render(){
  return wrap(this.props.children, myProps)
}
```
`myProps` can contain a key if you want. 
If `children` is an array, and you do not specify a key in your props, a unique key will be created for you.