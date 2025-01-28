"use client";

export default function Button() {


  const handleClick = async () => {
    await changeUserName("meriau");
  };

  return <button onClick={handleClick}>COUCOU</button>;
}
