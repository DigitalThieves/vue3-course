# SALT MERCH STORE DAY 2

## Focus of the day

Yesterday, you created components and today you will write tests for them! Yippie!


## Task 1: Testing products.vue

Products.vue does a couple of things. Given product data, it renders its title and it's description. Given various indexes for colors and images it renders a large image and while it loads data it renders "Loading..." and given an error it renders the error message.

### What to test for:

1. Use the setData for mounting the component to have products be null and error null and isLoading null so that the component should render the `Loading...` screen and test that it does
2. Add an error object in error and test that it renders it correctly
3. Given product data, see that the correct title is rendered and also the correct description


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