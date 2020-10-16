import React, { useEffect, useState } from 'react';
import { Breadcrumb, Card, Col, Container, Jumbotron, Row, Spinner, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Error } from '../components/Error';
import { DataFetcher } from "../modules/DataFetcher";
import { normalize } from "../modules/Utils";
import { FaRegEyeSlash } from 'react-icons/fa';

export function PokemonDetail(props) {
    let { id } = useParams();
    let [pokemon, setPokemon] = useState(false);
    let [error, setError] = useState(false);
    useEffect(() => {
        DataFetcher.fetchPokemon(parseInt(id))
            .then((pokemon) => {
                setPokemon(pokemon)
            }).catch((error) => {
                setError(error);
            });
    })

    //Avoid pre-parsing of this JSX to prevent undefined errors
    let renderedComponent = function () {

        return (
            <Container data-testid="pokemon_detail">
                <Breadcrumb>
                    <Link style={{ marginRight: 5 }} to="/">
                        Home /
                    </Link>
                    <Breadcrumb.Item active>{normalize(pokemon.name)}</Breadcrumb.Item>
                </Breadcrumb>

                <Jumbotron style={{ padding: 10 }}>
                    <img alt={normalize(pokemon.name)} style={{ width: 150, display: "inline-block" }} src={pokemon.sprites.other["official-artwork"].front_default}></img>
                    <h1 >{normalize(pokemon.name)}</h1>
                </Jumbotron>

                <>
                    <Row>
                        <Col xs={12} md={6}>
                            <Card>
                                <Card.Header>Stats</Card.Header>
                                <Card.Body>
                                        {
                                            pokemon.stats.length > 0 ?
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Base Value</th>
                                                                    <th>Effort</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {pokemon.stats.map((item) => (
                                                                    <tr key={item.stat.name}>
                                                                        <td>
                                                                            {normalize(item.stat.name)}
                                                                        </td>
                                                                        <td>
                                                                        {item.base_stat}
                                                                        </td>
                                                                        <td>
                                                                            {item.effort}
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                                }
                                                              
                                                            </tbody>
                                                        </Table> 
                                                :  <Card.Text> "No abilities available"  </Card.Text>
                                        }
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col xs={12} md={6}>
                            <Card>
                                <Card.Header>Moves</Card.Header>
                                <Card.Body>
                                        {
                                            pokemon.moves.length > 0 ?
                                                <>
                                                    <p> {pokemon.moves.length}  {pokemon.moves.length === 1 ? "Ability" : "Abilities"} Available </p>
                                                    {pokemon.moves.length > 10 ? <h6>Showing only the first 10 abilities</h6> : ""}
                                                    <ul>
                                                        {pokemon.moves.slice(0, 10).map((item) => (
                                                            <li key={item.move.name}>{normalize(item.move.name)} {item.is_hidden ? <FaRegEyeSlash /> : ""}</li>
                                                        ))
                                                        }
                                                    </ul>
                                                </>
                                                : "No abilities available"
                                        }

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={6}>
                            <Card>
                                <Card.Header>Abilities</Card.Header>
                                <Card.Body>
                                        {
                                            pokemon.abilities.length > 0 ?
                                                <ul>
                                                    {pokemon.abilities.map((item) => (
                                                        <li key={item.ability.name} title={item.is_hidden ? "This attribute is hidden" : "This attribute is not hidden"} >{normalize(item.ability.name)} {item.is_hidden ? <FaRegEyeSlash /> : ""}</li>
                                                    ))
                                                    }
                                                </ul>
                                                : "No abilities available"
                                        }
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col xs={12} md={6}>
                            <Card>
                                <Card.Header>Types</Card.Header>
                                <Card.Body>
                                        {
                                            pokemon.types.length > 0 ?
                                                <ul>
                                                    {pokemon.types.map((item) => (
                                                        <li key={item.type.name}>{normalize(item.type.name)}</li>
                                                    ))
                                                    }
                                                </ul>
                                                : "No abilities available"
                                        }
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={6}>
                            <Card>
                                <Card.Header>Species</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Specie of this pokemon: {pokemon.species.name}


                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col xs={12} md={6}>
                            <Card>
                                <Card.Header>Held Items</Card.Header>
                                <Card.Body>
                                        {
                                            pokemon.held_items.length > 0 ?
                                                <ol>
                                                    {pokemon.held_items.map((item) => (
                                                        <li key={item.item.name}>{item.item.name}</li>
                                                    ))
                                                    }
                                                </ol>
                                                : "No held items available"
                                        }
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </>

            </Container>
        )
    }
    return (<div>
        {
            typeof pokemon === "object" ? renderedComponent() : (error !== false ? <Error>{error}</Error> : <Spinner animation="border" />)
        }
    </div>)
}