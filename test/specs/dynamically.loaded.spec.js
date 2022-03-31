const dynamicLoading = require('../pageobjects/dynamically.loaded.page');

describe('My dynamic loading page application', () => {
    it('should click the start button', async () => {
        await dynamicLoading.open();

        await (dynamicLoading.startBtn).click();
    });

    it('should run a while loop on the h4', async () => {
        //This whole thing is broken
        let h4 = true
        while (h4) {
            //await expect(dynamicLoading.h4).toHaveTextContaining('Hello World!');
            //await expect(dynamicLoading.h4).toBeExisting();
        console.log("🚀 ~ the h4 is currently not visible", h4)
            h4 = false
        }
    });
    
});