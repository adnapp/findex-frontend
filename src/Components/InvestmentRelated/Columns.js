import React, { useMemo } from "react";

function useColumns() {

    function toCurrency(numberString) {
        let number = parseFloat(numberString);
        return '$' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    function toFormat(numberString) {
        let number = parseFloat(numberString);
        return number.toLocaleString('USD');
    }

    function toImage(url){
      return <img src={url} height='30' alt="image"></img>
    }

  const columns = useMemo(
    () => [
      {
         Header: "Rank",
        accessor: "market_cap_rank"
      },
      {
        Header: "",
        accessor: "image",
        Cell: props =>  toImage(props.value)
      },
      {
        Header: "Name",
        accessor: "name",
       
        
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