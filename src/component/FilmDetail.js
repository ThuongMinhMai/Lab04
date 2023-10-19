import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { films } from "../shared/ListOfFilms";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ModalCase from "./ModalCase";
function FilmDetail() {
  const userName = useParams();
  const film = films.find((obj) => {
    return obj.id == userName.id;
  });
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    position: "absolute",
    top: "470px", // Adjust the position as needed
    right: "20px", // Adjust the position as needed
    zIndex: 999,
    color:"white", 
    fontSize:"40px", 
    backgroundColor:"red",
    padding:"5px",
    borderRadius:"10px" 
    
  };

  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingLeft:'20px',paddingRight:'20px' ,paddingTop:'50px'}}>
      <Card sx={{ maxWidth: 1000 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={film.imgDetail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {film.title}
            </Typography>
            <Typography variant="body2" fontSize='15px' color="text.secondary">
              Year: {film.year}
            </Typography>
            <Typography variant="body2" fontSize='15px' color="text.secondary">
              Nation: {film.nation}
            </Typography>
            <a
            onClick={() => setIsOpen(true)}
            className=""
          >
            <OndemandVideoIcon style={iconStyle}></OndemandVideoIcon>
          </a>
            
            <Typography variant="body1" style={{margin:'25px 0px'}}>Plot Summary:<br/> {film.detail}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
	  {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}

    </div>
  );
}

export default FilmDetail;
