
import React from 'react';
import './InfoBox.css';

import {Card , CardContent,Typography} from "@material-ui/core"


function InfoBox({title,cases,total}) {
    return (
        <Card className="infoBox">


            <CardContent>

            {/* Title */}
            <Typography className="infoBox__title" color="textSecondary">
                    {title}
            </Typography>

            {/* Number OF Cases */}
            <h2 className="infoBox__cases">
                {cases}
            </h2>
            {/* Total */}
            <Typography color="textSecondary" className="infoBox__total" >
                {total} Total

            </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
