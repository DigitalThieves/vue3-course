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
6. Wrap the breadcrumb elements in RouterLink and make the first one link to home ('/'), the second one link to the category ('/categories/<category-slug>') and the last one can be pure text, no link needed (you're already on the page!)


## Task 3: Set up Category Page

1. Much like in task 2, set up a new route with path `'/categories/<category-slug>'` (obv change <category-slug> to something sensible) and make it use page component `categories.vue`
2. Uncomment and use the productClient and it's `getProductsByCategory()` function to get all products by category slug. (client returns a promise which resolves to data)
3. Change all the placeholder values in the component to use real data.
4. Change the anchor links to use RouterLink instead
5. Open `CategoriesNav.vue` and wrap the buttons with RouterLink pointing to the correct categories (if you feel like it, you can render the  buttons dynamically based on available categories)


## Task 4: Set up All Products (collection) Page

1. Almost identical to task 3 but path should be `'/collection'` and productClient has a function named `getAllProducts()` that should be used here. Make sure to change all placeholder values.


## Task 5: Add Header and Footer to page

1. In `App.vue`, import both `SaltHeader.vue` and `SaltFooter.vue` and use them outside of the RouterView component (header before, footer after).
2. Go into `SaltHeader.vue` and wrap the buttons inside RouterLink


## Task 6: Make sure you have no anchor links
Do some housekeeping and make sure you have no anchor links and are instead using the RouterLink component to link to various pages in your App.


## Task 7: Named RouterViews with an /about page
1. Refactor `SaltHeader.vue` in `App.vue` inside a named RouteView
2. Change all your routes in `router.js` to use `components: { default: ..., }` syntax instead of what we did previously
3. Add a new route with `path: '/about'` and page component `about-salt.vue` as default and `AltHeader.vue` inte the named view for Header
4. Add a RouterLink to the about-page in the `SaltFooter.vue`