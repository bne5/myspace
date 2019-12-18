import React from 'react';
import Axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyPeople extends React.Component {
  state = { people: [], };

  componentDidMount() {
    Axios.get('/api/my_people')
      .then( res => this.setState({ people: res.data, }));
  }

  render() {
    const { people, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { people.map( person =>
        <Card key={person.id}>
          <Image src={person.avatar} />
          <Card.Content>
            <Divider />
            <Card.Header>
              { person.name }
            </Card.Header>
          </Card.Content>
        </Card>
        )}
      </Card.Group>

    )
  }
}

export default MyPeople;