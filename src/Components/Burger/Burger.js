import React from "react";
import cssObj from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = () => {
  return (
    <div className={cssObj.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat1" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;