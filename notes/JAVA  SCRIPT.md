

# JAVA  SCRIPT



When we used link of any framework and any website to use the features of  these website in your webpage  this link is called as **CDN ( content delivery network )**.



#### Changing the style of an HTML element, is a variant of changing an HTML attribute:

```
document.getElementById("demo").style.fontSize = "35px";
```



#### Change the Image element using document

```
document.getElementById('myImage').src='pic_bulboff.gif';
```



#### Hide Html Element

```
document.getElementById("demo").style.display = "none";
```



#### For Show the Hidden Element

```
document.getElementById("demo").style.display = "block";
```





#### In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.



## JavaScript Display Possibilities

JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`.
- Writing into the browser console, using `console.log()`.



------



## JavaScript Data Types

JavaScript variables can hold many **data types**: numbers, strings, objects and more:

```
var length = 16;                // Number
var lastName = "Johnson";           // String
var x = {firstName:"John", lastName:"Doe"};  // Object
```



------



## JavaScript Function Syntax

A JavaScript function is defined with the `function` keyword, followed by a **name**, followed by parentheses **()**.

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
**(\*parameter1, parameter2, ...\*)**

The code to be executed, by the function, is placed inside curly brackets: **{}**



### Types Functions

- **Name Functions**

  - has unique name 

  - can be called or use in multiple places

  - Example :-

    ```
    function addNum(a,b){
    
    	return a+b;
    }
    
    addNum(4,3);    //call
    ```

    

- **Anonymous Functions**

  - does not have name 
  - can be used at one place only ( when it is called immediately after it is defined or actual argument to function).
  - The function defined is used as an expression.
  - can be stored in a variable .
  - passed as an actual argument to a function , can be return as a value by a function. 

  ```
  var add = functio(a,b){ return a+b; }
  
  add(3,2);   //call
  ```

- **Self Invoking**

  - self-invoking function are anonymous function, which are invoked right after the function has been defined.
  - you can execute once without declaring any global variable.

  ```
  (function(a,b){
  	return a+b;
  })(2,6); 
  ```

- **Constructors**

  - constructor is called when an object created using the new keyword.

  ```
  var add = new Function("a","b","return a+b;");
  ```



- ##### **Call-Back Function**

  - A *call-back function* is a *function* passed into another *function* as an argument,

    ```
    demo(function(){
    	console.log("hello");
    })
    ```

- ##### Arrow Function:

  ```
  hello = () => {
   return "Hello World!";
  }
  ```



```
function hello(fn) {
    fn();
  }
  
  // Use Case  - 1
  // YES,  trying to call the function without any argument
  // Error, because the function accepts paramer as a function
  hello();
  
  // Use Case - 2
  // YES, with Number as a parameter
  // Error, because the function accepts paramer as a function
  hello(1);
  
  // Use Case - 3
  // YES, with String as a parameter
  // Error, because the function accepts paramer as a function
  hello("cdac");
  
  // Use Case - 4
  hello(function () {});
  hello(() => {});
  
  let anfn = function () {};
  hello(anfn);
  
  let arfn = () => {};
  hello(arfn);
  
  
  /** Study setInterval */

// Case - 1 :: calling setInterval
setInterval(function () {
    // logic here
    console.log("I am interval, using annonymous!!");
  }, 1000);
  
  // Case - 2
  setInterval(() => {
    // logic here
    console.log("I am also interval, using Arrow");
  }, 1000);
  
  // Case - 3;
  let anfn = function () {
    // logic here
    console.log("I am getting uses as parameter inside the setinveral");
  };
  setInterval(anfn, 1000);
```



------



## Order of Program Execution

######  the logic of the program is **synchronous**

######   the execution happens in this program in one order or proper order

######  all the statement are blocking in nature.

```
function example() {

  console.log("1");

  console.log("2");

  console.log("3");

  console.log("4");

  console.log("5");

 }
