import "./Filter.css";

function Filter({filterData, category, setCategory}) {
  return (
    <div className="filter-container">
      {filterData.map((data)=>(
        <button
          key={data.id}
          className={`filter-btn ${category===data.title?"active":""}`}  // class ka naam change karne ke liye hai ye
          onClick={()=>setCategory(data.title)}  // this is to select the category 
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;