import React, { useContext } from "react";
import GifsContext from "../../context/GifsContext";
// import Gif from "../../components/Gif";

export default function Detail({ params }) {
  const { gifs } = useContext(GifsContext);
  console.log(gifs);
  return (
    <h1>
      Gif id {params.id}
    </h1>
  );
  //   return <Gif id={id} title={title} url={url} />;
}
