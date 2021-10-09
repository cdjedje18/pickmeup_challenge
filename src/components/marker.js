import React from 'react'
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import "./marker.css"



const Marker = ({ lat, lng }) => {
    return (
        <OverlayTrigger
            key="info-popover"
            trigger="click"
            placement="top"
            rootClose={true}
            overlay={
                <Popover id={`popover-positioned`}>
                    <Popover.Title as="h3">{`Info`}</Popover.Title>
                    <Popover.Content>
                        <strong>Location Details</strong><br></br>
                        <span>{`Latitude: ${lat}`}</span><br></br>
                        <span>{`Latitude: ${lng}`}</span>
                    </Popover.Content>
                </Popover>
            }
        >
            <img style={{ width: "30px", height: "30px", cursor: "pointer" }} src="./pin.png" alt="pin" />
        </OverlayTrigger>
    )
}

export default Marker;