import React from 'react'

const Filter = () => {
return (
    <div>
        <h2>Filter on:</h2>
        <ul>
            <li>
                <label>Transport</label>
                <select id="transport">
                    <option value="public-transport">public transport</option>
                    <option value="bicycle-rental">bicycle rental</option>
                    <option value="bus-service">bus service</option>
                    <option value="tram">tram</option>
                    <option value="train">train</option>
                </select>
            </li>
            <li>
                <label>Food</label>
                <select id="food">
                    <option value="vegetarian">vegetarian</option>
                    <option value="vegan">vegan</option>
                    <option value="lactose-free">lactose free</option>
                    <option value="gluten-free">gluten free</option>
                    <option value="organic">organic</option>
                    <option value="local-products">local products</option>
                    <option value="delivery">delivery</option>
                    <option value="take-away">take away</option>
                </select>
            </li>
            <li>
                <label>Shopping</label>
                <select id="shopping">
                    <option value="second-hand">second hand</option>
                    <option value="clothing">clothing</option>
                    <option value="living">living</option>
                    <option value="supermarket">supermarket</option>
                    <option value="organic farming">organic farming</option>
                </select>
            </li>
            <li>
            <label>Nature</label>
                <select id="nature">
                    <option value="parks">parks</option>
                    <option value="swimming">swimming</option>
                    <option value="picnic-area">picnic area</option>
                </select>
            </li>
        </ul>
    </div>
)
}

export default Filter