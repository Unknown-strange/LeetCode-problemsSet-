/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    count = 0;
    for (i= args.length -1; i >= 0; i--){
        count = count + 1;
    }
    return count
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
