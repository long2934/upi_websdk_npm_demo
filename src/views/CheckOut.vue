<template>
    <main class="wrapper">

    <div class="overlay"></div>

    <div class="container">
      <div class="py-5 text-center">
        <h2>Checkout form</h2>
      </div>

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill">1</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Product name</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$12</strong>
            </li>
          </ul>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Billing address</h4>
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="firstName" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="lastName" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>


            <div class="mb-3">
              <label for="email">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address">
              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info">
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr class="mb-4">

            <h4 class="mb-3">Payment</h4>

            <div class="d-block my-3">

                <div id="dropin-container"></div>
<div id="paypal-button"></div>
<div id="paypal-button-checkout"></div>

<div id="venmo_button_id"></div>
<div id="bt_credit_card"></div>
            </div>
            <hr class="mb-4">
            <button class="btn btn-primary btn-lg btn-block" onclick="SubmitPayment()" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>

      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2021 Citcon</p>
      </footer>
    </div>

      </main>
</template>
<script>
import  loadUPI from 'citcon-upi-web-sdk';

export default {
  data () {
    return {
      citconCient: null
    }
  },
  created() {
    console.log('on created......');
    // const {err, script} = loadUPI('dev');
    loadUPI('dev', function (err, script) {
      if (err) {
        // print useful message
      }
      else {
        console.log( JSON.stringify( script));// Prints 'foo'.js'
        // use script
        // note that in IE8 and below loading error wouldn't be reported
        // Init Citcon SDK Client
          citconpay.client.create({
              clientToken:'citconClientToken',
              environment: 'dev' //dev/qa/uat/prod
          }).then(function(clientInstance) {
            console.log('init ....' + JSON.stringify(clientInstance));
          }).catch(error=>{
            console.log(' init error ...' + JSON.stringify(error));
          })
      }
    })
    // console.log('citcon client..' + JSON.stringify(script));
  },
	methods: {
		getPrice (name) {
			const product = this.inventory.find((p) => {
				return p.name === name
			})
			return product.price.USD
		},

		calculateTotal () {
			const total = Object.entries(this.cart).reduce((acc, curr, index) => {
				return acc + (curr[1] * this.getPrice(curr[0]))
			}, 0)
			return total.toFixed(2)
		}
	}
}
</script>