/*
You’re working on a system that validates packages that will be shipped to Amazon customers.
Each package contains a number of Orders, where each Order includes an “itemId”,
and the “quantity” of that item ordered.

1. Write a method that converts a list of itemIds into a list of Order objects.

2. Given a list of itemIds, which represents all the items found in the package,
and a list of Orders, which represents the expected Orders,
write a method that returns the difference as a new list of Orders.
*/

const list = [1, 2, 3, 1];

const val = {};
list.forEach(e => {
    val[e] = (val[e] || 0) + 1;
});
const res = [];
Object.keys(val).forEach(key => {
    res.push({
        itemId: key,
        quantity: val[key],
    });
});
// time complexity: O(n);
// space complexity: O(n); becuase line 17 which assign value, based on length of list, so S(n) <= n.
// line 19 has another assign one, it is length of val, we can set it to m
// hence, base case is O(1), worest is O(n), avage is also O(n).

const orders = [
  { itemId: 3,  quantity: 2 },
  { itemId: 4, quantity: 5 },
  { itemId: 5, quantity: 6 },
];
const orderObj = {};
orders.forEach(order => {
  orderObj[order.itemId] = order.quantity;
})

const differ = [];
Object.keys(val).forEach(id => {
  if (!orderObj[id]) {
    differ.push({
      itemId: id,
      quantity: val[id],
    });
  }
});
Object.keys(orderObj).forEach(id => {
  if(!val[id]) {
    differ.push({
      itemId: id,
      quantity: orderObj[id],
    });
  }
});

// time complexity: O(m+n);
// space complexity: O(m+n);
