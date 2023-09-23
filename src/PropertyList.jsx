import Property from "./Property"
import "./PropertyList.css"

function PropertyList({ properties }) {
 return (
    <div className="PropertyList">
        {properties.map((data) => {
      
      return (
        
        <Property
          key={data.key}
          name={data.name}
          rating={data.rating}
          price={data.price}
        />

      )
    })}
    </div>
 )
    
    
}
export default PropertyList 