```

 

 

######   The logic of the program is **synchronous** here;

######    At one place it does not execute in sync

```
 function example1() {

  	console.log("1");
  	console.log("2");


  // non-blocking statment ::

  // Ayncchronous

  // at pizzahut; we place the order; but we dont block the next customer

  	setInterval(() => {

    console.log("3. I am callback", new Date());

  	}, 2000);

  	console.log("4");
  	console.log("5");

 }
```

 

------



## What Is a Regular Expression?

A regular expression is a sequence of characters that forms a **search pattern**.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of **text search** and **text replace** operations.



```
var str = "Visit W3Schools!";
var n = str.search("W3Schools");


[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |
```







------





## Using test()

The `test()` method is a RegExp expression method.

It searches a string for a pattern, and returns true or false, depending on the result.

The following example searches a string for the character "e":

### Example

```
var patt = /e/; 

patt.test("The best things in life are free!");
```

Since there is an "e" in the string, the output of the code above will be:



------

You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:

```
/e/.test("The best things in life are free!");
```



------

## Using exec()

The `exec()` method is a RegExp expression method.

It searches a string for a specified pattern, and returns the found text as an object.

If no match is found, it returns an empty *(null)* object.

The following example searches a string for the character "e":

### Example 1

```
/e/.exec("The best things in life are free!");
```



------



## The "use strict" Directive

The `"use strict"` directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of `"use strict"` is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

```
"use strict";
x = 3.14;
```

Duplicating a parameter name is not allowed:

```
"use strict";
function x(p1, p1) {};  // This will cause an error
```



------



## **this** in a Method

In an object method, `this` refers to the "**owner**" of the method.

In the example on the top of this page, `this` refers to the **person** object.

The **person** object is the **owner** of the **fullName** method.

```
fullName : function() {
 return **this**.firstName + " " + **this**.lastName;
}
```



## **this** in Event Handlers

In HTML event handlers, `this` refers to the HTML element that received the event:

### Example

```
<button onclick="this.style.display='none'">
 Click to Remove Me!
</button>
```



------



## JavaScript Block Scope

Variables declared with the `var` keyword cannot have **Block Scope**.

Variables declared inside a block **{}** can be accessed from outside the block.

### Example

```
{
 var x = 2;
}
// x CAN be used here
```

Before ES2015 JavaScript did not have **Block Scope**.

Variables declared with the `let` keyword can have Block Scope.

Variables declared inside a block **{}** cannot be accessed from outside the block:

### Example

```
{
 let x = 2;
}
// x can NOT be used here
```



------



## Redeclaring Variables

Redeclaring a variable using the `var` keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:

### Example

```
var x = 10;
// Here x is 10
{
 var x = 2;
 // Here x is 2
}
// Here x is 2
```

Redeclaring a variable using the `let` keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:

### Example

```
var x = 10;
// Here x is 10
{
 let x = 2;
 // Here x is 2
}
// Here x is 10
```





Redeclaring a `let` variable with `var`, in the same scope, or in the same block, is not allowed:

### Example

```
let x = 2;    // Allowed
var x = 3;    // Not allowed

{
 let x = 4;  // Allowed
 var x = 5;  // Not allowed
}
```

Redeclaring a variable with `let`, in another scope, or in another block, is allowed:

### Example

```
let x = 2;    // Allowed

{
 let x = 3;  // Allowed
}

{
 let x = 4;  // Allowed
}
```





## JavaScript Const



Variables defined with `const` behave like `let` variables, except they cannot be reassigned:

JavaScript `const` variables must be assigned a value when they are declared:



### Example

```
const PI = 3.141592653589793;
PI = 3.14;   // This will give an error
PI = PI + 10;  // This will also give an error
```



## Constant Objects can Change but not reassign

You can change the properties of a constant object:

### Example

```
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```





------



## JavaScript Arrays



#### Array Fundamental 

  How to declare an Array;

Case - 1    

1. Empty Array.   

2. Size is not required.    

3. Size is dynamic here.    

```
let arr = [];
```



Ideally we should keep the similar data type.    

```
let arr = [1, 2, 3];    

let arr = ["A", "B", "C"];    

let arr = [1.1, 2.2, 3.3];
```



Case - 2    

1. Homogenous, Data type must be same for all the data. In C, C++, Java    

2. There is no Data type, Mixing the data type is possible,  

   ```
   let arr = [1, "A", 3.14, true];  
   ```

   

Case - 3    

We can also add Anonymous function or Arrow Functions in the array.

 More Complex Mixed Data Type.

```
let arr = [1, "A", 3.14, true, () => {}, 11, function () {}];   
```

​    



Case - 4    

How to access any element in Array.    

Using Index  start with 0   

```
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"]; 
```

```
lets access first element    

let firstItem = arr[0]; // Tejas    

let anyItem = arr[3];  //Umesh
```



Case 5     

How to iterate or how to print all the value of Array.

```
arr.length :: Size of the Array    // length is property of Array    

let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];    

