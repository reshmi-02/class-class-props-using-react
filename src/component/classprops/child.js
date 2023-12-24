import React, {Component } from 'react'
import './child.css'

class Child extends  Component{
    
    render () {
        
        let card=this.props
        console.log(card);
        
    return(
        
        
        <div className='card-section'>
                <div className='card-container'>
                    <div className='card-row' >
                        {
                           card.car.map((value,i)=>{
                                return(
                                    <div key={i} className='card-col'>
                                        <div className='card-card'>
                                            <div className='card-image'>
                                                <img src={value.image} alt=""/>
                                            </div>
                                            <h3>{value.brandname } {value.carname}</h3>
                                            
                                            <p>{value.price} lakh</p>
                                            <div className='card-btn'>
                                                <a href=" ">{value.btn}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
    }
}
// let a=new Child(card)
export default Child