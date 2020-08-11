import React, { Fragment } from "react";
import Gif from "../../components/Gif";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";

export default function Detail({ params }) {
  const { gif, isLoading, error } = useSingleGif({ id: params.id });

  if (isLoading) return "Loading...";
  if (error) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <Fragment>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </Fragment>
  );
}
