import React from 'react';
import { Carousel, Accordion, Container, Row, Col } from 'react-bootstrap';
import imagen1 from '../imagenes/imagen1.png';
import imagen2 from '../imagenes/imagen2.png';
import imagen3 from '../imagenes/imagen3.png';

const Home = () => {
    return (
        <div>
            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen1}
                        alt="Primera imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen2}
                        alt="Segunda imagen"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagen3}
                        alt="Tercera imagen"
                    />
                </Carousel.Item>
            </Carousel>

            {/* Texto en 2 columnas */}
            <Container>
                <Row className="my-4">
                    <Col md={6}>
                        <p>"Titanes del Pacífico" destaca por su trama épica, que enfrenta a gigantescos robots (Jaegers) contra monstruos colosales (Kaiju) en una batalla por la supervivencia de la humanidad. La historia sigue a Raleigh Becket, un piloto que regresa al combate junto a Mako Mori, mientras el comandante Stacker Pentecost lidera la resistencia. La película es aclamada por sus impresionantes efectos especiales, que combinan CGI avanzado con escenas prácticas para crear batallas visualmente espectaculares. Los diseños únicos de los Jaegers y Kaiju, junto con una narrativa emocionalmente rica y un elenco destacado, crean una experiencia cinematográfica que rinde homenaje a los clásicos del género mientras ofrece una visión fresca y emocionante del enfrentamiento entre humanos y monstruos.</p>
                    </Col>
                    <Col md={6}>
                        <p>TGuillermo del Toro, el director de "Titanes del Pacífico", aportó su visión única y pasión por el género de los mechas y monstruos, creando una película visualmente deslumbrante y emocionalmente rica. La recepción crítica fue en general positiva, destacando la originalidad del concepto, el impresionante diseño visual y las secuencias de acción épicas, aunque algunos críticos señalaron que la trama era predecible. Del Toro, conocido por su meticulosa atención al detalle, también incluyó homenajes a películas clásicas de monstruos, lo que le valió elogios por su habilidad para combinar nostalgia con innovación. Además, la película impulsó el uso de efectos visuales y CGI en el género de acción y ciencia ficción, estableciendo un nuevo estándar para las películas de robots gigantes y criaturas colosales.</p>
                    </Col>
                </Row>
            </Container>

            {/* Texto en accordion */}
            <Container>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Detalles de Producción</Accordion.Header>
                        <Accordion.Body>
                        Titanes del Pacífico" (Pacific Rim), dirigida por Guillermo del Toro, es una película de acción y ciencia ficción lanzada en 2013. La película es conocida por sus impresionantes efectos visuales y la escala épica de su acción, que enfrenta a robots gigantes (Jaegers) contra monstruos colosales (Kaiju).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Reparto y Personajes</Accordion.Header>
                        <Accordion.Body>
                        En "Titanes del Pacífico", Charlie Hunnam interpreta a Raleigh Becket, un piloto de Jaeger que, tras perder a su hermano, regresa a luchar contra los Kaiju y se asocia con Rinko Kikuchi como Mako Mori, una piloto con un pasado trágico. Idris Elba es Stacker Pentecost, el comandante de la operación Jaeger, cuyo liderazgo y sacrificio son cruciales para la batalla final. Ron Perlman aporta alivio cómico y una perspectiva única como Hannibal Chau, un comerciante de partes de Kaiju, mientras que Clifton Collins Jr. es Tendo Choi, el técnico esencial para el mantenimiento de los Jaegers. Cada uno contribuye significativamente a la lucha épica y al desarrollo emocional de la historia.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}

export default Home;