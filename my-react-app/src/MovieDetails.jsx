import { useParams, useNavigate } from "react-router-dom";

import { Container, Button,Typography, Box,  
 } from "@mui/material";


// 1. Mock Test Data
const mockData = [
  { id: '101', title: 'Mountain Adventure', desc: 'Explore the rocky trails.', img: 'https://unsplash.com' },
  { id: '102', title: 'Ocean Breeze', desc: 'Relax by the deep blue sea.', img: 'https://unsplash.com' },
  { id: '103', title: 'Desert Oasis', desc: 'Discover hidden sands.', img: 'https://unsplash.com' },
  { id: '104', title: 'Forest Retreat', desc: 'Get lost in nature.', img: 'https://unsplash.com' },
];



function MovieDetails() {
  const { id } = useParams(); // Grabs the ID from the URL path
  const navigate = useNavigate();

  // Find the item matching the ID from the URL
  const item = mockData.find((b) => b.id === id);

  if (!item) {
    return (
      <Container sx={{ py: 4, textBreak: 'break-all' }}>
        <Typography variant="h5" color="error">Item ID "{id}" not found.</Typography>
        <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2 }}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          ID: {id}
        </Typography>
        <Box 
          component="img" 
          src={item.img} 
          alt={item.title} 
          sx={{ width: '100%', height: 'auto', borderRadius: 2, my: 3, boxShadow: 3 }}
        />
        <Typography variant="body1" paragraph>
          {item.desc} This is a dedicated detail view page generated dynamically using routing params.
        </Typography>
        <Button variant="outlined" onClick={() => navigate('/MovieList')}>
          Back to Grid
        </Button>
      </Box>
    </Container>
  );
}

export default MovieDetails