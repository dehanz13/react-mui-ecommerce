<div>
  <h1 align="center"><a href="https://dannielstore.netlify.app/">🛍 eCommerce Store 🏬</a></h1>
  <strong>
    A React application designed with Material UI.
  </strong>
  <p>
    This is mostly an experiment right now, but it may turn into something real. Basically, it's a headless eCommerce demo store that lets users purchase products online with a payment gateway integrated. It's utilizing the <a href="https://commercejs.com/">Commerce.js</a> SDK to manage products and carts, handle checkouts and receipts.  
  </p>

  <a href="https://dannielstore.netlify.app/">
    <img
      alt="eCommerce Store Built with React"
      src="https://res.cloudinary.com/dehanz-dev/image/upload/v1638842696/projects/ecommerce-mui/landing-hero_tedloa.png"
    />
  </a>
</div>

<hr />

## System Requirements

- [Git](https://git-scm.com/) (v2.13 or greater)
- [NodeJS](https://nodejs.org/en/) (v8.2.0 0r higher)
- [NPM](https://www.npmjs.com/) (v6 or greater) or [Yarn](https://yarnpkg.com/)
- Chec CLI `yarn add -g @chec/cli` or `npm install -g @chec/cli`

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version or yarn --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) or
[mac/linux](https://stackoverflow.com/questions/24306398/how-to-add-mongo-commands-to-path-on-mac-osx/24322978#24322978).

## Setup

### Create a Chec account.

Now that you’ve installed Chec CLI globally, you will be able to access the list of `chec [COMMANDS]`, one of which is registering for a Chec account. Let’s go ahead and get that set up!

```shell
# Open the Chec registration page in your browser
chec register
```

Follow the rest of the walk-through to set up your merchant details. Alternatively, you can go [here](https://authorize.chec.io/signup) to register for a Chec account.

## Manual setup and Netlify deployment

Manual setup involves cloning the repo into your local environment, seeding the provided sample data into your Chec account and deploying to Netlify.

**STEP 1.** Clone the repo and install dependencies.

> Copy the web url for this repository.
> Open your terminal.
> Change the current working directory to the location where you want the cloned directory.
> Paste this below then hit enter:

```shell
git clone https://github.com/dehanz13/react-mui-ecommerce.git
```

> This may take a few minutes.

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue](https://github.com/dehanz13/react-mui-ecommerce/issues/new) and provide _all_ the output from the commands you ran (even if
it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```shell
yarn install
# or npm install
```

It's recommended you run everything locally in the same environment you work in
every day, but if you're having issues getting things set up, you can also set
this up using [GitHub Codespaces](https://github.com/features/codespaces).

**STEP 2.** Set up your environment variables

Replace the sample `.env.example` dotenv file at the root of the project to store your Chec `public_key` as well as your `secret_key`.

```shell
# Copy from source file to destination file .env
cp .env.example .env
```

You can access your API key under in your Chec dashboard setup, then navigate to the Develop tab to copy your Public Key and Secret Key. Replace the provided `NEXT_PUBLIC_CHEC_PUBLIC_KEY` with your own and fill in your `CHEC_SECRET_KEY` in the `.env` file. The secret key is necessary for the seed script to have the proper permission to seed the sample data in `/seeds` into your Chec account. Remove the secret key once the data is seeded.

```dotenv
# .env
# Fill in your public key and secret key
REACT_PUBLIC_CHEC_PUBLIC_KEY=
CHEC_API_URL=https://api.chec.io
NODE_ENV=
```

> This file is meant to not be committed to git so make sure to add it to `.gitignore` file.

**STEP 3.** Start your development environment.

To get the app up and running (and really see if it worked), run:

```shell
yarn start
# or npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You can also open the production deployment:
[dannielstore.netlify.app](https://dannielstore.netlify.app/).

Now head on over to http://localhost:3000 after starting your development, your site should now be populated with the sample data!

**STEP 4.** Making changes.

After you make any changes, [push the code](https://stackoverflow.com/a/44076938/16364380) to your repository.

**STEP 5.** Deploy your site.

Be sure to sign up for a Netlify account and log in to it. Click the **New site from Git** button and give access to select your repo. Your build settings are automatically filled out for your from the `netlify.toml` in the template. To enter your environment variables, click **Show advanced** then **New variable** and fill in the key input as `REACT_PUBLIC_CHEC_PUBLIC_KEY` and the value input with your Public Key. You can access your API key in your Chec dashboard under Setup, then navigate to the Developer tab to copy your Public Key.
Now go ahead and click the "deploy site" to see your live site!

### Caveats with data customization (IMPORTANT)

If you are replacing the sample products, you can customize them straight from your [dashboard](https://dashboard.chec.io/products/). If you'd like to customize with your inventory in the backend, the app will expect the inventory setup in order to build and render the components.

- If you want multiple assets to your products, you can [create assets](https://commercejs.com/docs/api/#create-new-asset) and [assign them to your products](https://commercejs.com/docs/api/#add-asset-to-product). [This guide](https://commercejs.com/blog/adding-assets-via-the-chec-api) walks through how to achieve this.
- As of now, there are no categories setup yet but If you want to add categories, you can create them in the [dashboard](https://dashboard.chec.io/categories/add). Follow [this guide](https://commercejs.com/docs/api/#categories) for more info on how it works.

## 🥞 Stack

- Framework - [React](https://reactjs.org/)
- eCommerce - [Chec/Commerce.js](https://commercejs.com)
- Hosting - [Netlify](https://netlify.com)
- Styling - [Material-UI](https://v4.mui.com/)
- Payment Gateway - [Stripe](https://stripe.com/)

## Commerce.js features & API

This demo store uses a range of features provided by Commerce.js and powered by the Chec Dashboard.

### Carts

The shopping cart uses the Commerce.js cart API. Carts are persisted for up to 30 days, and Commerce.js automatically
remembers carts for visitors.

#### Methods used:

#### `retrieve()`

In order to start adding products to your cart, you'll need to first create a cart. When you first call the method `retrieve()` using `GET v1/carts`, it will automatically create a cart for you if a cart does not exist yet or a current cart will be retrieved if the `cart_id` is passed in as an argument. Commerce.js tracks the current cart ID using a cookie.

#### `refresh()`

The `refresh()` method uses `GET v1/carts` to create a new cart and update the stored cart ID in Commerce.js.

#### `add()`

The `add()` method uses `POST v1/carts/{cart_id}` to add a product to cart. You will need the ID of the product you want to add, e.g. `prod_05389st98t49h`.

#### `update()`

The `update()` method uses `PUT v1/carts/{cart_id}/items/{line_item_id}` to update the quantity or variant for the line item ID in the cart.

#### `remove()`

The `remove()` method uses `DELETE v1/carts/{cart_id}/items/{line_item_id}` to remove a specific line item from the cart.

#### `empty()`

The `empty()` method uses `DELETE v1/carts/{cart_id}/items` to clear the contents of the current cart. This is different from the `.refresh()` method in that it empties the current cart but does not create a new cart.

### The Checkout

Commerce.js provides many tools to streamline checkout implementations. The checkout in this demo store makes use of:

- Commerce.js's country and region APIs,
- Shipping methods API.

#### Methods used:

#### `generateToken()`

The `generateToken()` method uses `GET v1/checkouts/{id}` to generate a checkout token which can be used to initiate the process of capturing an order from a cart. `generateTokenFrom()` gets a new checkout token from a specific identifier type.

#### `capture()`

The `capture()` method uses `POST v1/checkouts/{checkout_token_id}` to capture an order and payment by providing the checkout token and necessary data for the order to be completed. The resolved promise returns an order object which can be used for receipt.

#### `getShippingOptions()`

The `getShippingOptions()` method uses `GET v1/checkouts/{checkout_token_id}/helper/shipping_options` to return a list of available shipping methods for the provided checkout token.

#### `localeListCountries()`

The `localeListCountries()` method uses `GET v1/services/locale/countries` to return a list of all countries registered in the platform. See List available shipping countries for an equivalent list of countries that can be shipped to your account.

#### `localeListSubdivisions()`

The `localeListSubdivisions()` method uses `GET v1/services/locale/{country_code}/subdivisions` to return a list of all subdivisions (states, provinces, or regions) for a country, given a valid country code is provided. See List available shipping subdivisions for country for an equivalent list of subdivisions that can be shipped to for your account.

#### `localeListShippingCountries()`

The `localeListShippingCountries()` method at `GET v1/services/locale/{checkout_token_id}/countries` returns only the countries which can be shipped to the current checkout.

#### `localeListShippingSubdivisions()`

The `localeListShippingSubdivisions()` method at `GET v1/services/locale/{checkout_token_id}/countries/{country_code}/subdivisions` returns only the subdivisions (states, provinces, or regions) in a country which can be shipped to for the current checkout.

### Customers

Commerce.js provides inbuilt functionality for supporting customer logins without any server side code. The customer information is also used to pre-populate the checkout with known customer details.

### Payment gateways

This demo store is configured with Stripe. Stripe Elements support is included if Stripe is configured on the Chec Dashboard.

[Commerce.js <> Stripe integration documentation](https://commercejs.com/docs/guides/stripe-integration)

#### Enabling Stripe

You must enable Stripe in the Chec Dashboard by following the instructions provided. You may add your sandbox
keys for Stripe, and use a sandbox Chec public API key to test with Stripe. Both the Chec public API key, and the Stripe
"publishable" key are configured in the `.env` file. See step two of
"[Manual setup and Netlify deployment](#manual-setup-and-netlify-deployment)"

#### Configure React Stripe.js

##### Setup

Install React Stripe.js and the Stripe.js loader from the npm public registry.

```shell
npm install --save @stripe/react-stripe-js @stripe/stripe-js # or yarn add
```

##### Elements provider

The Elements provider allows you to use Element components and access the Stripe object in any nested component. Render an Elements provider at the root of your React app so that it is available everywhere you need it.

To use the Elements provider, call loadStripe from @stripe/stripe-js with your publishable key. The `loadStripe()` function asynchronously loads the Stripe.js script and initializes a Stripe object. Pass the returned Promise to Elements.

```jsx
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}
```

##### ElementsConsumer

To safely pass the payment information collected by the Payment Element to the Stripe API, access the Elements instance so that you can use it with stripe.confirmPayment. If you need to access the Stripe object or an Element from a class component, then ElementsConsumer provides an alternative to the useElements and useStripe hooks.

```jsx
// ... other imports
import { CardElement } from '@stripe/react-stripe-js';

const PaymentForm = ({ ... }) => {
  // logic ...
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

```

##### stripe.createPaymentMethod(paymentMethodData)

Use stripe.createPaymentMethod to convert payment information collected by elements into a PaymentMethod object that you safely pass to your server to use in an API call.

NOTE: In most integrations, you will not need to use this method. Instead, use methods like stripe.confirmCardPayment, which will automatically create a PaymentMethod when you confirm a PaymentIntent.

```jsx
// ... other imports
import { CardElement } from '@stripe/react-stripe-js';

const PaymentForm = ({
  checkoutToken,
  shippingData,
  backStep,
  nextStep,
  onCaptureCheckout,
  timeout,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error] ", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      nextStep();
    }
  };
  return (
    // render the UI...
  )
```

## Customization and Extendability

TODOS:

- Implement an existing/new customer login page, and provides detail about previous orders.
- Add shipping zones and enable shipping options in each product
- Utilize discounts API (for validating and applying discounts at the checkout).
- Customizing the styling
  - All global styles are done using Material-UI
- [A/B testing checkout designs](https://commercejs.com/blog/split-ab-testing-checkouts-with-netlify) and flows
- Integrating other backend tools like Content Management Systems, Customer Support, Fulfillment services, and more
- Fetching real client reviews from review APIs
- Adding search functionality
- Leveraging [webhooks](https://commercejs.com/blog/webhooks-pizza-and-order-notifications-via-twilio) to automate post checkout actions
