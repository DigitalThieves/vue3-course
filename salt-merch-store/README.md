# SALT MERCH STORE DAY 3

## Focus of the day

Today we will continue building our application from where we started two days ago. We will add various routes and link to them using the RouterLink component. Some routes will be dynamic and others will be static and one route will be forcing us to use named views. Let's go, it'll be fun!


## Task 1: Setting up router and the homepage
Your first job will be to install Vue Router and add it to the project and add homepage to path '/'

1. Install `vue-router` using npm
2. Create a `router.js` and set it up properly
3. In `router.js` import the `home-page.vue` component and add it to path '/' in the routes-array
4. Import and use router.js into main.js
5. Add RouterView to `App.vue` and remove the unneeded components from the file.


## Task 2: Set up Product Page

1. Add a new route in your routes-object inside `router.js` with base-path '/products/' but extend it with a parameter after the last forward-slash. the parameter can be named slug but it doesn't matter.
2. Import the `products.vue` component and add it to the path in previous step
3. In `products.vue` delete the object from the reactive `product` property in the `data ()` function and instead set it to `null`
3. In `products.vue` you can import productClient using `import productClient from '@/api-client'`
4. In mounted-hook (in products.vue) you should use the product slug from the route-parameter and use productClient.getProductBySlug() function to get the product data (the function returns a promise that resolves to product data after .5s) for the slug and set it to the reactive `product` property that is used in the template.
5. [Visit /products/one-size-baseball](http://localhost:8080/products/one-size-baseball) to test it and make sure it works

### What to test for:

1. Use the setData for mounting the component to have products be null and error null and isLoading null so that the component should render the `Loading...` screen and test that it does
2. Add an error object in error and test that it renders it correctly
3. Given product data, see that the correct title is rendered and also the correct description (in order to test description, make sure to trim the wrapper html by calling `.replaceAll(/\n|\t|( {2})/g, '')` on the string.)


## Task 2: Testing ProductSelectables.vue

The ProductSelectables component does a couple of things, it does

1. Renders a list of either images, colored squares or squares with text, all of which are selectables, depending on the 'selectableTypes' prop
2. Given the activeIndex, it will add some extra styling to selectables whose index matches the activeIndex, in order to indicate "this is currently selected"
3. When a selectable is clicked, it emits the index of the clicked selectable

We want to test all of this behaviour.

### What to test for:

1. Given an array of sizes and `selectableTypes = 'sizes'` make sure it renders the right amount of selectables and the correct html for each size given its type (see the provided example)
2. Given an activeIndex, compare that the rendered size with same index has selected-styling
3. If user clicks on one of the selectables, make sure component emits 'updated:activeIndex' event with correct payload
3. Repeat above for images and colors


## Task 3: Testing PictureOverlayedWithText.vue
This is a simple component with two slots, one named and one default. Test that both are outputting what you expect them to put out. (Search the web on how to provide slots to vue/test-utils)

## Task 4: Testing CategoriesNav.vue
This is a simple component that given attributes puts it one of it's root but not on the other. Test that the attributes are added to the correct root element.


## Random Tips:
1. Use selectors like '.classname > div' if that suits you, or else feel free to add test attributes like `data-testid="elementId"` to the components you want to test to easier find what you're looking for.
2. There is a find() and a findAll() method for doing query selections, use them according to your needs
3. There are a couple of tests provided to you that are failing because they're not fully implemented, but if you study them you will see that they are half-finished. By finishing them first, you should be able to figure out how to write the rest of the tests