# React One-Liners 

## 1. The Conditional Rendering Shortcut

```js
{ condition && <Component />}
```

**How it works**
- if the condition before the `&&` is false, the entire expression is false, and React doesn't render anything.
- But if it's true, React moves on to evaluate what comes after the `&&`, which in this case is our component.

## 2. The Default Props Shortcut

```js
const { prop = defaultValue } = props;
```

+ This line uses destructuring assignment with a default value. If `prop` is undefined in `props`, it'll fall back to `defaultValue`.

**Real world example**
```js
const Button = ({ size = 'medium', children }) => {
    return <button className={`btn-${size}`}>{ children }</button>
};
```

## 3. The state update shortcut

```js
setCount(prevCount => prevCount + 1);
```
- This approch ensures that you're always working with the most up-to-date state value, which is crucial in scenarios where state updates might be batched or delayed.
- update state based on it's previous value. 
- It's particularly useful in scenarios like counters, toggling boolean values, or any situation where the new state depends on the old one.

## 4. The Array Manipulation Shortcut

```js
setItems(prevItems => [...prevItems, newItem]);
```

- One-liner that helps you add an item to an array in state without mutating the original:
- This uses the spread operator to create a new array with all the previous items, plus the new one at the end.
- Ensures you're creating a new array instead of modifying the existing one, which is exactly what react wants.

## 5. The Object Update Shortcut

```js
setUser(prevUser => ({...prevUser, name: 'New name'}));
```

- update specific properties of an object without mutating the original.
- This user the spread operator to create new object with all the properties of the previous user, but overwrites the 'name' property with a new value.

## 6. The Ref Callback shortcut

```jsx
<input ref={node => node && node.focus()} />
```
- This create an input element that automatically focus when it's rendered.
- The ref callback receives the DOM node as an argument. This one-liner checks if the node exists ( to avoid errors if the ref is null ) and then calls the focus method on it.

## 7. The Style Shortcut

```jsx
<div style={{ color: 'red' , fontSize: '14px' }} />
```

- This uses an object literal to define multiple styles in a single line.

## 8. The Class Name shortcut

```jsx
<div className={`base-class ${condition ? 'active' : ''}`} />
```
- This uses a template literal and a ternary operator to conditionally add a class.
- The empty string in the ternary ensures that there's no extra space added when the condition is false, keeping your class names clean.

## 9. The Memo shortcut

```jsx
const MemoizedComponent = React.memo(({ prop1, prop2 }) => <div>{prop1} {prop2}</div>)
```

- This creates a memoized version of a function component that only re-renders if its props changes.
- `React.memo` is a higher-order component that skips rendering when props are the same, which can be a big performance boost for components that render often with the same props.