for (let i = 0; i < arr.length; i++) {      
	const item = arr[i];      
	console.log(item); // print or use it logic purpose  
}   
```

​     



Case 6 

 Can we update an Array?   

can we new value    

can we remove value    

can we replace value    

```
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];    
```

// Add a new value to end of the array    

```
arr.push("Sanam"); 
```

 // Remove a value from the end of the array   

```
 arr.pop();   
```

 // Can we update value at certain index   

```
 arr[0] = "Tejasss";  
```

 // Case - 7    

// Can we add an element at particular index    

// splice - this can be used to add an element at certain index without replacing    

// splice - this can also be used to remove/delete an element from certain index  

// splice - it takes three parameter (starting index, count of delete ( optional of you dont want then take 0 ) , value of new element whichever you want to add)    

```
let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];      // before 
```

```
arr.splice(2, 0, "sanam");    let arr = ["Tejas", "Sachin", "Sanam", "Omkar", "Umesh", "Yaminee"];             // after     
```

  

 // delete at index 4, second parameter is delete Count    

```
arr.splice(4, 2);  
```



// More Demo    

```
// lets create an integer array   

 let arr = [1, 2, 3, 4, 5];    

for (let i = 0; i < arr.length; i++) { 

​     const item = arr[i];

​      console.log(item);    // print or use it logic purpose    

}
```



------



## JavaScript Objects

Objects are variables too. But objects can contain many values.

This code assigns **many values** (Fiat, 500, white) to a **variable** named car:

```
var car = {type:"Fiat", model:"500", color:"white"};
```





Rule-1

It starts and ends with curly braces;

```
let ref = {};// 
```



Rule - 2

 it consist of set of properties

properties are declared in KEY VALUE PAIR.

Syntax for the KEY VALUE PAIR (KEY : VALUE)

We can keep KEY in// --- single quote// --- double quote// --- quote are optional

KEY is always STRING 

```
let person = {  name: "Sachin",};

let person = {"first-name": "Sachin",};

let person = {firstName: "Sachin"};

let person = {id: 100};

let person = {list: [1, 2, 3]}; 
```



RULE -3    

 Object consist of set of properties

We can declare Zero, One, or More

Properties are separated by Comma    

```
let person = { id: 10,   firstName: "Sachin", lastName: "Tendulkar",  };  
```



Rule - 4  

How to Access Properties of  an Object 

Using the (.) Dot Operator 

Using the Bracket Operator    

```
let person = { id: 10,  firstName: "Sachin", lastName: "Tendulkar",    };   
```

```
let person = {  id: 10, "first-name": "Sachin",  lastName: "Tendulkar" }; 
```



```
let list = [   {   id: 10,firstName: "Sachin", }, {  id: 11, firstName: "Saurav", }, ];
```



Array of object   

```
let person = { id: 1, firstName: "Virat" };    

