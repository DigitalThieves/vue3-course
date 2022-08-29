# SALT MERCH STORE DAY 2

## Focus of the day

Today, the focus will mostly continued being on the product page. We will create components, bind variables to them, pass in props and at last we will start working on a starting page and create two components, one with default and named slots and the other will be a multi-root component.


## Task 1: "Fake" a loading screen
1. Set initial value on `isLoading` to `true`
2. Create a mounted function and inside of it, utilize a `setTimeout` in order to assign `false` to `isLoading` after .5 second.
3. If .5 second is too fast too really notice the loading screen, make it 2s or even 5s but after you have confirmed that it's working, leave it at .5 seconds.

## Task 2: Colors and Images

### Active Color
Right now, the active colorIndex is 0, which is hardcoded and never changes. Let's fix this.

1. The squares of available colors are hardcoded. Change this by iterating over the available colors using the `v-for` directive.
2. For each color-square add a click-listener that assigns the inded of the clicked color to the colorIndex variable.

`console.log` the colorIndex or else display it on the page (using something like `<p> {{ colorIndex }} </p>` somewhere in the template) to make sure it actually shifts. Once this is confirmed, remove the log / exposure.

Switching active colors should have no effect at this point, because all other values are hardcoded, so let's continue and change this.

### Active Image
The large product image (with class 'selected-product-img') is picked from the list of images with a hardcoded 0. Let's change this

1. Create a computed value named something like `currentColor` and make it return the active color object
2. Create a computed value named something like `currentImage` and make it return the active image from the current color object (hint: Computed values can use other computed values as variables)
3. Make the large image use `currentImage` and make sure it works
4. Add a click-listener to every selectable image that reassigns the right inde to imgIndex.
5. Click on various images and make sure it works

### Selectable images
Each color have a collection of images of the product in that color. The collection of small images is hardcoded, make it instead use the collection of images from currentColor.images using the `v-for` directive.


## Bonus Task: Create project from scratch.

### Start from scratch
