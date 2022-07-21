import { Grid, Typography } from '@mui/material'
import React from 'react'

const SplashComponent = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ width: '100%' }}
    >
      <Typography variant="body1">
        Loading ...
      </Typography>
    </Grid>
  )
}

export default SplashComponent