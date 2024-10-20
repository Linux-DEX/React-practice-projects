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

