import { useEffect, useState } from "react";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function AppEx6() {
  const [commentId, setCommentId] = useState(1);
  const [comment, setComment] = useState(null);

  const fetchComment = async (id) => {
    const commentItem = await fetchData(`https://jsonplaceholder.typicode.com/comments/${id}`);
    setComment(commentItem);
  };

  useEffect(() => {fetchComment(commentId)}, [commentId]);

  const handlePreviousComment = () => setCommentId(id => id-1);
  const handleNextComment = () => setCommentId(id => id+1);

  const previousButtonDisabled = commentId < 2;
  let previousButtonStyle = "m-1 btn btn-primary";
  if (previousButtonDisabled) {
    previousButtonStyle += " disabled";
  }

  const { id, name } = comment ?? {};

  return (
    <>
      {comment && <div className="m-2">
        <div>Id: {id}</div>
        <div>Name: {name}</div>
      </div>}
      <div>
        <button className={previousButtonStyle} onClick={handlePreviousComment}>Précédent</button>
        <button className="m-1 btn btn-primary" onClick={handleNextComment}>Suivant</button>
      </div>
    </>
  );
}
