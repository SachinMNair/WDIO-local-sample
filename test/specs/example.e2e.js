describe('Check URL loading time', () => {
    before('Before Hook', async () => {
        console.log('Before All hook starting...');
        await browser.url("https://www.cnn.com/2022/07/26/entertainment/mira-sorvino-paul-tributes");
        console.log('Before All hook ending...');
    })
    it('It block', async () => {
        console.log('Inside It block...');
        // await browser.url(`https://the-internet.herokuapp.com/login`);

        // await $('#username').setValue('tomsmith');
        // await $('#password').setValue('SuperSecretPassword!');
        // await $('button[type="submit"]').click();

        // await expect($('#flash')).toBeExisting();
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});

