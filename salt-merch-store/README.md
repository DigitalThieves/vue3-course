# SALT MERCH STORE DAY 2

## Focus of the day

Today, the focus will mostly continued be on the product page. We will create components, bind variables to them, pass in props and at last we will start working on a starting page and create two components, one with default and named slots and the other will be a multi-root component.


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
2. Create a computed value named something like `currentImage` and make it return the active image from the current color object and a hardcoded imageIndex (hint: Computed values can use other computed values as variables)
3. Make the large image use `currentImage` and make sure it works by changing the hardcoded imageIndex.

### Selectable images
Each color have a collection of images of the product in that color. The rendered collection of small images is hardcodedly picked from the arrays, make it instead use the collection of images from currentColor.images using the `v-for` directive.
1. use v-for to iterate over the list of images given currentColor.
2. Add a click-listener to every selectable image that reassigns an imgIndex.
3. Make the currentImage computed property use the dynamic imgIndex
4. Click on various images and make sure it works!


### Selectable size and displaying stock
1. Each color have a collection of sizes. Right now the sizes are hardcoded, make them dynamic using v-for directive.
2. Create a data property named sizeIndex (or something similar). Give its initial value null.
3. Make clicking a size reassign sizeIndex to the clicked index.
4. If a size has been clicked, give it the classes "bg-dark" and "text-white".
5. The stock is hardcoded. If sizeIndex === null, make it display "No size chosen", otherwise it should show the available stock of chosen size (or "Out of stock" if stock === 0)

### Dynamically disabled buy-button
The "Add Salty T-Shirt To Cart" button is disabled by default. Make it NOT be disabled depending on the following statements
1. A color has been picked (always true) - AND
2. A size has been picked - AND
3. Current color & size has available Stock.

There's no need to add a click-listener to the button. That will come in future Labs!

## Task 3: Componentize selectable behaviour
Everything that was done in Task 2 can be generalized. If you think about it, all three selectables have the following thing in common:

1. Given an array of elements, iterate over all of them and render a square-like figure with the info from the elemnt
2. Attach a click-listener on each square that re-assigns a variable to the index of the clicked element

Let's turn this into a component called something like "ProductSelectables"!
Do the following:
1. Create a component called "ProductSelectables" in the `/components` folder.
2. The squares are different enough to require us to render them differently. This will require our component to know what `selectables-type` it is rendering and use the `v-if` directive to know whether it should render selectable images, sizes or colors. Therefore, make it accept a prop named `selectables-type`
3. Regardless of what type of selectable is in use, the component should accept an array of elements to render. Therefore, make it accept a prop named something like `selectables`
4. Even though the component will take care of listening and assigning the active index, the parent component still needs to know it and may want to control the initial value, therefore make the component accept a prop named `active-index`
5. Render all the elements in the `selectables` array according to if it is "images", "sizes" or "colors" and attach a click-listener to each elements that emits a `selected`-event. Also, move the 'selectables'-css from "products.vue" to the ProductSelectables component.
6. Import, register and USE the component in products.vue. Begin only with colors for now. Attach the right props (colors-array to `selectables`, colorIndex to `active-index` and so on)
7. Attach an event-listener to the component that listens to the `selected`-event and changes the (in the case of Colors) colorIndex.
8. Make sure it works.
9. Refactor the `selected`-event to instead be `update:<propname>` and remove the `selected` listener on products.vue and make active-index instead be attached using the `v-model` directive
10. Make sure it works
11. Now replace sizes and images to instead use the ProductSelctables component
12. Make sure everything works

## Bonus Task: Slots and multi-root-components
In `App.vue` change the "products" component to instead use `home-page.vue` in `/pages` and open the file.

### Slots
  The HomePage uses two components: PictureWithOverlay and CategoriesNav. Let's focus on the first one for now. Open the component file.
  1. The text content on top of the picture should be made into a default slot and the content should be moved to the home-page.vue
  2. The overlayed background should be made into a slot named "overlay" and moved to the home-page.vue

### Attributes and Multi-root Components
  In CategoriesNav.vue there are two roots: a p-element and a div. The div has the following class-attribute:
  `class="bg-secondary p-5 text-white text-center"`

  We would like these to be adjustable on component-level and therefore we want to move that attribute to `<categories-nav />` on home-page.vue instead so that it says `<categories-nav class="bg-secondary p-5 text-white text-center" />` and still look the same. This will require the use of `$attrs` object on the component. Make it happen!