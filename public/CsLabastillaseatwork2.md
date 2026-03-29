# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
      position: relative; top: 20px; left: 20px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
# The sidebar overlapped with the other elements and was positioned relative to its normal position

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
# The footer stays in place as I scroll the page. It behaves differently from relative because position relative moves as I scroll while the footer is fixed to the bottom

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
# It's positioned relative to its nearest ancestor. It's different from fixed in the way that it doesn't stay in place when srcolling.
### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
# Notice appears on top of the content because it has a higher index value than content. If the z-index values were swapped, content would be above notice.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    # 1. Move .notice inside .content.
    # 2. Change left: 400px and top: 60px to top:0, right:0

    # HTML: 
    <p><div class="content">
       Main Content
        <div class="notice">Notice!</div>
        </div><p>

    # CSS:
   <p> .content {
  background: lightyellow;
  width: 300px;
  height: 200px;
  position: absolute; 
  top: 66px; 
  left: 200px;
  z-index: 1;
}

.notice {
  position: absolute;
  top: 0;
  right: 0;
  background: orange;
  padding: 10px;
  z-index: 2;
}<p>

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    # If position is changed to relative, .content stays on the normal document flow, remains where it would normally appear, and becomes a reference point for .notice. If position is changed to fixed, content is removed from the normal flow, is positioned relative to the browser window, and does not move when you scroll.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

    # Changing the values of their z-indexes changes which box is visible when overlapping. 

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    # 1. static - elements with static positioning appear in the otrder they'rw written in in HTMl, snd don' overlap with other elements.
    # 2. relative - is similar to static except it's positioned relative to its static position. It's used for small adjustments and the space it wouldv've taken if it hadn't been moved is preserved in order to keep the original layout.
    # 3. absolute - the element is now taken completely out of the normal flow of the document and will be allowed to overlap with other elements, placing it based on its positioned container.
    # 4. fixed - positions the element using the browser window as reference, letting it stay fixed in place no matter where the user scrolks.

    b. How does absolute positioning depend on its parent element?
    # the element with absolute positioning will align itself to the closest parent without a static position. The parent element will determine the exact position of the absolute position element. 

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    # An element with fixed positioning will stay fixed in a certain position on the viewport no matter what, while an element with sticky positioning acts like a normal element until it crosses a specific scroll point.


    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    # In designing a webpage for a school event, I would use fixed position to highlight important details such as the name, date, and time of the event, absolute positioning to group certain information such as maps and venues, and static positioning for any additional unformation. I would also use z-index to emphasize the most important parts of the event by putting them at the front of the stack.