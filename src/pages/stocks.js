import stockData from '../data'
import { Link } from "react-router-dom";

const Stocks = (props) => {
    const stockdata = stockData

    return (
        <div className="stockdata">
            {stockdata.map((stockSymbol) => {
                const { name, symbol } = stockSymbol;
                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name} / {symbol}</h2>
                    </Link>
                );
            })}
        </div>

    );
};

export default Stocks;