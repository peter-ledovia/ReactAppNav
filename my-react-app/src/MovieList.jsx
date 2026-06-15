import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Button, Box } from '@mui/material';


const mockData = [
  { id: '101', title: 'Mountain Adventure', desc: 'Explore the rocky trails.', img: 'https://tse1.mm.bing.net/th/id/OIP.4Qoki0xfOTjL3MtwBtXfBAHaJ2?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '102', title: 'Ocean Breeze', desc: 'Relax by the deep blue sea.', img: 'https://tse2.mm.bing.net/th/id/OIP.Q5ee__AUHiaqvGXt8LMqNQAAAA?cb=thfvnextfalcon2&w=471&h=626&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '103', title: 'Desert Oasis', desc: 'Discover hidden sands.', img: 'https://tse2.mm.bing.net/th/id/OIP.af6NMGPVQsKt0oZLMacklQHaLH?cb=thfvnextfalcon2&w=1333&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '104', title: 'Forest Retreat', desc: 'Get lost in nature.', img: 'https://img.magnific.com/premium-psd/movie-poster_1144036-5363.jpg' },
  { id: '105', title: 'Mountain Adventure', desc: 'Explore the rocky trails.', img: 'https://tse1.mm.bing.net/th/id/OIP.4Qoki0xfOTjL3MtwBtXfBAHaJ2?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '107', title: 'Ocean Breeze', desc: 'Relax by the deep blue sea.', img: 'https://tse2.mm.bing.net/th/id/OIP.Q5ee__AUHiaqvGXt8LMqNQAAAA?cb=thfvnextfalcon2&w=471&h=626&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '108', title: 'Desert Oasis', desc: 'Discover hidden sands.', img: 'https://tse2.mm.bing.net/th/id/OIP.af6NMGPVQsKt0oZLMacklQHaLH?cb=thfvnextfalcon2&w=1333&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: '109', title: 'Forest Retreat', desc: 'Get lost in nature.', img: 'https://img.magnific.com/premium-psd/movie-poster_1144036-5363.jpg' },
];

const containerStyle = { width: '100%'}
const cardStyle = { height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '240px' }

const handleRowClick = (params) => {
    // Navigate to /details/1, /details/2, etc.
    navigate(`/details/${params.id}`);
  };

const MovieList = () => {
  const navigate = useNavigate();


    return (

         <Container sx={{ py: 4}}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                    Movies
            </Typography>
            <Grid container spacing={3} sx={containerStyle}>
                {mockData.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={3}>
                    <Card sx={cardStyle}>

                    <CardActionArea onClick={() => navigate(`/MovieDetails/${item.id}`)}>
                        <CardMedia
                        component="img"
                        height="240"
                        image={item.img}
                        alt={item.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.desc}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                ))}
            </Grid>
         </Container>
   
        )
    }

export default MovieList
