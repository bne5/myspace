import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Divider, Image, Button } from 'semantic-ui-react';

const MyFriends = () => {
  const [ people, setPeople ] = useState([]);

  useEffect( () => {
    axios.get('/api/my_people')
      .then( res => {
        setPeople(res.data);
      })
  }, [])


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
            <div>
              <Button inverted color='red'>
                Remove
              </Button>
            </div>
        </Card.Content>
      </Card>
      )}
    </Card.Group>
  )
}

export default MyFriends;