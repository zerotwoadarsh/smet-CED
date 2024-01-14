import React from 'react'
import Committe from "./Committee/Committee";
import banner from "../assets/images/banner.jpg";
function ConferenceTrack() {

    const data = [
        {
            id: "TRACK-1",
            name: "Structural Engineering",
            values: [
                {
                    id_value: "Innovative Structural Design and Analysis",
                },
                {
                    id_value: "Advancements in Material Science and Technology ",
                },
                {
                    id_value: "Seismic Design and Retrofitting",
                },
                {
                    id_value: "Structural Health Monitoring and Condition Assessment",
                },
                {
                    id_value: "Sustainable and Green Buildings",
                },
                {
                    id_value: "Bridge Engineering and Infrastructure Resilience",
                },
            ]
        },
        {
            id: "TRACK-2",
            name: "Geotechnical Engineering ",
            values: [
                {
                    id_value: "Advancements in Soil Mechanics and Geotechnical Analysis",
                },
                {
                    id_value: "Geotechnical Challenges in Mega Infrastructure Projects ",
                },
                {
                    id_value: "Slope Stability and Landslide Mitigation",
                },
                {
                    id_value: "Ground Improvement Techniques",
                },
                {
                    id_value: "Geotechnical Aspects of Foundation Design",
                },
                {
                    id_value: "Geotechnical Eartquake Engineering",
                },
            ]
        },
        {
            id: "TRACK-3",
            name: "Environmental Engineering",
            values: [
                {
                    id_value: "Water Quality and Treatment Technologies",
                },
                {
                    id_value: "Wastewater Treatment and Resource Recovery",
                },
                {
                    id_value: "Air Pollution Control and Air Quality Management",
                },
                {
                    id_value: "Solid Waste Management and Circular Economy",
                },
                {
                    id_value: "Contaminated Site Remediation and Brownfield Redevelopment",
                },
                {
                    id_value: "Environmental Impact Assessment and Sustainable Development",
                },
            ]
        },
        {
            id: "TRACK-4",
            name: "Transportation Engineering ",
            values: [
                {
                    id_value: "Pavements and Materials ",
                },
                {
                    id_value: "Traffic Flow Theory, Operations and Facilities ",
                },
                {
                    id_value: "Transport Planning, Policy, Economics and Project Finance",
                },
                {
                    id_value: "Travel Behaviour and Transport Demand ",
                },
                {
                    id_value: "Travel Behaviour and Transport Demand ",
                },
                {
                    id_value: "Sustainability in Transportation ",
                },
                {
                    id_value: "Transportation Safety",
                },
                {
                    id_value: "STransport and Mobility Networks",
                },
                {
                    id_value: "Emerging Travel Technologies (ITS And IOT) ",
                },
                {
                    id_value: "Other Modes of Transportation and Pedestrian ",
                },
            ]
        },
        {
            id: "TRACK-5",
            name: "Remote Sensing and GIS Applications ",
            values: [
                {
                    id_value: "Geospatial Data Collection and Integration",
                },
                {
                    id_value: "Machine Learning in Geospatial Analysis",
                },
                {
                    id_value: "Geospatial Data Visualization ",
                },
                {
                    id_value: "GIS-Based Environmental Monitoring and Management",
                },
                {
                    id_value: "Applications of AI/ML in mitigating climate change issues related to energy efficient buildings, optimizing transportation systems leading to reduction in greenhouse gases, developing sustainable cities, natural resource management, infrastructure design and safety management ",
                },
            ]
        },
        {
            id: "TRACK-6",
            name: "Water Resources Engineering",
            values: [
                {
                    id_value: "Water Quality Assessment and Remediation",
                },
                {
                    id_value: "Urban Water Infrastructure and Stormwater Management",
                },
                {
                    id_value: "Ecohydrology and Watershed Management",
                },
                {
                    id_value: "Hydraulic Engineering and Infrastructure Design",
                },
                {
                    id_value: "Integrated Water Resources Planning and Management",
                },
                {
                    id_value: "Climate Change Impacts on Water Resources",
                },
                {
                    id_value: "Sustainable Water Management Strategies",
                },
            ]
        },
        {
            id: "TRACK-7",
            name: "SAI and ML Applications in Civil Engineering",
            values: [
                {
                    id_value: "Applications of AI/ML in mitigating climate change issues related to energy efficient buildings, optimizing transportation systems leading to reduction in greenhouse gases, developing sustainable cities, natural resource management, infrastructure design and safety management ",
                },
            ]
        },
    ]

    return (
        <>
            <div className="min-h-screenl bg-white text-black">
                <div>
                    <div className="flex items-center justify-center ">
                        <img src={banner} alt="" className="w-full h-auto" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold flex justify-center mt-5">Conference Track</h1>
                    </div>
                </div>
                <div className=" px-auto py-8 mx-auto max-sm:mx-0 max-sm:px-0 grid items-start justify-start grid-flow-row grid-cols-1 lg:grid-cols-2 ">
                    {data.map((items) => (
                        <ul key={items.id} className="text-lg list-disc list_style py-5 mx-auto w-3/5 max-sm:w-4/5">
                            <h1><span className=' font-bold ' >{items.id}</span>  : {items.name}</h1>
                            {items.values.map((listItem, index) => ( <li key={index} className='mx-10'>{listItem.id_value}</li> ))}
                        </ul>

                    ))}

                </div>
            </div>

        </>
    )
}

export default ConferenceTrack