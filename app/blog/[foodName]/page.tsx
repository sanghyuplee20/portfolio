
import React from "react";

async function Page({ params }: { params: { foodName: string } }) {
  const { foodName } = await params;
  console.log("Food Name:", foodName);
  return (
    <div>
      <h1>Food: {foodName}</h1>
      <p>This is the page for {foodName}.</p>
    </div>
  );
}


export default Page;