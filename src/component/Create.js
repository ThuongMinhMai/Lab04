import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";

function Create() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [filmData, setFilmData] = useState({
    title: "",
    image: "",
    imgDetail: "",
    year: "",
    detail: "",
    nation: "",
    clip: "",
  });

  const [showClipPassword, setShowClipPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilmData({ ...filmData, [name]: value });
  };

  const toggleClipPasswordVisibility = () => {
    setShowClipPassword(!showClipPassword);
  };

  const baseURL = `https://6532a37dd80bd20280f5de12.mockapi.io/films`;
  const handleSubmit = (event) => {
    event.preventDefault();

    const newFilm = {
      title: filmData.title,
      image: filmData.image,
      imgDetail: filmData.imgDetail,
      year: parseInt(filmData.year),
      detail: filmData.detail,
      nation: filmData.nation,
      clip: filmData.clip,
    };

    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFilm),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => console.log(error.message));

    setFilmData({
      title: "",
      image: "",
      imgDetail: "",
      year: "",
      detail: "",
      nation: "",
      clip: "",
    });
    setOpen(true);
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Typography variant="h2">Add new Film</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            variant="outlined"
            name="title"
            value={filmData.title}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />

          <TextField
            label="Image URL"
            variant="outlined"
            name="image"
            value={filmData.image}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />

          <TextField
            label="Image Detail URL"
            variant="outlined"
            name="imgDetail"
            value={filmData.imgDetail}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />

          <TextField
            label="Year"
            variant="outlined"
            name="year"
            value={filmData.year}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />

          <TextField
            label="Detail"
            variant="outlined"
            name="detail"
            value={filmData.detail}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />

          <TextField
            label="Nation"
            variant="outlined"
            name="nation"
            value={filmData.nation}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-clip">Clip Link</InputLabel>
            <OutlinedInput
              id="outlined-adornment-clip"
              name="clip"
              type={showClipPassword ? "text" : "password"}
              value={filmData.clip}
              onChange={handleInputChange}
              required
              style={{ marginBottom: "15px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle clip link visibility"
                    onClick={toggleClipPasswordVisibility}
                    edge="end"
                  >
                    {showClipPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
          >
            Add Film
          </Button>
        </form>

        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Added film successfully!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Keep adding films</Button>
              <Link to="/">
                <Button onClick={handleClose} autoFocus>
                  HomePage
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </Grid>
  );
}

export default Create;
