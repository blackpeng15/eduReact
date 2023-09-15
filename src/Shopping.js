import React from "react";
import Snack from "./Snack";
import Snack2 from "./Snack2";

// class Shopping extends React.Component {
//     render() {
//         return(
//             <div className="shoppingList">
//                 <h1>[장바구니 목록]</h1>
//                 <Snack />
//             </div>
//         )
//     }
// }

function Shopping() {
    return (
        <div className="shoppingList">
            <h1>[장바구니 목록]</h1>
            <Snack name="이순신" cnt="3"/>
            <Snack2 message="hi!!!"/>
        </div>
    );
}

export default Shopping