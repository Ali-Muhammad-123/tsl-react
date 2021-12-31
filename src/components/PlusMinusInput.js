
import React, { useState } from "react";
import './PlusMinusInput.css'
import { PlusMinusButton, InputMinusField } from "../styledComponents/GlobalStyleLayout";
export default function PlusMinusInputField() {
    let [count, setCount] = useState(0);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    return (
        <div>
            <div>
                <PlusMinusButton onClick={incrementCount}>+</PlusMinusButton><InputMinusField value={count} /><PlusMinusButton onClick={decrementCount}>-</PlusMinusButton>
            </div>


        </div>
    );
}
