import type { ResortListing} from "../data/data";
export default function Card({
    pic,
    country,
    location,
    rating,
    price
}: ResortListing) {
    return (
        <div className="Card">
            <img src={pic} alt="" />
            <h2>{country}</h2>
            <p className="location">{location}</p>
            <p style={{color: rating > 4.0 ? "green" : "red"}} >{rating}★ </p>
            <p>${price}/night</p>
        </div>
    );
}
 