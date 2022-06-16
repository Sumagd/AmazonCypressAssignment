import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';



export class Dependencies extends BaseDependencies 
{
   visitWebsite(text:string)
   {
        this.accessUrl(text);
    }
}

export class RobotEyes extends BaseEyes{
    
    assertTodaysDeals(locator:string,text:string)
    {
        this.seesDomContainText(locator,text)
    }

    assertThirdDealURL(path:string)
    {
        this.seesPathNameInUrl(path)
    }
    assertPath(path:string)
    {
        this.seesPathNameInUrl(path)
    }
    assertAddedToCart(locator:string,text:string)
    {
        this.seesTextWithId(locator,text)
    }
    seesTitle(locator:string)
    {
        this.seesProductTitle(locator)
    }
    assertCart(locator:string,text:string)
    {
        this.seesTextWithId(locator,text)
    }
    asserMouseOverOnAccount(locator:string,text:string)
    {
        this.seesTextWithId(locator,text)
    }
    assertNavigation(locator:string,text:string)
    {
        this.seesTextWithId(locator,text)
    }

}

export class RobotHands extends BaseHands{

    signInMouseHover(locator:string)
    {
        this.mouseOver(locator)
        
    }

    clickOnSignIn(locator:string)
    {
        this.clickOnDomElement(locator)
    }
    
    enterEmailAddress(locator:string,text:string)
    {
         this.typeTextOnDomUsingCSS(locator,text)
     }
    clickOnContinue(locator:string)
    {
        this.clickOnDomElement(locator)
     }
    enterPassword(locator:string,text:string)
    {
        this.typeTextOnDomUsingCSS(locator,text)
    }
    searchTodaysDeals(Idlocator:string,dom:string,index:number)
    {
        this.clickOnChildDom(Idlocator,dom,index)
    }
    searchForThirdDeal(locator:string,index:number)
    {
        this.clickOnDomElementWithIndex(locator,index)
    }

    addToCart(locator:string)
    {
        this.scrollAndClickOndom(locator)
    }
    viewCart(locator:string)
    {
        this.clickOnDomElement(locator)
    }
    typeOnSearchBox(id:string,text:string)
    {
        this.typeTextonId(id,text)
    }
    clickOnSearchButton(locator:string)
    {
        this.clickOnDomElement(locator)
    }

    clickOnOrdersFromTopRightSide(locator:string)
    {
        this.clickOnDomElement(locator)
    }

    clickOnOrdersButton(locator:string)
    {
        this.clickOnDomElement(locator)
    }
    clickOnSpecificOrderDropdown(locator:string,index:number)
    {
        this.clickOnDomElementWithIndex(locator,index)

    }   
    mouseOverOnAccount(locator:string)
     {
         this.mouseOver(locator)
     }
     clickOnaccount(locator:string)
     {
         this.clickOnDomElement(locator)
     }
     clickOnPayments(locator:string)
    {
        this.clickOnDomElement(locator)
    }
    clickOnPaymentMethod(locator:string)
    {
        this.scrollAndClickOndom(locator)
    }
    enterCardNumber(locator:string,text:string)
    {
        this.typeTextonId(locator,text)
    }
    clickOnoFirstItem(locator:string)
    {
        this.clickOnId(locator)
    }
    checkThePrimeBox(locator:string)
    {
        this.checkTheDomElement(locator)
    }
    // switchToIFrame(iframelocator:string,dom:string,text:string)
    // {
    //     this.switchToFrame(iframelocator,dom,text)
    // }
    clickOnAddress(locator:string)
    {
        this.clickOnDomElement(locator)
    }
    clickOnMenu(locator:string)
    {
        this.clickOnId(locator)
    }
    scrollAndNavigateToMobile(locator:string)
    {
        this.scrollAndClickOndom(locator)
    }
    typeTextOntoTheAddressField(locator:string,text:string)
    {
        this.typeTextonId(locator,text)
    }
    
    
     
}
