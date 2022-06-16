import cypress = require('cypress');
import { eq } from 'cypress/types/lodash';
import { RobotHands, Dependencies,RobotEyes } from '../../robots/Amazon/amazonRobots'

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()
        
   
        it('Navigate to Amazon Page', () => {
           
            dependencies.visitWebsite(Cypress.env('url'))
        })
        it('SignIn', () => {

            robotHands.signInMouseHover('#nav-link-accountList')
            robotHands.clickOnSignIn('#nav-flyout-ya-signin > a > span')
            robotEyes.assertPath('/ap/signin')
            robotHands.enterEmailAddress('input[type=email]',Cypress.env('email'));
            robotHands.clickOnContinue('.a-button-inner > #continue')
            robotEyes.assertPath('/ap/signin')
            robotHands.wait(3000)
            robotHands.enterPassword('input[type=password]',Cypress.env('password'))
            robotHands.wait(3000)
            robotHands.clickOnSignIn('input[type=submit]')
            robotHands.wait(3000)
            robotEyes.seesTextWithId('nav-link-accountList > div','Hello, Suma')

            


        })
        
        it('Search for the todays deals', () => {
            robotEyes.seesIdVisible('nav-xshop')
            robotHands.searchTodaysDeals('nav-xshop','a',0)
            robotEyes.assertPath('/international-sales-offers')
            robotEyes.assertTodaysDeals('#a-page > div.a-container > div > div > div:nth-child(1) > div','Deals and Promotions')

        })

        it('Search for third deal and click on add to cart and verify the cart', () => {
            robotHands.searchForThirdDeal('#dealTitle > span',2)
            robotEyes.seesTitle('#productTitle')
            robotHands.addToCart('#add-to-cart-button')
            robotHands.clickOnDomElement('#attach-close_sideSheet-link')
            robotHands.wait(4000)
            robotHands.viewCart('.nav-cart-icon')
            robotHands.wait(4000)
            robotEyes.seesTextWithId('nav-cart-count','1')
            robotHands.wait(8000)
            robotEyes.assertCart('sc-active-cart > div > div > div:nth-child(1) > h1','\nShopping Cart\n')
            robotHands.wait(4000)
            robotEyes.seesTitle('.a-link-normal > .a-size-medium')

        })
        
        
        it('Search for Mobile on search Box and click on last item  and get the details', () => {
            robotHands.typeOnSearchBox('twotabsearchtextbox','Mobile')
            robotHands.clickOnSearchButton('#nav-search-submit-button')
            robotEyes.assertPath('/s')
            robotHands.scrollAndClickOndom('a[class="a-link-normal a-text-normal"]:eq(60)')
            robotHands.wait(3000)
            robotEyes.seesTitle('#productTitle')
        
        })
        
        it('Goto Your Orders and Select Past One Year Order', () => {
            robotHands.clickOnOrdersFromTopRightSide('#nav-orders > span.nav-line-2')
            robotEyes.assertPath('ap/signin/')
            robotHands.enterEmailAddress('input[type=email]',Cypress.env('email'));
            robotHands.clickOnContinue('.a-button-inner > #continue')
            robotEyes.assertPath('ap/signin')
            robotHands.enterPassword('input[type=password]',Cypress.env('password'))
            robotHands.clickOnSignIn('input[type=submit]')
            robotEyes.assertPath('/gp/css/order-history')
            robotHands.clickOnOrdersButton('span[role=button]')
            robotHands.clickOnSpecificOrderDropdown('a[class="a-dropdown-link"]',2)
            robotEyes.assertPath('gp/your-account/order-history')
            robotEyes.seesProductTitle('.a-spacing-extra-large > .a-section')

        })
        it('Navigate to amazon.in',()=>{
           
            dependencies.visitWebsite(Cypress.env('url2'))

        })
        it('Check the prime checkbox and get the 1st item delivery details',()=>{

            robotHands.clickOnoFirstItem('nav-xshop > a:nth-child(4)')
            robotEyes.seesPathNameInUrl('/mobile-phones/b/')
            robotHands.checkThePrimeBox('#s-refinements > div:nth-child(3) > ul > li > span > a > div > label > input[type=checkbox]')
            robotHands.wait(3000)
           // robotEyes.seesProductTitle('div[class="a-row a-size-base a-color-secondary s-align-children-center"]>span:eq(0)')
            robotEyes.seesProductTitle('div[class="a-row a-size-base a-color-secondary s-align-children-center"]>div>span:eq(1)')
            
            
            

        })

        
        it.skip('Add a new Payment Option and verify Payment Option is Added', () => {

            robotHands.mouseOverOnAccount('#nav-link-accountList')
            robotEyes.asserMouseOverOnAccount('nav-al-your-account > a:nth-child(2)','Your Account')
            robotHands.clickOnaccount('#nav-al-your-account > a:nth-child(2) > span')
            robotEyes.seesTextWithId('a-page > div.a-container > div > div:nth-child(3) > div:nth-child(2) > a > div > div > div > div.a-column.a-span9.a-span-last > h2','\n                Payment options\n            ')
            robotHands.clickOnPayments('#a-page > div.a-container > div > div:nth-child(3) > div:nth-child(2) > a > div > div > div > div.a-column.a-span9.a-span-last')
            robotHands.enterEmailAddress('input[type=email]',Cypress.env('email'));
            robotHands.clickOnContinue('.a-button-inner > #continue')
            robotEyes.assertPath('ap/signin')
            robotHands.enterPassword('input[type=password]',Cypress.env('password'))
            robotHands.clickOnSignIn('#signInSubmit')
            robotEyes.assertPath('/cpe/managepaymentmethods')
            robotHands.clickOnPaymentMethod('.a-button-input')
            // robotHands.switchToIFrame('iframe[class="apx-secure-iframe pmts-portal-component pmts-portal-components-pp-2gol5a-16"]','input[name="addCreditCardNumber"]',Cypress.env('cardNumber'))
            
            
        })
        
        it('Add a new Address Option and verify Address Option is Added', () => {

            robotHands.mouseOverOnAccount('#nav-link-accountList')
            robotEyes.asserMouseOverOnAccount('nav-al-your-account > a:nth-child(2)','Your Account')
            robotHands.clickOnaccount('#nav-al-your-account > a:nth-child(2) > span')
            robotEyes.seesTextWithId('a-page > div.a-container > div > div:nth-child(3) > div:nth-child(2) > a > div > div > div > div.a-column.a-span9.a-span-last > h2','\n                Payment options\n            ')
            robotHands.clickOnAddress('#a-page > div.a-container > div > div:nth-child(3) > div:nth-child(1) > a > div > div > div > div.a-column.a-span9.a-span-last')
            robotHands.enterEmailAddress('input[type=email]',Cypress.env('email'));
            robotHands.clickOnContinue('.a-button-inner > #continue')
            robotEyes.assertPath('ap/signin')
            robotHands.enterPassword('input[type=password]',Cypress.env('password'))
            robotHands.clickOnSignIn('#signInSubmit')
            robotEyes.assertPath('/a/addresses')
            robotHands.clickOnId('ya-myab-plus-address-icon')
            robotHands.typeTextOntoTheAddressField('address-ui-widgets-enterAddressFullName',Cypress.env('name'))
            robotHands.typeTextOntoTheAddressField('address-ui-widgets-enterAddressPhoneNumber',Cypress.env('phone'))
            robotHands.typeTextOntoTheAddressField('address-ui-widgets-enterAddressPostalCode',Cypress.env('pincode'))
            robotHands.typeTextOntoTheAddressField('address-ui-widgets-enterAddressLine1',Cypress.env('addressLine1'))
            robotHands.typeTextOntoTheAddressField('address-ui-widgets-enterAddressLine2',Cypress.env('addressLine2'))
            robotHands.typeTextOntoTheAddressField('address-ui-widgets-landmark',Cypress.env('landMark'))
            robotHands.clickOnId('address-ui-widgets-form-submit-button > span > input')
            robotHands.clickOnId('address-ui-widgets-form-submit-button > span > input')
            robotEyes.seesTitle('#yaab-alert-box > .a-box-inner')

            

         })
         it('Navigation - from left nav to Mobiles and select Mobiles phones and go back to the main menu.',()=>{
    
            robotHands.clickOnMenu('nav-hamburger-menu')
            robotEyes.assertNavigation('hmenu-customer-profile','\n    \n      \n    \n  \n    \n      Hello, Sign in\n    \n  \n')
            robotHands.scrollAndNavigateToMobile('.hmenu-visible > :nth-child(15) > .hmenu-item')
            robotHands.clickOnDomElement('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(1) > a')
            robotEyes.seesTitle('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(14) > div')

         })

 })


