var math = {
    add: function (a, b) {
        return a + b;
    },
    sum: function (array) {
        return array.reduce(function (sum, element) {
            return sum + element;
        })
    }
};

module.exports = math;