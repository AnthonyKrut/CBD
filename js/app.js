'use strict';

let app_cart = new Vue({
    el: '#cart',
    data: {
        products: []
    },
    computed: {
        cart_qty() {
            let total = 0;
            this.products.forEach(el =>
                total += el.qty);
            return total;
        },
        cart_cost() {
            let total = 0;
            this.products.forEach(el =>
                total += el.qty * el.price);
            return total.toFixed(2);
        }
    },
    methods: {
        plusQty(product_id) {
            this.products.forEach(el => {
                if (el.id === product_id)
                    el.qty++;
            })
        },
        minusQty(product_id) {
            this.products.forEach((el, i) => {
                if (el.id === product_id)
                    if (el.qty > 0) {
                        el.qty--;

                    } else {
                        this.products.splice(i, 1);
                    }
            })
        },
    }
});

let app_shop = new Vue({
    el: '#shop',
    data: {
        products: [
            {
                id: 'prod01',
                name: 'CBD Orange Flavor Tincture 500 mg ',
                pic: './img/cntnt/prdct-01-tincture.png',
                price: 49.99,
            },
            {
                id: 'prod02',
                name: 'CBD Black ICE Muscle Rub 200 mg',
                pic: './img/cntnt/prdct-02-rub.png',
                price: 49.99,
            },
            {
                id: 'prod03',
                name: 'CBD+Curcumin Coffee 750 mg',
                pic: './img/cntnt/prdct-03-coffee.png',
                price: 79.99,
            },
            {
                id: 'prod04',
                name: 'CBD Black ICE Muscle Rub 200 mg CLONE',
                pic: './img/cntnt/prdct-02-rub.png',
                price: 49.99,
            },
        ]
    },
    methods: {
        bindStar(id, place) {
            return `${id} + ${place}`;
        },
        addToCart(product_id) {
            let el_cart = app_cart.products.find(el =>
                el.id === product_id);
            if (el_cart) {
                el_cart.qty++;
            } else {
                let el_shop = app_shop.products.find(el =>
                    el.id === product_id);
                app_cart.products.push(Object.assign({}, el_shop, { qty: 1 }));
            }
        }
    }
});
