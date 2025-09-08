1. What is the difference between getElementById, getElementsByClassName and querySelector/ querySelectorAll?

Answer = The difference between them is-
1.1- getElementById = The id is unique. so if we use the getElementById, it returns us only the matched element (Not a list). Only when we know we are targeting single element. If nothing found it returns null.

1.2- getElementsByClassName = The class is not unique like id, multiple elements can have the same class. So, by using the getElementsByClassName we can find multiple matched elements. It returns us a HTMLCollection (Same as array). But this HTMLCollection is live. When DOM changes something it updates automatically. Only if we need a liveCollection. If nothing found it returns an empty HTMLCollection (array like array "[]").

1.3- querySelector = This is a CSS selector. By using this querySelector we can find only the first element that matches the given CSS selector. If noting found it returns null. This is static. If any changes happens to DOM it will not update. This is flexible for CSS style selector.

1.4- querySelectorAll - This is also a CSS selector. But this returns us all elements that matches the given CSS selector. This also returns us a NodeList. Which is not liveList. If any changes happens in DOM it will remain unchanged unless we change this manually. This is flexible for CSS style selectors (.card #card div > p, [name : "User"], etc.). If nothing found it returns an empty NodeList (array like array "[]").


2. How do you create and insert a new element into the DOM?

Answer = 
2.1- To create an element we use this method - document.createElement("div")
in the parenthesis we need to give the element name. and then DOM will create the given element.

2.2- To insert an element we use many method - (append(), appendChild(), prepend(), before(), after(), replaceWith(), etc.)

In this case we need 2 element. The element where we want to insert the created element and what element we want to insert.

Example - 
const parent = document.getElementById("parent-div");
const child = document.createElement("p");
parent.appendChild(child);


3. What is Event Bubbling and how does it work?

Answer = Event bubbling means when an event happens on an element it first happens in the targeted element then it goes up to the root of HTML. If we have a button inside a div and we added an click event in that child button, when we click that button, it will trigger the event first on that button, then it will again trigger on the div, then divs parent, then grandparent and so on to the root.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer = Event delegation is a technique to add event listener on the common parent element instead of multiple child elements. It uses event bubble to catch where is the event actually happened on child element. This technique is useful because it saves memory usage, cleaner code, handles dynamic elements added after the website loads.


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer = The difference between the preventDefault() and stopPropagation() methods is -

5.1- preventDefault() - This method prevents the browsers default behavior (form submission, link navigation, checkbox toggle, etc.). This method does not stops event bubbling.

5.2- stopPropagation() - This method stops an event from bubbling up to the root. This method also does not stops the default behavior of browser.
