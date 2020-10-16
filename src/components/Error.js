import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Error(props) {
    return (<Card data-testid="error"
        bg={"danger"}
        text={'light'}
    >
        <Card.Body>
            <Card.Title>Cannot process request</Card.Title>
            <Card.Text>
                This error has occurred: {props.children}<br/>
                <Link to="/"> <Button  style={{marginTop:20}} variant="outline-light">Back to Home</Button></Link>
          </Card.Text>
        </Card.Body>
    </Card>)
}