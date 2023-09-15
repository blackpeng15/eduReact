import React from "react";

class Snack2 extends React.Component{
    render(){
        const snacks = ['초코파이', '새우깡', '몽쉘', '빼빼로', '쿠크다스', '엄마손파이' ]
        // snacks.forEach( (v, i, a) => console.log(v, i, a) );
        const msg = this.props.message;
        console.log(msg);
        
        return(
            <div>{
                snacks.map( (v, i) => (
                    <h3 key={i}>{v}</h3>
                ) )    
            }</div>
        )
    }
}

export default Snack2;