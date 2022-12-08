import { useState } from 'react';
export function Ui() {
    
    const [ans, setans] = useState('');
    function setValue(a){
        setans(ans + a);
    }

    return (
        <>
            <div className="main">
                <div className="main-container">
                    <div className="cal">
                    <div className="buttons">
                        <input type="text" value={ans} className="input" placeholder="Calculator"></input>
                        <button onClick={() => {setans('')}} id="clear" class="btn btn-success">Clear</button>
                        <button onClick={() =>{setValue("/")}} id="divide" class="btn btn-success">/</button>
                        <button onClick={() =>{setValue("*")}} id="mult" class="btn btn-success">x</button>
                        <button onClick={() =>{setValue("-")}} id="sub" class="btn btn-success">-</button>
                        <button onClick={() => {setValue("+")}} id="add" class="btn btn-success">+</button>
                        <button onClick={() => {setValue("1")}} id="one" class="btn btn-success">1</button>
                        <button onClick={() => {setValue("2")}} id="two" class="btn btn-success">2</button>
                        <button onClick={() =>{setValue("3")}} id="three" class="btn btn-success">3</button>
                        <button onClick={() =>{setValue("4")}} id="four" class="btn btn-success">4</button>
                        <button onClick={() =>{setValue("5")}} id="five" class="btn btn-success">5</button>
                        <button onClick={() =>{setValue("6")}} id="six" class="btn btn-success">6</button>   
                        <button onClick={() =>{setValue("7")}} id="seven" class="btn btn-success">7</button>
                        <button onClick={() =>{setValue("8")}} id="eight" class="btn btn-success">8</button>
                        <button onClick={() =>{setValue("9")}} id="nine" class="btn btn-success">9</button>
                        <button onClick={() => {setans(eval(ans))}} id="equal" class="btn btn-success">=</button>
                        <button onClick={() =>{setValue(0)}} id="zero" class="btn btn-success">0</button>
                        <button onClick={() =>{setValue("%")}} id="module" class="btn btn-success">%</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
