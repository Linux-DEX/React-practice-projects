# DOM Manipulation JavaScript 

## 14 different technics to manipulate dom

### 1. Create Elements
The `document.createElement()` is a method used to create the HTML element.

```js
// Creating <p> element
let x = document.createElement("p");
let t = document.createTextNode("Paragraph is created.")
x.appendChild(t);
document.body.appendChild(x);
```

### 2. Adding Elements
+ For adding element to body we have 2 methods usign `apppend()` and `appendChild()`.

**.append()**
This method is used to add an element in form of a node object or a DOMString.

```js
// inserting a node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.append(child);
// this appends the child element to the div element.
// the div would then look like this <div><p></p></div>
```

```js
// inserting a DOMString
cont parent = document.createElement('div');
parent.append('Appending Text');
// the div would then look like this <div>Appending Text</div>
```

**.appendChild()**
Similar to the **.append()** method, this method is used to elements in the DOM, but in this case, only accepts a Node object.

```js
// inserting a node object
const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
// This appends the child element to the div element.
// The div would then look like this <div><p></p></div>
```

```js
// Inserting a DOMString
const parent = document.createElement('div');
parent.appendChild('Appending Text');
// Uncaught TyperError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
```

### 3. Modifying Element Text
The `innerText()` & `textContent()` are properties of the DOM(document object model). They allow you to read and update the content of HTML elements.

**innerText()**
The `innerText` property returns the content as rendered on the screen. It ignores all the HTML tags. And it also ignores the hidden element(with display set to none).

```js
// Reading content with innerText
const navElement = document.querySelector('nav');
console.log(navElement.innerText);
```

**textContent**
The `textContent` property returns the content as it in the HTML markup. Like innertext, it also ignores the HTML tags. But it doesn't consider styles, so it returns the "Pricing" text even though it's hidden.

```js
// Reading content with textContent
cont navElement = document.querySelector('nav');
console.log(navElement.textContent);
```

### 4. Modifying Element HTML
The `innerHTML` property sets or returns the HTML content(inner html) of an element. It allows you to manipulate the inner content, including HTML tags, by assigning new HTML string or retrieving existing content, making it useful for dynamic updates on web pages.

```js
// Adding bold text to div
const body = document.body;
const div = document.createElement("div");
div.innerHTML = "<strong>Hello world</strong>"
body.append(div)
```

### 5. Removing Element
+ The `Element.remove()` method removes the element from the DOM.

```js
const element = document.getElementById('div');
element.remove();
```

+ The `removeChild()` method of the node interface removes a child node from the DOM and returns the removed node.

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
```

### 6. Modifying Element Attribute
+ The `getAttribute()` method of the element interface returns the value of a specified attribute on the element.

```js
const div = document.getElementById('div');
const exampleAttr = div.getAttributes('id');

// other way
const exampleAttr2 = div.id;
```

+ The `setAttribute()` method of the element interface sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

```js
const button = document.querySelector('button');
button.setAttribute('name', 'helloButton');
```

+ The `dataset` read-only property of the HTMLElement interface providers read/write access to custom data attributes (`data-*`) on elements. It exposes a map of strings (`DOMStringMap`) with an entry for each `data-*` attribute.
    - An HTML `data-*` attribute and its corresponding DOM `dataset.property` modify their shared name according to where they are read or written.

```html
<div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
  Carina Anand
</div>
```

```js
const el = document.querySelector('#user');

// set a data attribute
el.dataset.dateOfBirth = '1960-10-03';
```

### 7. Modifying Element Classes
+ The `Element.classList` is a read-only property that returns a live DOMTokenlist collection of the **class** attributes of the element. This can then be used to manipulate the class list.
    - Using `classList` is a convenient alternative to accessing an element's list of classes as a space-delimited string via `element.className`.

```js
const div = document.createElement('div');

// use the classList API to remove and add classes
div.classList.remove('foo');
div.classList.add('another-class');

// if visible is set remove it, otherwise add it 
div.classList.toggle('visible');

// replace class 'foo' with class 'bar'
div.classList.replace('foo', 'bar');
```

### 8. Modifying Element Style
The read-only `style` property of the HTMLElement returns the *inline* style of an element in the form of a live CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned only for the attributes that are defined in the element's inline style attribute.

```js
const element = document.querySelector('#id');
element.style.backgroundColor = 'red';
element.style.color = 'white';
```