import app from '../../main'
import React from "react";
import ReactDOM from "react-dom";
import BarChart from "../react/BarChart";

const reactDirective = app.directive('reactDirective', function() {
  return {
      template: '<div id="reactapp" class="react-part"></div>',
      scope: {
        data: '=',
      },
      link: function(scope, el, attrs){
            
          const reactapp = document.getElementById('reactapp')

          ReactDOM.render(
              <BarChart data={scope.data}/>
              , reactapp);

        }
    }
})

export default reactDirective
