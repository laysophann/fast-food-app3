import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item'

function Content(props) {
    console.log(props.data);
  return (
      <Container>
    <h1 className='my-5 text-center'>Fast Food</h1>
    <Row>
        <Col md={3}>
        <Item />
        </Col>
        <Col md={3}>
        <Item />
        </Col>
        <Col md={3}>
        <Item />
        </Col>
        <Col md={3}>
        <Item />
        </Col>
    </Row>
    </Container>
  )
}

export default Content;