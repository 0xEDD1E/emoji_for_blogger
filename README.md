### __Emoji__ for Blogger :grinning: (`emojied.js`)
##### Replace emoji shortcuts with emoji unicode values

#### Little about `emojied.js`
`emojied.js` is a simple javascript script, that scans a text and replaces emoji shortcuts ( `:grin:` ) with their unicode representaion (`&#x1F601;`), So you don't need to remember the numbers.

#### How it works
`emojied.js` simply uses regex to find and replace.

#### Usage
[1] add `emojied.js` to the blogger template (or any other site)
```html
<script src="emojied.js"></script>
```
[2] add onload attribute to the body tag (here `setemoji()` is the core function)
```html
<body onload="setemoji()">
...
</body>
```
[3] _OR_ if you have jQuery use this:
```javascript
$(document).ready(function() {
  setemoji();
});
```
[4] And then finally when you need to display an emoji type the shortcut between a `div` element which has an ID: `emojis`
```html
<div id="emojis">
Here is a sample text :sunglasses:
</div>
```
This will result the following:

> Here is a sample text :sunglasses:

#### Emoji Sheet
