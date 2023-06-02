
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Typography, List, ListItem, styled, Button, Box } from '@mui/material';
const Wrapper = styled('div')`
background-color:#CFF5E7;
width:20rem;
height:25rem;
margin:4% 20% 4% 30%;
`
const Container = styled(List)`
display:flex;
flex-direction:column;
align-items:center;
padding:25px;

`
const SBox=styled(Box)`
margin:2rem`
const BookingForm = ({ movieId }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Store details in local storage
    localStorage.setItem('bookingName', name);
    localStorage.setItem('bookingEmail', email);
    localStorage.setItem('bookingContact', contact);

    // Reset form fields
    setName('');
    setEmail('');
    setContact('');

    // Navigate to the movie summary page
    navigate(`/summary/${movieId}`);
  };

  return (
    <Wrapper>
      <Typography variant='h4'sx={{textAlign:'center',background:'#A0E4CB'}}>Booking Form</Typography>
      <Container>
      <ListItem>
      <form onSubmit={handleFormSubmit}>
        <SBox>
        <label >
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        </SBox>
        <SBox>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        </SBox>
        <SBox>
        <label>
          Contact:
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </label>
        </SBox>
        <Button type="submit"  size='small'variant='contained'sx={{background:'black',color:'white',margin:'5px'}}>Submit</Button>
      </form>
      </ListItem>
      </Container>
    </Wrapper>
  );
};

export default BookingForm;
