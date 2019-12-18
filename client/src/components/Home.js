import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component{
  state = { people: [], };

  componentDidMount() {
    axios.get('/api/people')
      .then(res => this.setState({ people: res.data, }))
  }

  sample =() => {
    const { people, } = this.state;

    if (people.length) {
      const index = Math.floor(Math.random() * people.length);
      return people[index];
    } else {
      return null;
    }
  }

  downVote = (id) => {
    const { people, } = this.state;
    this.setState({ people: people.filter( p => p.id !== id ),
    });
  }

  upVote = (id) => {
    const { people, } = this.state;
    axios.put(`/api/people/${id}`)
      .then( () => this.setState({ people: people.filter( p => p.id !== id ),
      }) 
    )
  }

  render() {
    const person = this.sample();
    if (person) {
      return (
        <div>
          <br />
          <Header as="h1">
            My Space
          </Header>
          <br />
          <Card key={person.id}>
            <Image src={person.avatar} />
            <Card.Content>
              <Card.Header>
                {person.name}
              </Card.Header>
              <Card.Description>
                { person.occupation }
              </Card.Description>
              <Card.Meta>
                { person.age }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
            <Button color="red" icon basic onClick={() => this.downVote (person.id)}>
              <Icon name="thumbs down" />
            </Button>
            <Button color="green" icon basic onClick={() => this.upVote(person.id)}>
              <Icon name="thumbs up" />
            </Button>
            </Card.Content>
          </Card>
          <Link to="/my_people">
            <Button inverted color="blue">
              My Friends
            </Button>
          </Link>
      </div>
      )
    } else {
      return <Header textAlign="center">No more people</Header>
    }
  }
}


export default Home;