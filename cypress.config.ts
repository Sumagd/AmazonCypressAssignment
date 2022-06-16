export default {
  env: {
    url: 'https://www.amazon.com/',
    url2: 'https://www.amazon.in/',
    email: 'suma.g.d97@gmail.com',
    password: 'sumarani@2527',
    cardNumber: '',
    cardName: '',
    name: '',
    phone: '',
    pincode: '',
    addressLine1: '',
    addressLine2: '',
    landMark: '',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
}
