import {FaStar} from 'react-icons/fa'

function Property({name, price, rating, id}) {

    return <div className="Property">
        
        {id}
        <h2>{name}</h2>
        <h3>${price} a nigth</h3>
        <h4>{rating} <FaStar/> </h4>
        </div>
}
export default Property;