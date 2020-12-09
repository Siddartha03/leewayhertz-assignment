import { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }
  render() {
    return (
      <Container>
        <br />
        <Jumbotron>
          <h1 className="display-4">LeewayHertz Technologies Pvt Ltd</h1>
        </Jumbotron>
      </Container>
    );
  }
}
