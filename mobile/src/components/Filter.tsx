import React from 'react'
import styles from '../../styles/Home.module.scss'

const Filter = () => {
return (
    <div className={styles.filter}>
        <h2 className={styles.h2_title}>Filter on:</h2>

        <h3 className={styles.subtitle}>Transport</h3>
            <ul className={styles.flex_col}>
                <li><input className={styles.input} type="checkbox" id="transport" name="transport" value="public-transport" />Public Transport</li>
                <li><input className={styles.input} type="checkbox" id="transport" name="transport" value="bicycle-rental" />Bicycle Rental</li>
                <li><input className={styles.input} type="checkbox" id="transport" name="transport" value="bus-service" />Bus Service</li>
                <li><input className={styles.input} type="checkbox" id="transport" name="transport" value="tram" />Tram</li>
                <li><input className={styles.input} type="checkbox" id="transport" name="transport" value="train" />Train</li>
            </ul>

        <h3 className={styles.subtitle}>Food</h3>
            <ul className={styles.flex_col}>
                <li><input className={styles.input} type="checkbox" id="food" name="food" value="vegetarian" />Vegetarian</li>
                <li><input className={styles.input} type="checkbox" id="food" name="food" value="vegan" />Vegan</li>
                <li><input className={styles.input} type="checkbox" id="food" name="food" value="living" />Lactose Free</li>
                <li><input className={styles.input} type="checkbox" id="food" name="food" value="gluten-free" />Gluten Free</li>
                <li><input className={styles.input} type="checkbox" id="food" name="food" value="organic" />Organic</li>

                <li><input className={styles.input} type="checkbox" id="food" name="food" value="local-products" />Local Products</li>
                <li><input className={styles.input} type="checkbox" id="food" name="food" value="delivery" />Delivery</li>
                <li><input className={styles.input} type="checkbox" id="food" name="food" value="take-away" />Take Away</li>
            </ul>

        <h3 className={styles.subtitle}>Shopping</h3>
            <ul className={styles.flex_col}>
                <li><input className={styles.input} type="checkbox" id="shopping" name="shopping" value="second-hand" />Second-hand</li>
                <li><input className={styles.input} type="checkbox" id="shopping" name="shopping" value="clothing" />Clothing</li>
                <li><input className={styles.input} type="checkbox" id="shopping" name="shopping" value="living" />Living</li>
                <li><input className={styles.input} type="checkbox" id="shopping" name="shopping" value="supermarket" />Supermarket</li>
                <li><input className={styles.input} type="checkbox" id="shopping" name="shopping" value="organic-farming" />Organic Farming</li>
            </ul>

        <h3 className={styles.subtitle}>Nature</h3>
            <ul className={styles.flex_col}>
                <li><input className={styles.input} type="checkbox" id="nature" name="nature" value="parks" />Parks</li>
                <li><input className={styles.input} type="checkbox" id="nature" name="nature" value="swimming" />Swimming</li>
                <li><input className={styles.input} type="checkbox" id="nature" name="nature" value="picnic-area" />Picnic Area</li>
            </ul>

        <button className={`${styles.btn} ${styles.btn_primary}`}>Filter</button>
    </div>
)
}

export default Filter