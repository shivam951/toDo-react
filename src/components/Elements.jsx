/* eslint-disable react/prop-types */
function Element1({ items ,remove }) {
  if (items.length === 0) return <h2 className="text-center">Please Add Tasks</h2>;


  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="row text-center mb-2">
          <div className="col-sm-12 col-md-6 col-lg-4 fw-bold">{item.task}</div>
          <div className="col-sm-12 col-md-6 col-lg-4">{item.date}</div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <button className="btn btn-danger btn-sm" onClick={()=>remove(index)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Element1;
