import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import { films } from "../shared/ListOfFilms";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ModalCase from "./ModalCase";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { UserAuth } from "./AuthContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function FilmDetail() {
  // const userName = useParams();
  // const film = films.find((obj) => {
  //   return obj.id == userName.id;
  // });

  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState({
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
        setFilm(data);
      })
      .catch((error) => console.log(error.message));
  }, [id]);
  const [isOpen, setIsOpen] = useState(false);

  const iconStyle = {
    position: "absolute",
    top: "470px", // Adjust the position as needed
    right: "20px", // Adjust the position as needed
    zIndex: 999,
    color: "white",
    fontSize: "40px",
    backgroundColor: "red",
    padding: "5px",
    borderRadius: "10px",
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const { user, logOut } = UserAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUpdate = () => {
    setAnchorEl(null);
    if (user == null) {
      setOpenDialog(true);
    } else{
      navigate(`/update/${film.id}`);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    if (user == null) {
      setOpenDialog(true);
    } else{
      fetch(`https://6532a37dd80bd20280f5de12.mockapi.io/films/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        // Redirect to the film list page after successful deletion
        navigate("/");
      })
      .catch((error) => console.log(error.message));
    }
  };

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openConfirm , setOpenConfirm] = React.useState(false);
  

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "50px",
        }}
      >
        <Card sx={{ maxWidth: 1000 }}>
          <CardActionArea disableRipple>
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

              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Options
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleUpdate} disableRipple>
                    <EditIcon />
                    Update
                  </MenuItem>
                  <MenuItem onClick={handleOpenConfirm} disableRipple>
                    <DeleteForeverIcon />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </div>

              <Typography
                variant="body2"
                fontSize="15px"
                color="text.secondary"
              >
                Year: {film.year}
              </Typography>
              <Typography
                variant="body2"
                fontSize="15px"
                color="text.secondary"
              >
                Nation: {film.nation}
              </Typography>
              <a onClick={() => setIsOpen(true)} className="">
                <OndemandVideoIcon style={iconStyle}></OndemandVideoIcon>
              </a>

              <Typography variant="body1" style={{ margin: "25px 0px" }}>
                Plot Summary:
                <br /> {film.detail}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}

      <div>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You need to log in before performing the operation
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/login">
              <Button onClick={handleCloseDialog}>Login</Button>
            </Link>
            <Button onClick={handleCloseDialog} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog
          open={openConfirm}
          onClose={handleCloseConfirm}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this film?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleCloseConfirm} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default FilmDetail;
