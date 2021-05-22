import React, { useState } from "react";
import dataToDisplay from "../data/dataToDisplay";

const getSortedData = (data = [], isAsc, fieldToCompare) =>
  data.sort(
    (elemA, elemB) =>
      elemA[fieldToCompare].localeCompare(elemB[fieldToCompare]) *
      (isAsc ? 1 : -1)
  );

const Modal = ({ setCategory, category, data, setData, loading }) => {
  const [columnOne, columnTwo] =
    dataToDisplay.find((el) => el.categoryName === category)?.fieldsToDisplay ||
    [];

  const [isSortingAscending, setIsSortingAscending] = useState(null);

  const sortedData =
    isSortingAscending === null
      ? data
      : data && category
      ? getSortedData(data, isSortingAscending, columnOne)
      : [];

  const closeModal = () => {
    setCategory("");
    setData([]);
  };
  const onSort = (isIt) => setIsSortingAscending(isIt);

  return (
    <div className={`modal ${category ? "" : "hidden"}`}>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <React.Fragment>
          <div className="modal__manage">
            <h2 className="modal__title">{category}</h2>
            <button className="modal__cta" onClick={closeModal}></button>
          </div>
          <table className="modal__table table">
            <thead className="table__first-row">
              <tr className="table__row">
                <th className="table__half table__half--sort">
                  <p>{columnOne} </p>
                  <button
                    className="table__sort table__sort--az"
                    onClick={() => onSort(true)}
                  >
                    {" "}
                  </button>
                  <button
                    className="table__sort table__sort--za"
                    onClick={() => onSort(false)}
                  >
                    {" "}
                  </button>
                </th>
                <th className="table__half">{columnTwo}</th>
              </tr>
            </thead>
            <tbody>
              {sortedData?.map((el) => (
                <tr className="table__row" key={el.id}>
                  <td className="table__half"> {el[columnOne]}</td>
                  <td className="table__half"> {el[columnTwo]} </td>
                </tr>
              ))}
              <tr className="table__last-row"></tr>
            </tbody>
          </table>
        </React.Fragment>
      )}
    </div>
  );
};

export default Modal;
