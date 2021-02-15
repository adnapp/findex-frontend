import { useMemo } from "react";

function useColumns() {

    function toCurrency(numberString) {
        let number = parseFloat(numberString);
        return number.toLocaleString('USD');
    }

    function toFormat(numberString) {
        let number = parseFloat(numberString);
        return number.toLocaleString('USD');
    }

  const columns = useMemo(
    () => [
      {
         Header: "Rank",
        accessor: "market_cap_rank"
      },
      {
        Header: "Name",
        accessor: "name",
        style: {
            color: 'blue'
        }
      },
      {
        Header: "Symbol",
        accessor: "symbol"
      },
      {
        Header: "Price (USD)",
        accessor: "current_price",
        Cell: props =>  toCurrency(props.value)

      },
      {
        Header: "24h Volume",
        accessor: "total_volume",
        Cell: props =>  toFormat(props.value)

        }
      ,
      {
        Header: "Mkt Cap",
        accessor: "market_cap",
        Cell: props =>  toFormat(props.value)

      }
     
    ],
    []
  );

  return columns;
}

export default useColumns