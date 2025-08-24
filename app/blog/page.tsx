import React from "react";
import { promises as fs } from 'fs'; 

export default async function Blog() {
    const file = await fs.readFile(process.cwd() + '/app/blog/blogs.json', 'utf8');
    const foodData = JSON.parse(file);

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {Object.keys(foodData).map((foodName) => (
                    <li key={foodName}>
                        <a href={`/blog/${foodName}`}>{foodData[foodName].name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

