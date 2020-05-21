import React from "react";
import VerticalTabs from "../../../../material-utility/VeritcalTabs/VerticalTabs";
import PlayerBasicInfo from "./PlayerBasicInfo/PlayerBasicInfo";
import PlayerEmergency from "./PlayerEmergency/PlayerEmergency";
import PlayerDriverInfo from "./PlayerDriverInfo/PlayerDriverInfo";

const tabLabels = [
    'Basic Information',
    'Emergency Contacts',
    'Driver Information'
]

function PlayerDialogContents() {

    return (
        <VerticalTabs tabLabels={tabLabels}>
            <PlayerBasicInfo />
            <PlayerEmergency />
            <PlayerDriverInfo />
        </VerticalTabs>
    )
}

export default PlayerDialogContents
