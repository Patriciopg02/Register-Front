
import React, { useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import './Table.css';

export default function UsersList({
    data,
    columns,
    fetchData,
    pageCount: controlledPageCount
}) {

    console.log(data);
    const tableInstance = useTable({
        data,
        columns,
        initialState: { pageIndex: 0 },
        manualPagination: true,
        pageCount: controlledPageCount
    }, usePagination)

    const {
        canPreviousPage,
        canNextPage,
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        nextPage,
        previousPage,
        state: { pageIndex }
    } = tableInstance;

    useEffect(() => {
        fetchData(pageIndex);
    }, [pageIndex, fetchData])

    if (!data.length) {
        return (
            <div className='tableContainer'>
                <h3>No users registered!</h3>
            </div>
        )
    }
    else {
        return (
            <div className='tableContainer'>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='pagination'>
                    <button className='paginationButton' onClick={() => previousPage()} disabled={!canPreviousPage}>◀</button>
                    <button className='paginationButton' onClick={() => nextPage()} disabled={!canNextPage}>▶</button>
                </div>
            </div>
        )
    }
}