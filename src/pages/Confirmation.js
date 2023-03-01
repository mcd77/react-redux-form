import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { ProgressBar } from "react-step-progress-bar";
import { useSelector } from "react-redux"


const Confirmation = () =>{
  const state = useSelector((state) => state);

  return (
    <div>
      <div>
        <Container className="mb-3">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <Card className="mb-3 text-center">
            <Card.Body>
            <ProgressBar
          filledBackground="linear-gradient(to right, #7EE8FA, #2EB62C)"
          percent={state.form.percentDone}
        />
        <br/>
              <Card.Title>
                Thank you!
              </Card.Title>
              <Card.Text>
                :)
              </Card.Text>
            </Card.Body>
          </Card>
    
        </Container>
      </div>
    </div>
  );
}
export default Confirmation;