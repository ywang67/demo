// Code goes here
angular.module('product', [])

    .service('productData', function () {
        return [
            {
                type:'IRA',
                id:'5200',
                avail_cash:'$5,763.36',
                ratetype: true,
                changerate : '-0.08',
                changemount:'$8,916.69'
            },
            {
                type:'AAA',
                id:'3810',
                avail_cash:'$10,050,054.07',
                changerate : '+0.07',
                changemount:'$8,916.69'

            },
            {
                type:'REG',
                id:'2019',
                avail_cash:'$13,465,679.34',
                changerate : '0.00',
                changemount:'$0'
            },{
                type:'AAA',
                id:'1812',
                avail_cash:'$2,010,926.10',
                changerate : '+0.21',
                changemount:'$38,881.63'
            },{
                type:'IRA',
                id:'0146',
                avail_cash:'$15,884,302.39',
                changerate : '+0.03',
                changemount: '$7,430.83'
            },{
                type:'AAA',
                id:'0029',
                avail_cash:'$39,160,334.42',
                changerate : '-0.07',
                changemount: '$31,435.87'
            }
        ];
    })

    .controller('productController', function ($scope,productData) {
        $scope.productData = productData;
        $scope.orderType = 'id';
        $scope.order = '-';


     

        $scope.changeOrder = function(type){
            $scope.orderType = type;
            if($scope.order===''){
                $scope.order='-';
            }else{
                $scope.order='';
            }
        };

        $scope.limit = 3;

    });
