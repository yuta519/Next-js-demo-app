import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Card from '../components/pages/Card'
import Header from '../components/pages/Header'

export default function Index() {
  return (
    <>
      <Header />
      <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dokudan.
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom>
          This Project is our arbitrary opinions to companies.
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item xs={4}><Card title="AWS"/></Grid>
          <Grid item xs={4}><Card title="Google"/></Grid>
          <Grid item xs={4}><Card title="Facebook"/></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}><Card title="Apple"/></Grid>
          <Grid item xs={4}><Card title="Microsoft"/></Grid>
          <Grid item xs={4}><Card title="Netflix"/></Grid>
        </Grid>
      </Box>
      <a href="https://nextjs.org/">NextJS</a>
      </Container>
    </>
  );
}