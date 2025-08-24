
import React from "react";
import { promises as fs } from 'fs'; 

 type PageProps = {
    params: Promise<{ foodName: string }>;
};

async function FoodPage({ params }: PageProps) {
  const file = await fs.readFile(process.cwd() + '/app/blog/blogs.json', 'utf8');
  const foodData = JSON.parse(file);
  const { foodName } = await params;

  if (!foodData[foodName]) {
    return <div>Food not found</div>;
  }

  const foodDetails = foodData[foodName];
  
  return (
    <div>
      <h1>Food: {foodDetails.name}</h1>
      <p>{foodDetails.comment}</p>
    </div>
  );
}


export default FoodPage;