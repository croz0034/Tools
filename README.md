# Tools

So far Tryeltech has 3 working methods, They require
1: A target ID
2: The content to attach.


1: .create(targetID, HTML-Code)
- it is recommended to use either `` Quotation marks or '' quotation marks so you can use the double quotes in your HTML.
- Deff beats out making tonnes of document.createElement(''); element.textContent calls like I used to.
- I haven't tried including function or variable calls (using ${} incase you forgot) within the `` quotation marks in the HTML-Code variable... But I could easily see it working.

2: .makebutton(targetID, Function-to-Call)
- this one's simply combining getElementbyId, and addEventListner.

3: .addtext(targetID, Text)
- appends a text node to the bottom of the item in question. This comes after all the other children... An option to add it to the top is still in progress.