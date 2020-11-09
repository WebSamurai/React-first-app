import React, { useState } from "react";
export function CardApp() {
  const [people, setPeople] = useState([]);
  const addData = (person) => {
    setPeople((prev) => [...prev, person]);
  };
  const title = <h1>Git hub Card App</h1>;
  return (
    <div className="container">
      {title}
      <Form addData={addData}></Form>
      <div className="list-group">
        <CardList people={people}></CardList>
      </div>
    </div>
  );
}
function Form({ addData }) {
  const [name, setName] = useState("");
  const handlerSubmit = async (event) => {
    event.preventDefault();
    const data = await fetch(`https://api.github.com/users/${name}`).then((x) =>
      x.json()
    );
    const { id, avatar_url, company, login } = data;
    console.log(data);
    addData({ id, avatar_url, company, name: login });
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
}
function Card({ person }) {
  return (
    <div className="list-group-item" style={{ textAlign: "left" }}>
      <div>
        <img src={person.avatar_url} />
        <div className="info">
          <div>{person.name}</div>
          <div>{person.company}</div>
        </div>
      </div>
    </div>
  );
}

function CardList(props) {
  return props.people.map((x) => <Card key={x.id} person={x} />);
}
