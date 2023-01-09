import { useLoaderData } from "react-router-dom";

const Price = props => {


    //get the data fetched by our loader.
    const stockSymbol = useLoaderData();
    console.log(stockSymbol)
    return (
        <div>
            <h1>
                {stockSymbol[0].symbol}
            </h1>
            <h2>Price: ${stockSymbol[0].price}</h2>
            <h2>Volume: {stockSymbol[0].volume}</h2>

        </div>
    );

}

export default Price;