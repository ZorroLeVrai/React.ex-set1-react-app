import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiRequested } from "./actionCreators";
import { decrementCommentId, incrementCommentId, updateComment } from "./commentSlice";
import Comment from "./Comment";
import Error from "./Error";

export default function Main() {
  const { id, commentData, errorMessage } = useSelector(state => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      apiRequested({
        url: `comments/${id}`,
        method: "get",
        //data: {},
        onSuccess: "comment/updateComment",
        onError: "comment/updateError"
      })
    );
  }, [id, dispatch]);

  const handleNextComment = () => dispatch(incrementCommentId());
  const handlePreviousComment = () => dispatch(decrementCommentId());

  const previousButtonDisabled = id < 2;
  let previousButtonStyle = "m-1 btn btn-primary";
  if (previousButtonDisabled) {
    previousButtonStyle += " disabled";
  }

  const { id: commentId, name: commentName } = commentData ?? { id: "?", name: ""};

  const displayComment = commentData && !errorMessage;

  return (
    <>
      {displayComment && <Comment id={commentId} name={commentName}/>}
      {errorMessage && <Error id={id} error={errorMessage}/>}
      <div>
        <button className={previousButtonStyle} onClick={handlePreviousComment}>Précédent</button>
        <button className="m-1 btn btn-primary" onClick={handleNextComment}>Suivant</button>
      </div>
    </>
  );
}
