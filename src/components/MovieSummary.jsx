import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {Box,  Typography, List, ListItem, styled, Button, Grid } from '@mui/material';
import { Star } from '@mui/icons-material';
const Wrapper = styled(Box)`
background-color:#CFF5E7;
padding:65px;
`
const Container = styled(List)`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
`
const MovieSummary = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');

  const [language, setLanguage] = useState('');
  const [status, setStatus] = useState('');
  const [officialSite, setOfficialSite] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setSummary(data.summary);
        setImage(data.image?.medium);
        setRating(data.rating?.average);
    
        setLanguage(data.language);
        setStatus(data.status);
        setOfficialSite(data.officialSite);
      })
      .catch(error => {
        console.error('Error fetching movie summary:', error);
      });
  }, [id]);

  const handleBookMovie = () => {
    // Store movie details in local storage
    localStorage.setItem('bookingMovieId', id);
    // Open the booking form in a new window
    window.open('/book', '_blank');
  };

  return (
    <Wrapper>
    <Container>
      <ListItem>
      {image && <img src={image} alt="Movie Poster" />}
      <Box>
      <Grid container direction="row" alignItems="center">
      <Typography variant='h5'sx={{padding:'25px',paddingRight:'40px',fontWeight:'bold'}}>{name}</Typography>
      <Typography sx={{paddingRight:'20px'}}>|</Typography>
       <Star sx={{ color:'#0D4C92'}}/> {rating}
      </Grid>

      <Typography sx={{padding:'25px'}}>{summary}</Typography>
      </Box>
      </ListItem>
      </Container>
      <Typography>Language: {language}</Typography>
      <Typography>Status: {status}</Typography>
      <Typography>Official Site: <a href={officialSite}>{officialSite}</a></Typography>
      <Button size='small'variant='contained'sx={{background:'black',color:'white',margin:'5px'}} onClick={handleBookMovie}>Book Movie</Button>
      <Button size='small'variant='contained'sx={{background:'#1fc98d',color:'white',margin:'5px'}}><Link to="/">Go back to Movie List</Link></Button>

    </Wrapper>
  );
};

export default MovieSummary;
