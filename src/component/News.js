import React, {useState} from 'react'
import { Container,Button, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
function News() {
  const newsImageStyle = {
    width: '70%',
    height: '500px',
    borderRadius: '8px',
  };
  
  const sectionStyle = {
    marginTop: '20px',
  };
  const [selectedNews, setSelectedNews] = useState(null);

  const newsData = [
    {
      title: 'Exciting Movie Announcement',
      content: 'We\'re thrilled to announce a new blockbuster movie coming to theaters soon. Stay tuned for more details.',
    },
    {
      title: 'Exclusive Interview with a Film Star',
      content: 'Dive into an exclusive interview with a renowned film star and get insights into their upcoming projects. Read the full interview for all the details.',
    },
    {
      title: 'Behind-the-Scenes: Filming Locations',
      content: 'Explore the stunning filming locations of your favorite films and TV shows. Get an inside look at where the magic happens.',
    },
  ];

  const handleReadMoreClick = (index) => {
    setSelectedNews(newsData[index]);
  };

  return (
    <Container maxWidth="lg" style={{paddingBottom:"50px",paddingRight:"50px",paddingLeft:"50px",paddingTop:"100px" ,display:'flex',flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <img src='assets/news.jpg' alt="Latest News" style={newsImageStyle} />

      <Typography variant="h4" align="center" gutterBottom>
        Latest News
      </Typography>

      <Grid container spacing={3} style={sectionStyle}>
        {newsData.map((news, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {selectedNews === news ? news.content : `${news.content.slice(0, 120)}...`}
                </Typography>
                {selectedNews !== news && (
                  <Button onClick={() => handleReadMoreClick(index)}>
                    Read more
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedNews && (
        <Paper elevation={3} style={{ padding: '20px', ...sectionStyle }}>
          <Typography variant="h6" gutterBottom>
            {selectedNews.title}
          </Typography>
          <Typography variant="body2">
            {selectedNews.content}
          </Typography>
        </Paper>
      )}
    </Container>
  );
}

export default News