//what is the difference between export and not the export without {}
import React, { useState } from "react";

export function Threeviews() {
    const [oneView, setOneView] = useState(0);

    function View1() {
        return (<div>
            <h1>This is View 1</h1>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={200} alt="view1" />
        </div>);
    }
    function View2() {
        return (<div>
            <h1>This is View 2</h1>
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" width={200} alt="view2" />
        </div>);
    }
    function View3() {
        return (<div>
            <h1>This is View 3</h1>
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" width={200} alt="view3" />
        </div>);
    }
    //same as making function
    const setViewOne = () => {
        if (oneView === 0) setOneView(1)
        else if(oneView === 1) setOneView(2)
        else setOneView(0)
    }
    const listItems = items.map((el) => (
        <div key={el.id}>
        <img class="img-fluid" src={el.image} width={100} />
        {el.title}
        {el.category}
        {el.price}
        <button type="button" onClick={() => removeFromCart(el)}> - </button>{" "}
        <button type="button" variant="light" onClick={() => addToCart(el)}> +</button>
        </div>
        ));

    return (<div>
        <button onClick={setViewOne}>View</button>
        {oneView===0 && <View1 />}
        {oneView===1 && <View2 />}
        {oneView===2 && <View3 />}
    </div>);
}
