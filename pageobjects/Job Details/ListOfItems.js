class ListOfItems{

    constructor(page){
        this.page = page;
        this.titlePage = page.locator('');

        this.viewItemsLink = page.locator('');
        this.itemNameValue = page.locator('');
        this.quantityValue = page.locator('');
        this.unitPriceValue = page.locator('');
        this.lengthValue = page.locator('');
        this.heightValue = page.locator('');
        this.breadthValue = page.locator('');
        this.depthValue = page.locator('');
        this.weightValue = page.locator('');
        this.declaredValue = page.locator('');
        this.closeButton = page.locator('');
    }
}

module.exports = {ListOfItems};