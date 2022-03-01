import React from 'react';
import './Reviews.css';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Grid from '@mui/material/Grid';

export default function Reviews() {

    function stringAvatar(name) {
        return {
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    /* Reviews object */ 
    const reviews = {
        review1 : {
            "name" : "Ahmed GHANIM",
            "rating" : 3.5,
            "review" : "Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus."
        },
        review2 : {
            "name" : "Anas Selim",
            "rating" : 4,
            "review" : "Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus."
        },
        review3 : {
            "name" : "Khaled Malih",
            "rating" : 5,
            "review" : "Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus."
        }
    }
  return (
    <div id="reviews">
        <div className='title-section'>
            <h1>What Clients Say</h1>
            <span className='divider'></span>
            <Carousel autoPlay infiniteLoop showStatus={false}>
                <Grid className='reviews-bloc' container spacing={3} direction="row" justifyContent="center">
                        <Grid className="review" item md={4}>
                            <div className="bloc1">
                                <Avatar className='avatar' {...stringAvatar(reviews.review1.name)} />
                                <h2 className="name">{reviews.review1.name}</h2>
                                <Rating name="read-only" value={reviews.review1.rating} readOnly precision={0.5}/>
                            </div>
                            <div className="bloc2">
                                <p>{reviews.review1.review}</p>                               
                            </div>
                        </Grid>
                        <Grid className="review" item md={4}>
                            <div className="bloc1">
                                <Avatar className='avatar' {...stringAvatar(reviews.review2.name)} />
                                <h2 className="name">{reviews.review2.name}</h2>
                                <Rating name="read-only" value={reviews.review2.rating} readOnly precision={0.5}/>
                            </div>
                            <div className="bloc2">
                                <p>{reviews.review2.review}</p>
                            </div>
                        </Grid>
                </Grid>
                <Grid className='reviews-bloc' container spacing={3} direction="row" justifyContent="center">
                        <Grid className="review" item md={4}>
                            <div className="bloc1">
                                <Avatar className='avatar' {...stringAvatar(reviews.review3.name)} />
                                <h2 className="name">{reviews.review3.name}</h2>
                                <Rating name="read-only" value={reviews.review3.rating} readOnly precision={0.5}/>
                            </div>
                            <div className="bloc2">
                                <p>{reviews.review3.review}</p>                               
                            </div>
                        </Grid>
                        <Grid className="review" item md={4}>
                            <div className="bloc1">
                                <Avatar className='avatar' {...stringAvatar(reviews.review1.name)} />
                                <h2 className="name">{reviews.review1.name}</h2>
                                <Rating name="read-only" value={reviews.review1.rating} readOnly precision={0.5}/>
                            </div>
                            <div className="bloc2">
                                <p>{reviews.review1.review}</p>
                            </div>
                        </Grid>
                </Grid>
                <Grid className='reviews-bloc' container spacing={3} direction="row" justifyContent="center">
                        <Grid className="review" item md={4}>
                            <div className="bloc1">
                                <Avatar className='avatar' {...stringAvatar(reviews.review1.name)} />
                                <h2 className="name">{reviews.review1.name}</h2>
                                <Rating name="read-only" value={reviews.review1.rating} readOnly precision={0.5}/>
                            </div>
                            <div className="bloc2">
                                <p>{reviews.review1.review}</p>                               
                            </div>
                        </Grid>
                        <Grid className="review" item md={4}>
                            <div className="bloc1">
                                <Avatar className='avatar' {...stringAvatar(reviews.review1.name)} />
                                <h2 className="name">{reviews.review1.name}</h2>
                                <Rating name="read-only" value={reviews.review1.rating} readOnly precision={0.5}/>
                            </div>
                            <div className="bloc2">
                                <p>{reviews.review1.review}</p>
                            </div>
                        </Grid>
                </Grid>
            </Carousel>
        </div>
    </div>
  )
}