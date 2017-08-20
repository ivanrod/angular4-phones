const router = require('koa-router')();

router.get('/phones', function (ctx, next) {
    const phones = [
        {
            id: 1,
            name: 'iphone7',
            description: '',
            color: 'red',
            price: 700
        },
        {
            id: 2,
            name: 'galaxyS7',
            description: '',
            color: 'blue',
            price: 600
        },
    ];

    ctx.body = JSON.stringify(phones);
});

module.exports = router;