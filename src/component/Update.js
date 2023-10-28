import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography, Grid, TextField, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";
function Update() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [filmData, setFilmData] = useState({
    title: "",
    image: "",
    imgDetail: "",
    year: "",
    detail: "",
    nation: "",
    clip: "",
  });

  useEffect(() => {
    // Fetch film details using the `id` parameter and update `filmData`
    fetch(`https://6532a37dd80bd20280f5de12.mockapi.io/films/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setFilmData(data);
      })
      .catch((error) => console.log(error.message));
  }, [id]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilmData({ ...filmData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a PUT request to update the film with the new data
    fetch(`https://6532a37dd80bd20280f5de12.mockapi.io/films/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        // Navigate to the film detail page after successful update
      })
      .catch((error) => console.log(error.message));
      setOpen(true)
  };
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ padding: "150px" }}
    >
      <Grid container spacing={2}>
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          Update Film
        </Typography>
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
          <TextField
            label="Clip Link"
            variant="outlined"
            name="clip"
            value={filmData.clip}
            onChange={handleInputChange}
            fullWidth
            required
            style={{ marginBottom: "15px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Update Film
          </Button>
        </form>
      </Grid>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Film update successful!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/">
              <Button onClick={handleClose} autoFocus>
                HomePage
              </Button>
            </Link>
            
          </DialogActions>
        </Dialog>
      </div>
    </Grid>
  );
}

export default Update;
