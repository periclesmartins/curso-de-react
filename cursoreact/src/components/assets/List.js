const List = () => {
  const items = [
    {
      id: 1,
      name: "Ichigo",
    },
    {
      id: 2,
      name: "Naruto",
    },
    {
      id: 3,
      name: "Goku",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
