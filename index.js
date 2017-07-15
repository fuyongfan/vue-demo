/**
 *  20170715
 */
var vm = new Vue({
    el: '#app',
    data: {
        commodities: [],
        name: '',
        price: '',
        count: '',
        totalAmount: ''
    },
    methods: {
        removeThis(remIndex) {
            let {price, count} = this.commodities[remIndex];
            this.commodities = this.commodities.filter((item, index) => {
                return index !== remIndex;
            });
            this.totalAmount -= price * count;
        },
        removeAll() {
            this.commodities = [];
            this.totalAmount = '';
        },
        handleAdd() {
            let {name, price, count} = this;
            this.commodities.push({name: name, price: price, count: count});
            this.totalAmount = +this.totalAmount + price * count;
            this.handleReset();
        },
        handleReset() {
            this.name = this.price = this.count = '';
        }
    }
});
 