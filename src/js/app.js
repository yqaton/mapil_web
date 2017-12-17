import React from 'react'
import { render } from 'react-dom'

import 'semantic-ui-css/semantic.min.css'
import { Grid, Input, Container, Header, Divider } from 'semantic-ui-react'

const App = () => (
  <Grid container style={{ padding: '5em 0em' }}>
    <Container
      textAlign='center'
    >
      <Header as='h1'>Mapil - Admin panel</Header>
      <Divider horizontal='true' />
      <Input
        action={
          {
            color: 'teal',
            labelPosition: 'right',
            icon: 'copy',
            content: 'Copy'
          }
        }
        defaultValue='http://gl.lebga.yy/prob'
      />
    </Container>
  </Grid>
)


render(
  <App />,
  document.getElementById('app')
)
