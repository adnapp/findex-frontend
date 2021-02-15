import React from "react";
import { useSortBy, useTable } from "react-table";
import useColumns from "./Columns";
import "./Table.css";
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";

function CryptoTable({selectedCoins}){
    const columns = useColumns();
    const data= selectedCoins

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({ columns, data }, useSortBy);

      function doNothing(e){
      console.log(e.target)
      }

    return( 
        <div className="container">
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                <span>
                                    {column.isSorted ? (
                                    column.isSortedDesc ? (
                                        <FaCaretSquareDown />
                                    ) : (
                                        <FaCaretSquareUp />
                                    )
                                    ) : (
                                    ""
                                    )}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        console.log(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return (
                                <td {...cell.getCellProps()} onClick={doNothing}>{cell.render("Cell")}</td>
                            );
                            })}
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                </div>
            );
    
}


export default CryptoTable