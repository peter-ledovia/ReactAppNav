import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function PageNotFound () {

  return (
      <Box sx={{ height: 400, width: '100%' }}>
        <Typography variant="h5" component="h2"><b>Page not found</b></Typography>
    </Box>
  );
    }

export default PageNotFound
