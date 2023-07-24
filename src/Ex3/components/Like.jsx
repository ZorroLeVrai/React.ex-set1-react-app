import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

export default function Like(props) {
  const {
    color = "black",
    size = 20,
    initialLikeStatus = false,
    onLikeHandler,
  } = props;
  const [likeStatus, setLikeStatus] = useState(initialLikeStatus);

  const toggleStatus = () => {
    setLikeStatus(!likeStatus);
    onLikeHandler(!likeStatus);
  };

  if (likeStatus)
    return <AiFillHeart color={color} size={size} onClick={toggleStatus} />;
  return <AiOutlineHeart color={color} size={size} onClick={toggleStatus} />;
}