let list = [person];
```



 

------



## JavaScript JSON



JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

------

## What is JSON?

- JSON stands for **J**ava**S**cript **O**bject **N**otation
- JSON is a lightweight data interchange format
- JSON is language independent *****
- JSON is "self-describing" and easy to understand

\* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.



JavaScript Object Notation :: Son of Javascript

// We create an object using JSON {} or we can use  new Keyword 

// JSON -    // Rule-1, It starts and ends with curly braces;    

```
let ref = {};
```



------



## JSON Example

This JSON syntax defines an employees object: an array of 3 employee records (objects):

### JSON Example

```
{
"employees":[
 {"firstName":"John", "lastName":"Doe"},
 {"firstName":"Anna", "lastName":"Smith"},
 {"firstName":"Peter", "lastName":"Jones"}
]
}
```



## JSON Syntax Rules

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays



## Converting a JSON Text to a JavaScript Object

A common use of JSON is to read data from a web server, and display the data in a web page.

For simplicity, this can be demonstrated using a string as input.

First, create a JavaScript string containing JSON syntax:

```
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
```

Then, use the JavaScript built-in function `JSON.parse()` to convert the string into a JavaScript object:

```
var obj = JSON.parse(text);
```





## Data Validation

Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks are:

- has the user filled in all required fields?
- has the user entered a valid date?
- has the user entered text in a numeric field?

Most often, the purpose of data validation is to ensure correct user input.

Validation can be defined by many different methods, and deployed in many different ways.

**Server side validation** is performed by a web server, after input has been sent to the server.

**Client side validation** is performed by a web browser, before input is sent to a web server.



#### **Client side validation**

| Attribute | Description                                         |
| :-------- | :-------------------------------------------------- |
| disabled  | Specifies that the input element should be disabled |
| max       | Specifies the maximum value of an input element     |
| min       | Specifies the minimum value of an input element     |
| pattern   | Specifies the value pattern of an input element     |
| required  | Specifies that the input field requires an element  |
| type      | Specifies the type of an input element              |



------





## DOM ( Document Object Model )



With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page



The W3C DOM standard is separated into 3 different parts:

- Core DOM - standard model for all document types
- XML DOM - standard model for XML documents
- HTML DOM - standard model for HTML documents



The following example changes the content (the `innerHTML`) of the `<p>` element with `id="demo"`:

### Example

```
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```





## The getElementById Method

The most common way to access an HTML element is to use the `id` of the element.

In the example above the `getElementById` method used `id="demo"` to find the element.

------

## The innerHTML Property

The easiest way to get the content of an element is by using the `innerHTML` property.

The `innerHTML` property is useful for getting or replacing the content of HTML elements.

The `innerHTML` property can be used to get or change any HTML element, including `<html>` and `<body>`.



## Finding HTML Elements

| Method                                  | Description                   |
| :-------------------------------------- | :---------------------------- |
| document.getElementById(*id*)           | Find an element by element id |
| document.getElementsByTagName(*name*)   | Find elements by tag name     |
| document.getElementsByClassName(*name*) | Find elements by class name   |

------

## Changing HTML Elements

| Property                                   | Description                                   |
| :----------------------------------------- | :-------------------------------------------- |
| *element*.innerHTML = *new html content*   | Change the inner HTML of an element           |
| *element*.*attribute = new value*          | Change the attribute value of an HTML element |
| *element*.style.*property = new style*     | Change the style of an HTML element           |
| Method                                     | Description                                   |
| *element*.setAttribute*(attribute, value)* | Change the attribute value of an HTML element |

------





## Adding and Deleting Elements

| Method                            | Description             |
| :-------------------------------- | :---------------------- |
| document.createElement(*element*) | Create an HTML element  |
| document.removeChild(*element*)   | Remove an HTML element  |
| document.appendChild(*element*)   | Add an HTML element     |
| document.replaceChild(*new, old*) | Replace an HTML element |
| document.write(*text*)            |                         |





## Adding Events Handlers

| Method                                                     | Description |
| :--------------------------------------------------------- | :---------- |
| document.getElementById(*id*).onclick = function(){*code*} |             |



## Changing the Value of an Attribute

To change the value of an HTML attribute, use this syntax:

document.getElementById(*id*).*attribute = new value*

This example changes the value of the src attribute of an `<img>` element:

### Example

```
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>
```





## Changing HTML Style

To change the style of an HTML element, use this syntax:

document.getElementById(*id*).style.*property* = *new style*

The following example changes the style of a `<p>` element:

### Example

```
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

