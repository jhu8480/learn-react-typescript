import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import "./Like.css";

function Like() {
  const [liked, setLiked] = useState(false);
  const handleSetLike = (e: any) => {
    e.preventDefault();
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
    console.log("clicked");
  };

  return (
    <div>
      <AiFillHeart
        size="40"
        color={liked ? "red" : "black"}
        onClick={handleSetLike}
      />
    </div>
  );
}

export default Like;
