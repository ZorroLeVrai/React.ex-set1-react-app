import { Link } from "react-router-dom";

function getLinkObject(id, label) {
  if (!label)
    label = id;
  return ({ directory: `Ex${id}`, title: `Exercice ${label}`});
}

export default function Home() {
  const exerciseList = [
    getLinkObject(1),
    getLinkObject(2),
    getLinkObject(3),
    getLinkObject(4),
    getLinkObject("4bis", "4'"),
    getLinkObject(5),
    getLinkObject(6),
    getLinkObject(7),
    getLinkObject(8),
    getLinkObject(9),
    getLinkObject(10),
    getLinkObject(11)
  ];

  return (
    <>
      <h1>Home page</h1>
      <ul>
        {exerciseList.map((item) => (
          <li key={item.directory}>
            <Link to={`/${item.directory}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
