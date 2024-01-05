import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {     
        const travelDetails = data.map(item => {
            return <Card 
                key= {item.id}
                title = {item.title}
                location = {item.location}
                googleMapsUrl = {item.googleMapsUrl}
                startDate= {item.startDate}
                description = {item.description}
                imageUrl= {item.imageUrl}
            />
        })
        return (
        <div>
            <Navbar />
            <div className="travels">
                {travelDetails}
            </div>
        </div>
    )
}