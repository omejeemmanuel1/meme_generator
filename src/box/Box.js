import React, {useState} from "react";
import boxes from "./boxes";
import './Box.css';

export default function Box() {
    const [squares, setSquares] = useState(boxes);

    const squareElement = squares.map(square => (
        <div className="box" key={square.id}></div>
    ))

    return (
        <main>
        {squareElement}
        </main>
    )
}