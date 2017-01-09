var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * [group description]
 * @param  {[type]} arr [description]
 * @param  {[type]} len [分成的数组长度]
 * @return {[type]}     [description]
 */

var groupArr = group(arr, 3);
console.log(groupArr);

function group(arr, len) {
    if (len <= 1 || arr.length <= len) {
        return arr;
    }

    var item = [];
    var result = [];

    arr.forEach(function(i) {
        item.push(i);
        if (item.length === len) {
            result.push(item);
            item = [];
        }
    });

    if (item.length) {
        result.push(item);
    }

    return result;
}
