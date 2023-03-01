import React, { useState } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {useNavigate} from 'react-router-dom';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../redux/index"
import { Container, Card, Col, Row, Button } from 'react-bootstrap';


const FirstName = () =>{
  const navigate = useNavigate();

  const [fieldValue, setValue] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const { setFormValue } = bindActionCreators(actionCreators, dispatch)

  const handleInput = event => {
    if(event.target.value) {
      setValue(event.target.value);
    }
  };

  const handleKeypress = (e) => {   
    if (e.key === 'Enter' && fieldValue) { 
      notify(fieldValue);
      navigate('/lastname');
    } else if (e.key === 'Enter' && state.form.firstName) {
      notify(state.form.firstName);
      navigate('/lastname');
    }
  };

  const handleButtonPress = (e) => {
    if (fieldValue) { 
      notify(fieldValue);
      navigate('/lastname');
    } else if (state.form.firstName) {
      notify(state.form.firstName);
      navigate('/lastname');
    }
  }

  const notify = (message) => { 
    setFormValue({value: message, type: "FirstName", percentDone: 25})
  }
  
  if (state.form.firstName) {
    return (
      <div>
      <Container className="mb-3 text-center">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Card>
        <Card.Body>
        <ProgressBar
          filledBackground="linear-gradient(to right, #7EE8FA, #2EB62C)"
          percent={state.form.percentDone}
        />
        <br/>
        <InputGroup className="mb-4 text-center" size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">First name</InputGroup.Text>
          <FormControl autoFocus={true} defaultValue={state.form.firstName} onChange={handleInput} onKeyPress={handleKeypress} placeholder="John" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col>
        <InputGroup size="lg">
          <Button onClick={() => {handleButtonPress()}} variant="outline-primary">Next</Button>
        </InputGroup>
        </Col>
        </Row>
        </Card.Body>
        </Card>
      </Container>
    </div>
    );
  } else {
  return (
    <div>
      <Container className="mb-3 text-center">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <Card>
        <Card.Body>
        <ProgressBar
          filledBackground="linear-gradient(to right, #7EE8FA, #2EB62C)"
          percent={0}
        />
        <br/>
        <InputGroup  className="mb-4 text-center" size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">First name</InputGroup.Text>
          <FormControl  autoFocus={true} onChange={handleInput} onKeyPress={handleKeypress} placeholder="John" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col className="text-right">
        <InputGroup size="lg">
          <Button onClick={() => {handleButtonPress()}} variant="outline-primary">Next</Button>
        </InputGroup>
        </Col>
        </Row>
        </Card.Body>
        </Card>
      </Container>
    </div>
  );
  }
}
export default FirstName;