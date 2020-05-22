import React from "react";
import VerticalTabs from "../../../../material-utility/VeritcalTabs/VerticalTabs";
import PlayerBasicInfo from "./PlayerBasicInfo/PlayerBasicInfo";
import PlayerEmergency from "./PlayerEmergency/PlayerEmergency";
import PlayerDriverInfo from "./PlayerDriverInfo/PlayerDriverInfo";

const tabLabels = [
    'Personal',
    'Emergency',
    'Driver'
]

function PlayerDialogContents() {

    const handleEmergencyAdd = (newData) => new Promise(resolve => {
        console.log(newData)
        resolve()
    })
    const handleEmergencyUpdate = (newData, oldData) => new Promise(resolve => {
        console.log(newData)
        console.log(oldData)
        resolve()
    })
    const handleEmergencyDelete = (oldData) => new Promise(resolve => {
        console.log(oldData)
        resolve()
    })

    return (
        <VerticalTabs tabLabels={tabLabels}>
            <PlayerBasicInfo />
            <PlayerEmergency onRowAdd={handleEmergencyAdd} onRowDelete={handleEmergencyDelete} onRowUpdate={handleEmergencyUpdate} />
            <PlayerDriverInfo />
        </VerticalTabs>
    )
}

export default PlayerDialogContents
