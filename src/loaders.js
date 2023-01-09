export const priceLoader = async ({ params }) => {
    const symbol = params.symbol;
    const apiKey = "f10a1d8a11d2cc5b706ea21564646b12";
    return (await fetch(
        `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`
    )).json();
};