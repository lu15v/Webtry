import React from 'react'
import { Card, Button } from 'semantic-ui-react'

import '../styles/poem-card.css';

const poemaDemo = `
Deténte, sombra de mi bien esquivo,
imagen del hechizo que más quiero,
bella ilusión por quien alegre muero,
dulce ficción por quien penosa vivo.

Si al imán de tus gracias atractivo
sirve mi pecho de obediente acero,
¿para qué me enamoras lisonjero,
si has de burlarme luego fugitivo?

Mas blasonar no puedes satisfecho
de que triunfa de mí tu tiranía;
que aunque dejas burlado el lazo estrecho

que tu forma fantástica ceñía,
poco importa burlar brazos y pecho
si te labra prisión mi fantasía.`

const PoemCard = () => (

  <Card>
    <Card.Content>
        <Card.Header>Aveces te extrano</Card.Header>
        <Card.Meta>Sor Juana Ines de la Cruz (1710)</Card.Meta>
        <Card.Description>
          {poemaDemo.substring(1, 100).concat('...')}
        </Card.Description>
      </Card.Content>
    <Card.Content extra>
        <Button>Primary</Button>
    </Card.Content>
  </Card>
)

export default PoemCard;