class PostJobCreation{

    constructor(page){
        this.page = page;
        this.addNewPostButton = page.locator('text=Add New Post');

        //schedule post
        //Step 1
        this.ondemandDelivery = page.locator('text=On Demand DeliverySame-day pickup and delivery');
        this.scheduledDelivery = page.getByText('Scheduled DeliveryScheduled pickup and delivery');
        this.nextStep = page.getByRole('button', { name: 'Next Step ' });

        //Pickup Details
        //Step 2
        this.useLastProfileButton = page.getByRole('button', { name: 'Use Last Profile' });
        this.referenceNumberTextfield = page.locator('input[name="refNo"]');
        this.senderNameTextfield = page.locator('input[name="customerName"]');
        this.mobileNumberTextfield = page.locator('input[name="contactNumber"]');
        this.emailAddressTextfield = page.locator('input[name="emailAddress"]');
        this.addressTextfield = page.locator('input[name="address"]');
        this.provinceDropdownfield = page.locator('.css-1hwfws3').first();
        this.cityDropdownfield = page.locator('div:nth-child(2) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control > .css-1hwfws3').first();
        this.barangayDropdownfield = page.locator('div:nth-child(4) > .form-control-input-select > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control');
        this.postalCodeTextfield = page.locator('input[name="postalCode"]');
        this.pickupDateAndTimePicker = page.locator('.form-control');
        this.hubDropdownfield = page.locator('div:nth-child(2) > .form-control-input-select > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control');
        this.remarksTextfield = page.locator('textarea[name="remarks"]');
        this.tagsDropdownfield = page.locator('div:nth-child(4) > div:nth-child(2) > .css-1pcexqc-container > .css-bg1rzq-control');
        this.previousStep = page.getByRole('button', { name: ' Previous Step' });


        //Delivery Details
        //Step 3
        //Pricing Details
        this.quantityTextfield = page.getByPlaceholder('1');
        this.codAmountTextfield = page.locator('input[name="codAmount"]');
        this.declaredValueTextfield = page.locator('input[name="itemPrice"]');
        this.lengthTextfield = page.locator('input[name="length"]');
        this.widthTextfield = page.locator('input[name="width"]');
        this.heightTextfield = page.locator('input[name="height"]');
        this.weightTextfield = page.locator('input[name="weight"]');
        this.itemDescription = page.locator('textarea[name="details"]');
        //List of items
        this.addListButton = page.locator('.add-new-items');
        this.selectListOfItemsDropdownfield = page.locator('div:nth-child(2) > .css-bg1rzq-control');
        this.viewItemsEyeIcon = page.locator('.view__items > .fas');

        //Select Courier
        

    }

    async clickAddNewPost(){await this.addNewPostButton.click()};
    async selectOndemandDelivery(){await this.ondemandDelivery.click()};
    async selectScheduledDelivery(){await this.scheduledDelivery.click()};
    async clickUseLastProfile(){await this.useLastProfileButton.click()}
    async clickNextStep(){await this.nextStep.click()};
    async clickPreviousStep(){await this.previousStep.click()};

    async inputReferenceNumber(refNo){
        await this.referenceNumberTextfield.type(refNo);
    }

    async inputSenderName(senderName){
        await this.senderNameTextfield.type(senderName);
    }

    async inputMobileNumber(number){
        await this.mobileNumberTextfield.type(number);
    }

    async inputEmailAddress(email){
        await this.emailAddressTextfield.type(email);
    }

    async inputAddress(address){
        await this.addressTextfield.type(address);
    }

    async selectProvince(province){
        await this.provinceDropdownfield.click();
        await this.provinceDropdownfield.type(province);
        await this.provinceDropdownfield.press('Enter');
    }
    async selectCity(city){
        await this.cityDropdownfield.click();
        await this.cityDropdownfield.type(city);
        await this.cityDropdownfield.press('Enter');
    }
    async selectBarangay(barangay){
        await this.barangayDropdownfield.click();
        await this.barangayDropdownfield.type(barangay);
        await this.barangayDropdownfield.press('Enter');
    }

    async inputPostalCode(postalCode){
        await this.postalCodeTextfield.type(postalCode);
    }

    async selectPickupDateAndTime(pickupTimeDate){
        await this.pickupDateAndTimePicker.click();
    }

    async selectHubStores(hub){
        await this.hubDropdownfield.click();
    }

    async inputRemarks(remarks){
        await this.remarksTextfield.type(remarks);
    }

    async inputQuantity(quantity){
        await this.quantityTextfield.type(quantity);
    }

    async inputCodAmount(codAmount){
        await this.codAmountTextfield.type(codAmount);
    }

    async inputDeclaredValue(declaredValue){
        await this.declaredValueTextfield.type(declaredValue);
    }

}

module.exports = {PostJobCreation};