<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript DOM & Events Q&A</title>
    <style>
        /* Google Fonts for a nice, clean look */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        /* General Body Styles */
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f4f7f9;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }

        /* Main Container */
        .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            padding: 30px;
        }

        /* Main Heading */
        h1 {
            color: #2c3e50;
            text-align: center;
            border-bottom: 2px solid #e0e0e0;
            padding-bottom: 15px;
            margin-bottom: 30px;
        }

        /* Question Styles */
        h2 {
            color: #3498db;
            margin-top: 40px;
            margin-bottom: 15px;
        }

        /* Answer Container */
        .answer {
            padding-left: 20px;
            border-left: 3px solid #3498db;
        }

        /* Unordered List Styles */
        ul {
            list-style-type: none;
            padding-left: 0;
        }

        ul li {
            background-color: #ecf0f1;
            margin-bottom: 10px;
            padding: 15px;
            border-radius: 5px;
        }

        /* Code Styles */
        code {
            font-family: 'Courier New', Courier, monospace;
            background-color: #eef2f5;
            padding: 3px 6px;
            border-radius: 4px;
            color: #c0392b;
        }

        pre {
            background-color: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        
        pre code {
            background-color: transparent;
            color: #f8f8f2;
            padding: 0;
        }

        /* Strong tag for emphasis */
        strong {
            color: #2980b9;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>JavaScript DOM & Event Concepts</h1>

        <div class="qa-item">
            <h2>1. What is the difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll?</h2>
            <div class="answer">
                <ul>
                    <li><strong><code>getElementById("id")</code></strong>: Selects and returns the <strong>single element</strong> that matches the given unique ID.</li>
                    <li><strong><code>getElementsByClassName("class")</code></strong>: Selects all elements with the given class name and returns them as a live <strong><code>HTMLCollection</code></strong>.</li>
                    <li><strong><code>querySelector("css-selector")</code></strong>: Returns the <strong>very first element</strong> that matches the specified CSS selector.</li>
                    <li><strong><code>querySelectorAll("css-selector")</code></strong>: Returns a static <strong><code>NodeList</code></strong> of <strong>all elements</strong> that match the specified CSS selector.</li>
                </ul>
            </div>
        </div>

        <div class="qa-item">
            <h2>2. How do you create and insert a new element into the DOM?</h2>
            <div class="answer">
                <p>You first create an element using <code>document.createElement()</code> and then insert it into the DOM, often using <code>appendChild()</code> on a parent element.</p>
                <pre><code>// 1. Create a new 'div' element
const div = document.createElement("div");

// 2. Add some content to it
div.textContent = "Hello World!";

// 3. Append it to the body of the document
document.body.appendChild(div);</code></pre>
            </div>
        </div>

        <div class="qa-item">
            <h2>3. What is Event Bubbling and how does it work?</h2>
            <div class="answer">
                <p>Event bubbling is a process where an event triggered on a child element first runs on that element, and then "bubbles up" to its parent, its grandparent, and so on, up to the root of the document.</p>
            </div>
        </div>

        <div class="qa-item">
            <h2>4. What is Event Delegation in JavaScript? Why is it useful?</h2>
            <div class="answer">
                <p>Event delegation is a technique where you add a single event listener to a parent element to manage events for all of its children. It uses event bubbling to figure out which child the event originated from.</p>
                <p><strong>Why it's useful:</strong> Instead of adding separate listeners to each child, one listener on the parent improves performance, uses less memory, and automatically works for new child elements added dynamically.</p>
                <pre><code>// Get the parent element
const list = document.getElementById("list");

// Add one listener to the parent
list.addEventListener("click", function (e) {
  // Check if the clicked element is an 'li'
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});</code></pre>
            </div>
        </div>

        <div class="qa-item">
            <h2>5. What is the difference between preventDefault() and stopPropagation() methods?</h2>
            <div class="answer">
                 <ul>
                    <li><strong><code>preventDefault()</code></strong>: Stops the browser's <strong>default action</strong> for an element. For example, it can stop a form from submitting or a link from navigating to a new page.</li>
                    <li><strong><code>stopPropagation()</code></strong>: Stops an event from <strong>bubbling up</strong> to parent elements. The event will not trigger listeners on any ancestor elements.</li>
                </ul>
            </div>
        </div>

    </div>

</body>
</html>
