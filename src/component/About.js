import React from 'react'
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
function About() {
  const aboutImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };
  return (
    <Container maxWidth="lg" style={{paddingTop:"50px"}}>
      <img src='assets/logo.png' alt="About Us" style={aboutImageStyle} />

      <Typography variant="h4" align="center" gutterBottom>
        About Our Film Website
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Welcome to our film website!
        </Typography>
        <Typography variant="body1" paragraph>
          We are dedicated to providing you with the latest information about your favorite films.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team of experts works tirelessly to bring you the most up-to-date reviews, news, and insights
          about the film industry.
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to explore our website and discover a wide range of content, from movie reviews and
          trailers to behind-the-scenes glimpses of your favorite films.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for visiting us and being a part of our film-loving community.
        </Typography>
      </Paper>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body2">
                To provide film enthusiasts with the best content and insights about the world of cinema.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2">
                If you have any questions or feedback, please don't hesitate to contact us at contact@filmwebsite.com.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About