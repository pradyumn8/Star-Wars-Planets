import React from 'react';

const Pagination = ({ prevPage, nextPage }) => {
  return (
    <div className="flex justify-center my-4">
      {prevPage && <button className="mx-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-slate-400" onClick={prevPage}>Previous</button>}
      {nextPage && <button className="mx-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-slate-400" onClick={nextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
