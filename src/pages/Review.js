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
import {actionCreators } from "../redux/index"
import { Col, Row } from 'react-bootstrap';

const Review = () =>{
  const navigate = useNavigate();
  const [fieldValue, setValue] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const { setFormValue } = bindActionCreators(actionCreators, dispatch)

  const handleButtonPress = (e) => {
    if (fieldValue) { 
      notify(fieldValue);
      navigate('/confirmation');
    } else if (state.form.phone) {
      notify(state.form.phone);
      navigate('/confirmation');
    }
  }

  const notify = (message) => { 
    setFormValue({value: message, type: "Review", percentDone: 100})
  }
  
  return (
    <div>
      <Container className="mb-3 text-center">
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
        <label  className="mb-4 text-center" >Does this look correct?</label>
        <InputGroup  className="mb-4 text-center" size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">First name</InputGroup.Text>
          <FormControl value={state.form.firstName} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup  className="mb-4 text-center" size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Last name</InputGroup.Text>
          <FormControl value={state.form.lastName} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup  className="mb-4 text-center" size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
          <FormControl value={state.form.email} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup  className="mb-4 text-center" size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Phone number</InputGroup.Text>
          <FormControl value={state.form.phone} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row>
          <Col>
          <InputGroup className="mb-4 text-center" size="lg">
        <LinkContainer to="/phone">
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
          <Button onClick={() => {handleButtonPress()}} variant="outline-success">Submit</Button>
        </InputGroup>
        </Col>
        </Row>
        </Card.Body>
        </Card>
      </Container>
    </div>
  );
  
}
export default Review;