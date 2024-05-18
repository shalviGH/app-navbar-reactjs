import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function BluuCard() {
  return (
    <Card
      sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="one description"
        />

        <CardContent>
          <Typography variant="h4"> CardTitle</Typography>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            aliquid aspernatur vel explicabo doloremque eum necessitatibus
            veniam, a incidunt dignissimos quas facilis sequi mollitia error
            fugiat praesentium ratione ipsum quis.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button variant="contained">Add</Button>
        <Button variant="contained" color="error">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
