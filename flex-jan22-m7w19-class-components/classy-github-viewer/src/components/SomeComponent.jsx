import { useEffect, useState } from "react";

export default function SomeComponent(props) {
  // Prepare the data
  const { name, age, children, potato, ninja, wiggle,author } = props;
  const {date, name} = author


  const [age, setAge] = useState(originalAge)
  // Manipulate the data
  const parsedData = ...


  return (
    // Show the data
    <div></div>
  );
}


useEffect(() => {
  // Will only run when mounted, because the dep array is empty
}, [])

useEffect(() => {
  // CONTAIN A SIDE EFFECT
})