const binarySearch = (val, arr) {
    arr.sort();
    if (arr.length < 1 || val < arr[0] || val > arr[arr.length - 1]) {
        return false;
    } else if (val === arr[0] || val === arr[arr.length - 1]) {
        return true;
    } else if (arr.length === 1) {
        return false;
    }
    const res = [];
    var base = Math.floor(arr.length/2);
    if (val > arr[base]) {
        res = arr.splice(base + 1, arr.length - 1);
    } else if (val === arr[base]) {
        return true;
    } else {
        res = arr.splice(0, base - 1);
    }
    return binarySearch(val, res);
}