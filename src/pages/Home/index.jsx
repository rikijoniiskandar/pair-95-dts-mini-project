import { Box, Container } from '@mui/material';
import { useEffect } from 'react'


const HomeIndex = () => {
  useEffect(() => {
    document.title = 'Home --- Movie'
  })
  return (
    <Box sx={{ color: '#fff', marginTop: '70px' }}>
      <Container>
        Welcome to Movie App
      </Container>

    </Box>
  )
}

export default HomeIndex;