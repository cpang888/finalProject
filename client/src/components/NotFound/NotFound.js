import React from "react";
import { Redirect, Link,  } from "react-router-dom";
import { Container, Row, Col } from "../Grid";
import "./NotFound.css";

class NotFound extends React.Component {

    render() {
        return (
        
<Container fluid>
    <Row>
    <Col size="sm-4 md-4 lg-4"></Col>
      <Col size="sm-4 md-4 lg-4">
      <div className="not_found">
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          </div>
      </Col>
      <Col size="sm-4 md-4 lg-4"></Col>
    </Row>
  </Container>
            
        )
    }

}


export default NotFound;