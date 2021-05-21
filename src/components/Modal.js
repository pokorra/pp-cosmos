import React, { useEffect } from 'react';

const Modal = ({setEndpoint, endpoint, spacexApi, setSpacexApi}) => {

    const valI = endpoint[1];
    const valII = endpoint[2];

    const closeModal = () => { setEndpoint("") };
    const sortData = () => { 
        
        console.log(spacexApi)
        setSpacexApi = spacexApi.sort((a, b) => (a.name > b.name) ? 1 : -1);
        //a.valI i b.valII nie działają, nie wiem, jak zuniwersalizować sortowanie
        //co zrobić, żeby sortowanie aktualizowało listę
    }
    
    return (
        <div className={`modal ${endpoint !== "" ? "" : "hidden"}`}>
            <div className="modal__manage">
                <h2 className="modal__title">{endpoint[0]}</h2>
                <button className="modal__cta" onClick={closeModal}></button>
            </div>
            <table className="modal__table table">
                <thead className="table__headrow">
                <tr className="table__row">
                    <th className="table__half table__half--sort"> 
                        <p>{endpoint[1]} </p> 
                        <button className="table__sort" onClick={sortData}> </button>
                    </th>
                    <th className="table__half">{endpoint[2]}</th>
                </tr>
                </thead>
                <tbody>

                

                {
                // useEffect(() => {
                    spacexApi.map(item => 
                        //co zrobić, żeby lista aktualizowała się?
                        //useEffect? 
        
                            // <tr key={item[0]}> - to nie działa
                            //     <td>{item[1]}</td>
                            //     <td>{item[2]}</td>
                            // </tr>
                            // console.log(item.valI) - to nie działa
        
                            (endpoint[0] === "capsules") ? 
                            <tr className="table__row" key={item.id}>
                                <td className="table__half"> {item.type}</td>
                                <td className="table__half"> {item.status}  </td> 
                            </tr> :
                            (endpoint[0] === "crew") ?
                            <tr className="table__row" key={item.id}>
                                <td className="table__half"> {item.name}</td>
                                <td className="table__half"> {item.agency} </td> 
                            </tr> :
                            (endpoint[0] === "rockets") ?
                            <tr className="table__row" key={item.id}>
                                <td className="table__half"> {item.name}</td>
                                <td className="table__half"> {item.first_flight} </td> 
                            </tr> :
                            <tr className="table__row" key={item.id}>
                                <td className="table__half"> {item.version}</td>
                                <td className="table__half"> {item.id} </td> 
                            </tr>
                            
                            // ), [spacexApi] }
                )}
               
                    </tbody>
            </table>
        </div>
    )
}

export default Modal;