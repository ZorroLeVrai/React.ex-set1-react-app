import Like from "./components/Like";

function likeHandler(likeStatus) {
  if (likeStatus) console.log("Liked!");
  else console.log("Disliked!");
}

export default function AppEx3() {
  return <Like color="red" size={80} onLikeHandler={likeHandler} />;
}
