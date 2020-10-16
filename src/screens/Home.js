import React, { useEffect, useState } from 'react';
import {useLocation } from 'react-router-dom';
import {Col, Container, Jumbotron, Row, Spinner } from 'react-bootstrap';
import { PokemonListItem } from '../components/PokemonListItem';
import { Pagination } from '../components/Pagination';
import { DataFetcher } from "../modules/DataFetcher";
import { parseQueryString } from '../modules/Utils';

export function Home() {
    let [items, setItems] = useState([]);
    let [offset, setOffset] = useState(0);
    let [totalElements, setTotalElements] = useState(0);
    let { search } = useLocation();

    let queryOffset = parseInt(parseQueryString(search).get("offset"));
    if (Number.isNaN(queryOffset) === false && queryOffset !== offset) {
        setOffset(queryOffset);
    }

    useEffect(function () {
        DataFetcher.fetchAllPokemons(6, offset).then((data) => {
            setTotalElements(data.count);
            setItems(data.results);
            console.log((totalElements/6)-6)
        });
    }, [offset,totalElements])

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Pokedex</h1>

                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                {
                    items?.length > 0 ? items.map(element => (
                        <Col key={element.id} xs={12} md={4}><PokemonListItem data={element} /></Col>)) :
                        <Col><Spinner animation="border" /></Col>
                }
            </Row>

            <Row>

                <Col>
                    <Pagination offset={offset} totalElements={totalElements}></Pagination>
                </Col>
            </Row>
        </Container>


    )
}