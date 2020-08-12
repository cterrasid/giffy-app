import React, { Fragment } from "react";
import Gif from "../../components/Gif";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const { gif, isLoading, error } = useSingleGif({ id: params.id });

  const title = gif ? gif.title : "";

  if (isLoading) {
    return (
      <Fragment>
        <Helmet>
          <title>"Loading..."</title>
        </Helmet>
        <h3>Loading...</h3>
      </Fragment>
    );
  }

  if (error) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <Fragment>
      <Helmet>
        <title>{title} | Giffy</title>
        <meta name="description" content={`Detail of ${title}`} />
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </Fragment>
  );
}
