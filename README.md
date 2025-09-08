# hot-line-web-

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById("id") => retun 1 element by given id.
getElementsByClassName("class") => selects all elements with given the class, return HTMLCollection.
querySelector("css-selector") => return frist element as css selector
querySelectorAll("css-selector") => return NodeList as all mached css selector
2. How do you create and insert a new element into the DOM?
const div = document.createElement("div");
div.textContent = "Hello World!";
document.body.appendChild(div);
createElement => create new element
appendChild => insert on dom
3. What is Event Bubbling and how does it work?
event rises child to parent
4. What is Event Delegation in JavaScript? Why is it useful?
document.getElementById("list").addEventListener("click", function (e) {
  if(e.target.tagName === "li"){
    console.log("Clicked:", e.target.textContent);
  }
});
A listener is added on the parent, and when the event bubbles up, the target is checked.

Why needed → Instead of adding separate listeners on each child, one listener on the parent can manage all. Improves performance and works for dynamic elements too.

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() => stops the element’s default action (e.g., form submit, link redirect).
stopPropagation() => prevents the event from bubbling up to parent elements.
