var _ = require('lodash');


const data = [
        {id: 1, name: 'John', Group: {id: 5, name: "Admin" } },
        {id: 2, name: 'Steve', Group: {id: 1, name: "Accounting" } },
        {id: 3, name: 'Mary', Group: {id: 1, name: "Accounting" } },
        {id: 4, name: 'Dave', Group: {id: 5, name: "Admin" } },
        {id: 5, name: 'Daphnie', Group: {id: 2, name: "Development" } },
        {id: 6, name: 'Jenny', Group: {id: 2, name: "Development" } },
        {id: 7, name: 'Pat', Group: {id: 5, name: "Admin" } }
    ]

/*   var grouped = _.groupBy(data, function(e){

        return e.Group.name;
    })*/

/*var grouped = data.reduce((r, e) => {
 r[e.Group.name] = r[e.Group.name] || [];
 r[e.Group.name].push((({id, name})=> ({id, name}))(e));
 return r;
 }, Object.create(null));*/



var grouped = _.reduce(data, function(obj, e){
    obj[e.Group.name] = obj[e.Group.name] || [];
    obj[e.Group.name].push(_.pick(e, ['id', 'name']));
    return obj
}, {})


console.log(grouped);




data[2].id = 5;
data[2].name = "Paul";
data[2].Group.name = "Admin"

console.log(data);




var params = [
    { name: 'foo', input: 'bar' },
    { name: 'baz', input: 'zle' }
];

var paramsTest = _.reduce(params , function(obj,param) {
    obj[param.name] = param.input
    return obj;
}, {});

console.log(paramsTest);
