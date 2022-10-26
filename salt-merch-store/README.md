# SALT MERCH STORE DAY 1

## Getting up-n-running

inside /salt-merch-store run the following commands:

### Installing dependencies

```
npm install
```
### Running development server

```
npm run serve
```

### Lints and fixes files
```
npm run lint
```


## Focus of the day

Today, the focus is solely on building the single product page.

Most of the raw HTML is provided to you with hardcoded data. Your task is to utilize the options data-method in order to replace the hardcoded data with the JSON provided below.


### Product Data
```js
{
  category: 'tshirts',
  colors: [
    {
      color_name: 'Black',
      colorhex: '#000',
      sizes: [
        {
          size: 'S',
          stock: 1
        }, {
          size: 'M',
          stock: 1
        }, {
          size: 'L',
          stock: 2
        }, {
          size: 'XL',
          stock: 5
        }, {
          size: 'XXL',
          stock: 3
        }
      ],
      images: [
        'images/salt-store-items/t-shirt/black-01.jpg',
        'images/salt-store-items/t-shirt/black-02.jpg',
        'images/salt-store-items/t-shirt/black-03.jpg',
        'images/salt-store-items/t-shirt/black-04.jpg' 
      ]
    }
  ],
  title: 'Salty T-Shirt',
  description: "<p>Salt makes awesome T-Shirts. Get yo'self one immediately before they run out. Go on, don't be shy.</p><p>We take orders fo sure!</p>"
}
```



## Task 1. Conditional Rendering

Once you run this branch as-is you will see that both "LOADING" and "ERROR MESSAGE" is on display as well as the product page.

1. Make sure to copy-paste the Product Data from above in the data-object
2. Make the three sections appear depending on if isLoading is true, or else if error message is a string (or not if its `null`) or else display the product data.
3. Once you've gotten this to work, experiment with changing the data properties (`isLoading` and `error`) accordingly and make sure you're conditions work as expected, after experimenting you should put isLoading to `false` and error to `null` and only focus on the product page.


## Task 2a. Breadcrumb & Title

The next step is to fix the breadcrumb (look for element with class `breadcrumb`), replace the CATEGORY and TITLE with the real data using `{{ data_property }}` syntax and also do the same with the product title on display in various locations.

1. Change `CATEGORY` and `TITLE` in the `SALT-MERCH / CATEGORY / TITLE` breadcrumb to real values (`SALT-MERCH` can continue being hardcoded)
2. Change the `PRODUCT TITLE` in the big letters on top of the product to real values
3. Change the `PRODUCT TITLE` in the button "Add PRODUCT TITLE To Cart" to real values
4. Change the `COLOR NAME` and `AVAILABLE STOCK` under the Product Title to real values

## Task 2b. Description as HTML

1. Find the hardcoded product description and change it to instead use the description from the data. Beware! The data has HTML as raw values. Using `{{ data.description }}` will not yield the desired outcome.

3. Change the `PRODUCT TITLE` in the button "Add PRODUCT TITLE To Cart" to real values

## Task 3. List rendering

Next is the need to render lists. You have a list of colors, for each color you have a list of images and sizes. For each size you have data on available stock.

1. Change the element with class "selectable-product-colors" to render using `v-for` each available color, make sure to utilize colors[i].colorhex to paint the square dynamically. (Observe in this lab there's only one available color, but make sure to use v-for anyway!)
2. Change the elements with class "selectable-product-sizes" to render using v-for each size in *chosen color*\*
3. Change the elements with class "selectable-product-imgs"to render using v-for each image in *chosen color*\*

*\* chosen color can be hardcoded to be index 0 of available colors, which in this lab is just one: black*

## Task 4. Active image & Stock
Assume for now that the current color is the first (and in todays project only) color, assume that the size chosen is L and assume that the chosen image is the first image. Tomorrow we will add event listeners to change these and re-render our content accordingly. For now make the above mentioned assumption and do the following:
1. Change the element with class "selected-product-img" and make it get its src-value from the product data with the above mentioned assumptions.

## Task 5. RAW HTML Rendering
The product description comes as raw html and needs to be inserted into the page in a proper way, make sure to do that.


## Bonus Task: Create project from scratch.

### Start from scratch
Follow the official Vue Documentation to start a project from scratch and recreate today's project on your own. You can use bootstrap and copy-paste our implementation, write your own CSS or use any other library you want to.

### Implement Mobile Responsiveness
If you're a stickler for accessibility and correctness and can't stand how this project is not mobile-friendly, then feel free to add such support.