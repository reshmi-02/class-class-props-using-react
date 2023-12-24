import React,{Component} from 'react';
import Child from './child.js';
import Car1 from "../images/car-1.webp"
import Car2 from "../images/car-2.webp"
import Car3 from "../images/car-3.webp"
import Car4 from "../images/car-4.webp"
import Car5 from "../images/car-5.webp"
import Car6 from "../images/car-6.webp"
import Car7 from "../images/car-7.webp"
import Car8 from "../images/car-8.webp"

class Parent extends Component{
    
    render (){
    // let x="props";
    // let age=20;
    // let obj={a:1}
    // let a=[1,2,3,4,5]
    // let arrobj=[
    //     {
    //         name:"res",
    //         age:21
    //     },
    //     {
    //         name:"pree",
    //         age:23
    //     }
    // ]
        const detail=[
            {
                id:1,
                image:Car1,
                brandname:"Renault",
                carname:"Kiger",
                price:6.50,
                btn:"Buy Now"
            },
            {
                id:2,
                image:Car2,
                brandname:"Tata",
                carname:"Harrier",
                price:15.49,
                btn:"Buy Now"
            },
            {
                id:3,
                image:Car3,
                brandname:"Mahindra",
                carname:"Thar",
                price:10.98,
                btn:"Buy Now"
            },
            {
                id:4,
                image:Car4,
                brandname:"Tata",
                carname:"Nexon",
                price:8.10 ,
                btn:"Buy Now"
            },
            {
                id:5,
                image:Car5,
                brandname:"Tata",
                carname:"Safari",
                price:16.19,
                btn:"Buy Now"
            },
            {
                id:6,
                image:Car6,
                brandname:"Tata",
                carname:"Punch",
                price:6 ,
                btn:"Buy Now"
            },
            {
                id:7,
                image:Car7,
                brandname:"Hyundai",
                carname:"Exter",
                price:6 ,
                btn:"Buy Now"
            },
            {
                id:8,
                image:Car8,
                brandname:"Renault",
                carname:"KWID",
                price:4.70,
                btn:"Buy Now"
            }
        ]

        return(
            <div>
                {/* <p>parent</p> */}
                {/* <Child name={x} age={age} o={obj} arr={a} list={arrobj}/> */}
                <Child car={detail}/>
            </div>
        )
    }
    
}

export default Parent