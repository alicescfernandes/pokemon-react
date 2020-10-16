import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PokemonListItem(props) {
    let { data } = props;
    let [firstLetter,...restOfThem] = data.name.split("");
    let upperCaseName = [firstLetter.toUpperCase(), ...restOfThem].join("");
    return (
        <Card data-testid="list_item" style={{ marginBottom: '20px'}}>
            <Card.Img style={{ maxWidth: '200px',margin:"auto"}} variant="top" src={data.sprites.other["official-artwork"].front_default} />
            <Card.Body>
                <Card.Title>{upperCaseName}</Card.Title>
                <Link to={`/pokemon/${data.id}`}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

/*
 <div className="pokemon-list">
            <img src={data.sprites.front_default}></img>

        </div>

*/