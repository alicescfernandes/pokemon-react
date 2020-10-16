import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Jumbotron, Pagination, Row, Spinner } from 'react-bootstrap';
import { PokemonListItem } from '../components/PokemonListItem';
import { DataFetcher } from "../modules/DataFetcher";

export function Home() {
    let [items, setItems] = useState([])
    useEffect(function () {
        DataFetcher.fetchAllPokemons().then((data) => {
            setItems(data.results)
        });
    }, [])

    /*  useEffect(() => {
         if(items.length == 0){
 
         }
         
         setItems(props.items);
         console.log("render")
     }, [props.items]) //trigger only when this changes 
     */

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
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>

                </Col>
            </Row>
        </Container>


    )
}