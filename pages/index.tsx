import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Header from '../components/pages/Header';

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
      </Container>
    </>
  );
}