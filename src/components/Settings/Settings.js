import React from 'react'
import IncrementerClass from '../forPracticing/IncrementerClass'
import IncrementerFunc from '../forPracticing/IncrementerFunc'
import {Line} from 'react-chartjs-2';
import {curveBasis} from "d3-shape";
import curveRadial from "d3-shape/src/curve/radial";
import {findRenderedComponentWithType} from "react-dom/test-utils";

// -----------------------------------------------------------
// [5, 3, 2, 8, 1, 4] // to: [1, 3, 2, 8, 5, 4]
const array = [5, 3, 2, 8, 1, 4];
const sortOdd = (arr) => {
    const oddSort = arr.filter(el => el % 2 !== 0).sort();
    return arr.map(el => el % 2 === 0 ? el : oddSort.shift())
}
console.log(sortOdd(array))
console.log('Hello');
console.log('Test');
console.log('Test123');
console.log('feture/2');

console.log('TestGit');
console.log('feature/3 test1');
console.log('feature/3 test2');
console.log('feature/3 test3');
console.log('feature/3 test4');

console.log('feature/2 test1');

console.log('feature/5 test1');
console.log('feature/5 test2');
console.log('feature/5 test3');
console.log('feature/5 test4');
console.log('feature/5 test5');
console.log('feature/5 test6');




// --------------------------------------------------------------
// [1 , 3, "5", ['2x', 3, ['x2']]]; // 14
const arr1 = [1, 3, "5", ['2x', 3, ['x2']]];
const sum = (arr) => (
    arr.reduce((acc, current) => {
        const res = Array.isArray(current) ? sum(current) : 1
        return acc + res
    }, 0)
)
console.log(sum(arr1))
// ------------------------------------------------------------
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 100);
//     })(i)
// }
for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {
        console.log(i);
    }.bind(this,i), 100);
}
// ------------------------------------------------------------------------------------

var str = 'abcdeor';
var newstr = str.replace(/[aeo]/gi, '');
console.log(newstr)

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#fff',
            borderColor: '#D00D14',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#D00D14',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#D00D14',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2,
            pointRadius: 6,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const Settings = () => {


    return (
        <div>
            <div>
                TEST
                {sortOdd(array)}
            </div>
            Class component
            <IncrementerClass/>
            Func component
            <IncrementerFunc/>
            <Line data={data} options={null} width="600" height="250"/>
        </div>
    )
}
export default Settings