<p>The paragraph above was changed by a script.</p>

</body>
</html>
```



#### change text using this

```
<!DOCTYPE html>
<html>
<body>

<h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
 id.innerHTML = "Ooops!";
}
</script>

</body>
</html>
```



## The addEventListener() method

### Example

Add an event listener that fires when a user clicks a button

```
document.getElementById("myBtn").addEventListener("click", displayDate);
```

The `addEventListener()` method attaches an event handler to the specified element.

The `addEventListener()` method attaches an event handler to an element without overwriting existing event handlers.

You can add many event handlers to one element.

You can add many event handlers of the same type to one element, i.e two "click" events.

You can add event listeners to any DOM object not only HTML elements. i.e the window object.

The `addEventListener()` method makes it easier to control how the event reacts to bubbling.

When using the `addEventListener()` method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

You can easily remove an event listener by using the `removeEventListener()` method.



## The removeEventListener() method

The `removeEventListener()` method removes event handlers that have been attached with the addEventListener() method:

#### Example

```
*element*.removeEventListener("mousemove", myFunction);
```



------





## Node Relationships

From the HTML above you can read:

- `<html>` is the root node
- `<html>` has no parents
- `<html>` is the parent of `<head>` and `<body>`
- `<head>` is the first child of `<html>`
- `<body>` is the last child of `<html>`



Accessing the first child can also be done like this:

```
var myTitle = document.getElementById("demo").childNodes[0];
```



The most important nodeType properties are:

| Node               | Type | Example                                         |
| :----------------- | :--- | :---------------------------------------------- |
| ELEMENT_NODE       | 1    | <h1 class="heading">W3Schools</h1>              |
| ATTRIBUTE_NODE     | 2    | class = "heading" (deprecated)                  |
| TEXT_NODE          | 3    | W3Schools                                       |
| COMMENT_NODE       | 8    | <!-- This is a comment -->                      |
| DOCUMENT_NODE      | 9    | The HTML document itself (the parent of <html>) |
| DOCUMENT_TYPE_NODE | 10   | <!Doctype html>                                 |





## Creating New HTML Elements (Nodes)

To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.

#### ( insert after )

```
function commentHere() {
   
   // create new element
    const newElement = document.createElement("div");
    
    // comment box elment
    const commentBox = document.querySelector("#commentBox");


    // append the new element to parent
    // commentBox.appendChild(newElement);

}
```



## Creating new HTML Elements - insertBefore()

The `appendChild()` method in the previous example, appended the new element as the last child of the parent.

If you don't want that you can use the `insertBefore()` method:



```
function commentHere() {
    // create new element
    const newElement = document.createElement("div");

    // comment box elment
    const commentBox = document.querySelector("#commentBox");

    // add the Element at before the exixting element
    commentBox.insertBefore(newElement, commentBox.firstChild);
}
```



## Removing Existing HTML Elements

To remove an HTML element, use the `remove()` method:

```
<script>
var elmnt = document.getElementById("p1");
elmnt.remove();
</script>
```



```

 <button onclick="deleteComment(this)">Delete</button>    //html event

<script>
function deleteComment(btnElement) {

  btnElement.parentElement.remove();
  
}
</script>
```





## Replacing HTML Elements 

To replace an element to the HTML DOM, use the `replaceChild()` method:

```
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>
```





## Element Cloning

we don't need to create  its child.

```
function commentHere() {

  //  we are not goint to use createElement
  
  const newElement = document.querySelector("#referenceCommentId").cloneNode(true);
  
  newElement.removeAttribute("id"); //good practice to keep unique id.
  
  newElement.style.visibility = "visible";
  
  newElement.children[0].innerHTML = userComment;

  // comment box elment
  const commentBox = document.querySelector("#commentBox");


  commentBox.insertBefore(newElement, commentBox.firstChild);
  
  // clean the input box
  document.querySelector("#inputId1").value = "";
}
```

