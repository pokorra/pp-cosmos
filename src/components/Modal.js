import React, { useState } from 'react';

const dataToDisplay = [
    {
        categoryName: 'rockets',
        fieldsToDisplay: ['name', 'first_flight']
    },
    {
        categoryName: 'capsules',
        fieldsToDisplay: ['type', 'status']
    },
    {
        categoryName: 'crew',
        fieldsToDisplay: ['name', 'agency']
    },
    {
        categoryName: 'starlink',
        fieldsToDisplay: ['version', 'id']
    }
]

const getSortedData = (data = [], isAsc, fieldToCompare) => data.sort((elemA, elemB) => elemA[fieldToCompare].localeCompare(elemB[fieldToCompare]) * (isAsc ? 1 : -1))

const Modal = ({ setCategory, category, data, setData }) => {
   const [isSortingAscending, setIsSortingAscending] = useState(true)
   const [columnOne, columnTwo] = dataToDisplay.find(el => el.categoryName === category)?.fieldsToDisplay || []

    const sortedData = (data && category) ? getSortedData(data, isSortingAscending, columnOne) : []



    const closeModal = () => {
        setCategory("")
        setData([])
    };
    const onSort = () => setIsSortingAscending(!isSortingAscending)
 
    
    return (
        <div className={`modal ${category !== "" ? "" : "hidden"}`}>
            <div className="modal__manage">
                <h2 className="modal__title">{category}</h2>
                <button className="modal__cta" onClick={closeModal}></button>
            </div>
            <table className="modal__table table">
                <thead className="table__headrow">
                <tr className="table__row">
                    <th className="table__half table__half--sort"> 
                        <p>{columnOne} </p> 
                        <button className="table__sort" onClick={onSort}> </button>
                    </th>
                    <th className="table__half">{columnTwo}</th>
                </tr>
                </thead>
                <tbody>
                  {sortedData?.map(el => (
                        <tr className="table__row" key={el.id}>
                            <td className="table__half"> {el[columnOne]}</td>
                            <td className="table__half"> {el[columnTwo]}  </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
           
          
        </div>
    )
}

export default Modal;