/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   
    return{
        toBe: function(val_1){

            if (val === val_1) return true;
            throw "Not Equal"
        },
        notToBe: function(val_2){
            if (val !== val_2) return true;
            throw "Equal"
        }
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
