import "./ItemCount.css"

function ItemCount ({count, less,add}) {



    return (
        <div className="itemCount">
            <button onClick={less}  className="itemCount-button">-</button>
            <span className="itemCount-value">{count}</span>
            <button onClick={add} className="itemCount-button">+</button>
        </div>
    )
}

export default ItemCount