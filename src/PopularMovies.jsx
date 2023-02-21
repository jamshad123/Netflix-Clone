import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { imageUrl } from "./Url";
import Axios from "axios";
import { Card, Carousel, CarouselItem, ListGroup } from "react-bootstrap";
import "./PopularMovies.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { newcontext } from "./App";




function PopularMovies({ Movies }) {
    const {array,setarray}=useContext(newcontext);

    const [movies, setmovies] = useState([]);
    useEffect(() => {
        Axios.get(Movies).then((res) => setmovies(res.data.results));
        setarray(movies)
    }, [movies])
    console.log(movies);
    console.log(array);

    return (
        <div className="row">
            {movies.map((item) => {
                return (
                    <Card style={{ width: "18rem", height: "35rem", backgroundColor: "black" }}>
                        <Carousel>
                            <CarouselItem>
                                <img
                                    style={{ height: "10rem" }}
                                    className="d-block w-100"
                                    src={imageUrl + item.backdrop_path}
                                    alt="First slide"
                                />
                            </CarouselItem>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>{item.title || item.name}</Card.Title>
                            <Card.Text>Languaage : {item.original_language}</Card.Text>
                            <Card.Text>Release date : {item.release_date}</Card.Text>
                        </Card.Body>
                        <ListGroup className="group">
                            <ListGroup.Item className="new">Popularity :{item.popularity}</ListGroup.Item>
                            <ListGroup.Item className="there">Vote :{item.vote_average}</ListGroup.Item>
                        </ListGroup>

                        <Card.Body>
                            <Link to={`/details/${item.id}`}>
                                <button style={{ color: "white", backgroundColor: "black", borderColor: "#87d0d6" }}>
                                    <h5>
                                        <span>Watch</span>
                                    </h5>
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}

export default PopularMovies;
