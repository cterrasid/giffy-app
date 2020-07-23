import React from "react";
import Gif from "../../components/Gif";

export default function Detail({params}) {
    return <h1>Gif id {params.id}</h1>
//   return <Gif id={id} title={title} url={url} />;
}
