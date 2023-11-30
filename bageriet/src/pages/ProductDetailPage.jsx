import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch} from "../components/UseFetch"

export function ProductDetailPage() {
    const { id } = useParams();
    const url = `https://api.mediehuset.net/bakeonline/products/${id}`;
    const { data: productData, error, isLoading } = useFetch(url);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!productData) {
        return <p>No data available</p>;
    }

    const { id: productId, title, description, duration, amount, image, num_comments, ingredients } = productData.item;

    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Duration: {duration} minutes</p>
            <p>Amount: {amount} pieces</p>
            <img src={image.fullpath} alt={title} />
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.amount} {ingredient.unit_abbr} {ingredient.ingredient_title}
                    </li>
                ))}
            </ul>
            <p>Number of comments: {num_comments}</p>
            {/* You can display other details as needed */}
        </section>
    );
}
