import React from 'react';
import { Container } from './styles';
import { MdAdd } from 'react-icons/md'
import Card from '../card'

export default function List({ data, index: listIndex }) {
  console.log("index");
  console.log(listIndex);

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (<button type="button">
          <MdAdd size={24} color="#fff" />
        </button>)}
      </header>
      <ul>
        {data.cards.map((card, index) =>
          <Card
            index={index}
            key={card.id}
            listIndex={listIndex}
            data={card}
          />)
        }
      </ul>
    </Container>
  );
}
