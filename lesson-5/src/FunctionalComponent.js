
import React,{ useState, useEffect } from 'react';

export default function FunctionalComponent() {

    const [counter, setCounter] = useState(0);


    useEffect(() => {
          console.log("useEffect");
    }) //componentDidUpdate gibi çalışır
    
    // useEffect(() => {
    //     console.log("useEffect");
    // },[]) //virgülden sonra boş array verirsek componentDidMount gibi çalışır

    // useEffect(() => {
    //     console.log("useEffect");
    // },[counter]) //virgülden sonra arraye bir eleman koyarsak  componentDidUpdate gibi çalışır

    // useEffect(() => {
    //     console.log("useEffect");
    //     return () => {console.log("useEffect--componetWillUnmount");}
    // }, [counter])

    const increase = () => setCounter(counter+1);
    return (
        <div className="function">
            <h2>Functional Component</h2>
            <p>Counter: {counter}</p>
                <button onClick={increase}>Increase</button>
        </div>
    )
}
