import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import ProTip from '../src/ProTip';
import { Copyright } from '../components/pages/Copyright'
import CompanyTile from '../components/pages/CompanyTile'
import Header from '../components//pages/Header'

export default function Index() {
  return (
    <>
      <Header />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          This Project is our arbitrary opinions to companies.
        </Typography>

        {/* <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            Chart
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid> */}
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper>
                <CompanyTile />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main> */}

        <ProTip />
        <Copyright />
      </Box>
    </>
  );
}
