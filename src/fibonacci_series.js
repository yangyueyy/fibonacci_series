'use strict';

function fibonacci_series(n) {
    var i=0;
    var array=[0,1];

    for(i=2;i<=n;i++){
        array[i]=array[i-1]+array[i-2];
    }

    return array;
}

module.exports = fibonacci_series;
