import React from "react";
import InfoCard from "../InfoCard"
import employeesData from "../../employee.js"

function Home() {
    const employee = employeesData.map(employee =>
        <InfoCard key={employee.id} employee={employee} />)

    return (
        <div style={{ backgroundColor: "teal" }} className="row">
            {employee}
        </div>
    )
}
export default Home;