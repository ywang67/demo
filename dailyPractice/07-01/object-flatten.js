// object flatten.
var obj = {
  1: {
    10: 'hello',
    20: 'nihao',
  },
  2: {
    10: 'bangjo',
    20: {
      100: 'namaste',
    },
  },
};

const flatten = (val) => {
  var res = {};
  function flat(currVal, keychain) {
    if (typeof currVal !== 'object') {
      res[keychain] = currVal;
    } else {
      Object.keys(currVal).forEach(nextKey => {
        var newKeyChain = nextKey;
        if (keychain) {
          newKeyChain = `${keychain}.${nextKey}`;
        }
        flat(currVal[nextKey], newKeyChain);
      });
    }
  }
  flat(val, null);
  return res;
}


console.log(flatten(obj));
