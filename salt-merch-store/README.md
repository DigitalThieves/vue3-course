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


## Task of the day

Today, the focus is solely on building the single product page.

Most of the raw HTML is provided to you with hardcoded data. Your task is to utilize the options data-method in order to replace the hardcoded data with the JSON provided below.

### Conditional Rendering

Once you run this branch as-is you will see that both "LOADING" and "ERROR MESSAGE" is on display as well as the product page.

Make these three sections appear depending on if isLoading is true, or else if error message is a string (or not if its `null`) or else display the product data.

Once you've gotten this to work, experiment with changing the data properties accordingly and make sure you're conditions work as expected, after experimenting you should put isLoading to `false` and error to `null` and only focus on the product page.


### Breadcrumb & Title

The next step is to fix the breadcrumb, replace the CATEGORY and TITLE with the real data using `{{ data_property }}` syntax and also do the same with the product title on display in various locations.

### List rendering

Next is the need to render lists. You have a list of colors, for each color you have a list of images and sizes. For each size you have data on available stock.

### Active image & Stock
Assume for now that the current color is the first (and in todays project only)  color, assume that the size chosen is L and assume that the chosen image is the first image. Tomorrow we will add event listeners to change these and re-render our content accordingly.

### RAW HTML Rendering
THe product description comes as raw html and needs to be inserted into the page in a proper way, make sure to do that.


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


## Bonus Task: Create project from scratch.

### Start from scratch
Follow the official Vue Documentation to start a project from scratch and recreate today's project on your own. You can use bootstrap and copy-paste our implementation, write your own CSS or use any other library you want to.

### Implement Mobile Responsiveness
If you're a stickler for accessibility and correctness and can't stand how this project is not mobile-friendly, then feel free to add such support.