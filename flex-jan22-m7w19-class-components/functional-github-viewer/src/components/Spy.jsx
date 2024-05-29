import { Component, useEffect } from "react";
import useSpyInfo from "../hooks/useSpyInfo";

export default function Spy(props) {
  useSpyInfo();

  return <p>🕵️</p>;
}
