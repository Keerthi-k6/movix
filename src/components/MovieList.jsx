import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Typography, List, ListItem, styled, Button } from '@mui/material';
const Container = styled(List)`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
`
const SBox=styled('ul')`
display: flex;
flex-direction:row;
flex-wrap:wrap
`
const Wrapper = styled('div')`
background-color:#CFF5E7;
`

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setMovies(data.map(item => item.show));
      })
      .catch(error => {
        console.error('Error fetching movie list:', error);
      });
  }, []);

  return (
    <Wrapper>
      <Typography sx={{textAlign:'center',background:'#A0E4CB'}} variant='h3'>Movie List</Typography>
      <SBox>
        {movies.map(movie => (
          <Container key={movie.id}>
            <ListItem sx={{flexDirection:'column'}}>
            <Typography variant='h5'>{movie.name}</Typography>
            <img src={movie.image?.medium} alt={movie.name} />
            <Link to={`/summary/${movie.id}`}>
              <Button size='small'variant='contained'sx={{background:'black',color:'white',marginTop:'5px'}}>See More</Button>
            </Link>
            </ListItem>
          </Container>
        ))}
      </SBox>
      </Wrapper>
  );
};

export default MovieList;
