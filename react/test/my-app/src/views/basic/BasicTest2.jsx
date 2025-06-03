// function Card({id, name}) {
//   return (
//     <div>
//       {id} : {name}
//     </div>
//   );
// }

export default function BasicTest2() {
  const cards = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
  ];
  console.log(Card({id: 1, name: 'a'}));
  return (
    <>
      <div>BasicTest2</div>
      <div>
        {cards.map(card => <Card {...card} />)}
      </div>
    </>
  );
}

const Card = ({id, name}) => {
  return (
    <div>
      {id} : {name}
    </div>
  );
}
