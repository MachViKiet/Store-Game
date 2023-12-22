import { useState } from 'react';
import { Typography, TextField, Button, Snackbar, Box } from '@mui/material';
import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: theme.spacing(4),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gửi dữ liệu thông tin liên hệ đến server (ở đây chỉ giả định gửi thành công)
    // Thực tế, bạn cần viết logic gửi dữ liệu thông tin liên hệ đến server của bạn

    // Sau khi gửi thành công, hiển thị thông báo
    setSnackbarOpen(true);

    // Reset các trường sau khi gửi thành công
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pt: 5
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: '500px'
      }}>

        <Typography variant='h4' sx={{
          width: '100%',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          CONTACT FORM
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Họ và tên"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
            type="email"
          />
          <TextField
            label="Phone"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            fullWidth
            margin="normal"
            type="Phone"
          />
          <TextField
            label="Tin nhắn"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                bgcolor: "#72728a",
                width: '100%',
                px: 2,
                py: 1,
                maxWidth: '150px'
              }}
              className={classes.submitButton}
            >
              Submit
            </Button>
          </Box>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message="Phản hồi đã được gửi đi!"
          />
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
