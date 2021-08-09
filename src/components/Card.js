import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";

import PropTypes from "prop-types";

import "./Card.scss";

const useStyles = makeStyles({
  card: {
    height: 380,
    boxShadow: "0 8px 24px rgb(149 157 165 / 20%)",
    background: "linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)",
  },
});

const Cards = ({ id, title, image, price, rating }) => {
  const classes = useStyles();
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <>
      <Card className={` product  ${classes.card}`}>
        <div className="news_buttons">
          <AddIcon onClick={addToBasket} className="button" />
        </div>
        <CardMedia
          component="img"
          className="product_image"
          alt="story image"
          height="200"
          image={image}
          title="New Article image"
        />
        <CardContent>
          {/* <Typography
            className="news-item-topic"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {n.topic}
          </Typography> */}
          <Typography
            className="product__info"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {title}
          </Typography>
          <Typography
            className="product__price"
            gutterBottom
            variant="h5"
            component="h2"
          >
            <small>$</small>
            <strong>{price}</strong>
          </Typography>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>
                  <StarIcon style={{ fill: "orange" }} />
                </p>
              ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
