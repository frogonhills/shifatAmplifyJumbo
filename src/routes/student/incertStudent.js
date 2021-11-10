import React from 'react';
import GridContainer from '../../@jumbo/components/GridContainer';
import PageContainer from '../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Student Incert', isActive: true },
];

const IncertStudent = () => {
  return (
    <PageContainer heading="Student Incert" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            HELLO
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default IncertStudent;
