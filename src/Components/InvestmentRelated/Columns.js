import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
         Header: "Rank",
        accessor: "market_cap_rank"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Symbol",
        accessor: "symbol"
      },
      {
        Header: "Price (USD)",
        accessor: "current_price"
      },
      {
        Header: "24h Volume",
        accessor: "total_volume"
        }
      ,
      {
        Header: "Mkt Cap",
        accessor: "market_cap"
      }
    ],
    []
  );

  return columns;
}