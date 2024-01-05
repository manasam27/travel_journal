import React from "react"

export default function Card(props) {
    return (
        <section className = "card">
            <div>
                <img src={`../images/${props.imageUrl}`} className="card--img"/>
            </div>
            <div className="card--details">
                <div className="trip--location">
                    <img src="../images/pin.svg" className="pin--logo" />
                    <p className="travel--country">{props.location}</p>
                    <a href={props.googleMapsUrl}className="travel--map">View on Google Maps</a>
                </div>
                <h2 className="travel--place">{props.title}</h2>
                <p className="travel--date">{props.startDate}</p>
                <p className="travel-desc">{props.description}</p>
            </div>
        </section>
    )
    
}


// let badgeText
//     if (props.item.openSpots === 0) {
//         badgeText = "SOLD OUT"
//     } else if (props.item.location === "Online") {
//         badgeText = "ONLINE"
//     }
    
//     return (
//         <div className="card">
//             {badgeText && <div className="card--badge">{badgeText}</div>}
//             <img src={`../images/${props.item.coverImg}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.item.stats.rating}</span>
//                 <span className="gray">({props.item.stats.reviewCount}) • </span>
//                 <span className="gray">{props.item.location}</span>
//             </div>
//             <p className="card--title">{props.item.title}</p>
//             <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
//         </div>
//     )