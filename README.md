# pixelart
Pixel Art Maker Project

I used the Knowledge area to get some of the actions working. 

I identified that some of the variable names were incorrect (using canvas rather than table).

Further to review:
Javascript
Required
1. Added comments to the function makeGrid
2. Changed r and c value to start from 0, so grid is correct size

Suggestion
1. I have moved the input height & width to be const at the top, then referenced this in the makeGrid function, using let variable.

HTML
Suggestion
1. I have added lang="en" to <html> tag.  This was not originally included as there was not a requirement to edit the HTML code.
2. I have added a max value for height & width.  I also researched how to stop the user entering a value higher than max value.  The code for the onKeyUp was from stackoverflow: https://stackoverflow.com/questions/8354975/how-can-i-limit-possible-inputs-in-a-html5-number-element
  
