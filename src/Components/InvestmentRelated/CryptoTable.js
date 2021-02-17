import React from "react";
import { useSortBy, useTable } from "react-table";
import useColumns from "./Columns";
import "./Table.css";
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";
import styled from 'styled-components';

function CryptoTable({selectedCoins, pageIndex, pageBackward, pageForward}){
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
        <>
        <ChartTitle>Top 100 Cryptocurrencies by Market Cap*</ChartTitle>
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
                        // console.log(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return (
                                <td {...cell.getCellProps()} >{cell.render("Cell")}</td>
                            );
                            })}
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                </div>
            <ChangePageDiv>      
                {pageIndex==0 ? <div></div> : <button onClick={() => pageBackward()}>Previous Page</button>}
                {pageIndex==9? null : <button onClick={() => pageForward()}>Next Page</button>}
            </ChangePageDiv>  
        </>
    );
    
}

const ChartTitle = styled.h1`
    text-align: center;
`

const ChangePageDiv = styled.div`
display:flex;
margin: auto;
width: 40%;
padding: 10px;
justify-content:space-between;
`


export default CryptoTable