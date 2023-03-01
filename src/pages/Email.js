import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../redux/index"
import { Col, Row } from 'react-bootstrap';

const Email = () =>{
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
      navigate('/phone');
    } else if (e.key === 'Enter' && state.form.email) {
      notify(state.form.email);
      navigate('/phone');
    }
  };

  const handleButtonPress = (e) => {
    if (fieldValue) { 
      notify(fieldValue);
      navigate('/phone');
    } else if (state.form.email) {
      notify(state.form.email);
      navigate('/phone');
    }
  }

  const notify = (message) => { 
    setFormValue({value: message, type: "Email", percentDone: 75})
  }

  if (state.form.email) {
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
          <InputGroup.Text id="inputGroup-sizing-lg">Email address</InputGroup.Text>
          <FormControl autoFocus={true} defaultValue={state.form.email} onChange={handleInput} onKeyPress={handleKeypress} placeholder="email@email.com" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row>
          <Col>
          <InputGroup className="mb-4 text-center" size="lg">
        <LinkContainer to="/lastname">
          <Button variant="outline-primary">Back</Button>
        </LinkContainer>
        </InputGroup>
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
          percent={state.form.percentDone}
        />
        <br/>
        <InputGroup  className="mb-4 text-center" size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Email address</InputGroup.Text>
          <FormControl  autoFocus={true} onChange={handleInput} onKeyPress={handleKeypress} placeholder="email@email.com" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row>
          <Col>
          <InputGroup className="mb-4 text-center" size="lg">
        <LinkContainer to="/lastname">
          <Button variant="outline-primary">Back</Button>
        </LinkContainer>
        </InputGroup>
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
export default Email;