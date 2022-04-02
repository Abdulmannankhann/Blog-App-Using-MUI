import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        img: auth.currentUser.photoURL,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        sx={{
          minWidth: 275,
          boxShadow: 5,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            Title:
          </Typography>
          <FormControl sx={{ width: 400 }}>
            <OutlinedInput
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </FormControl>
          <br />
          <br />
          <Typography variant="h5" gutterBottom component="div">
            Post:
          </Typography>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Post..."
            style={{ width: 400 }}
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            size="small"
            sx={{
              boxShadow: 1,
              width: 100,
            }}
            onClick={createPost}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CreatePost;
