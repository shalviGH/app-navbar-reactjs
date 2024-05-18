import { Button, Stack } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function Home() {
  return (
    <>
      <h1>view home</h1>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">This is a success Alert.</Alert>

        <Alert severity="info">This is an info Alert.</Alert>

        <Alert
          variant="filled"
          severity="warning"
          action={
            <>
              <Button color="inherit">Update</Button>
              <Button color="inherit">Delete</Button>
            </>
          }
        >
          This is a warning Alert.
        </Alert>

        <Alert variant="filled" severity="error" onClose={() => {}}>
          This is an error Alert.
        </Alert>
      </Stack>
    </>
  );
}
