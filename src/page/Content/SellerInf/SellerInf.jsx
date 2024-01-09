import { useState, forwardRef } from "react";
import {
    Button, Container,
    Typography,
    TextField,
    Box,Stack
} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SellerInf() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [formData, setFormData] = useState({
        title: '',
        release_date: '',
        categories: '',
        price: '',
        banner_url: '',
        desc: '',
        rating: '',
        reviews_count: '',
        developer: '',
        short_desc: '',
        img_urls: '',
        vid_urls: '',
        publisher: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
        // Gửi dữ liệu formData đến server hoặc thực hiện các hành động cần thiết ở đây
        console.log(formData);
        // Đặt logic gửi dữ liệu tới server ở đây

        setFormData({
            title: '',
            release_date: '',
            categories: '',
            price: '',
            banner_url: '',
            desc: '',
            rating: '',
            reviews_count: '',
            developer: '',
            short_desc: '',
            img_urls: '',
            vid_urls: '',
            publisher: ''
        });

    };

    return (
        <Container>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </Stack>
            <Typography variant="h4" align="center" gutterBottom pt={1.5}>
                Add game
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }} >
                    <Box sx={{ width: '70%' }}>

                        {[{ label: 'Title', id: 'title' },
                        { label: 'Category', id: 'categories' },
                        { label: 'Price', id: 'price' },
                        { label: 'Short Description', id: 'short_desc' },
                        { label: 'Description', id: 'desc' },
                        { label: 'Banner Game', id: 'banner_url' },
                        { label: 'Game Image', id: 'img_urls' },
                        { label: 'Video Game', id: 'vid_urls' }].map((Field) => {
                            return (
                                <>
                                    <TextField
                                        key={Field.id}
                                        label={Field.label}
                                        name={Field.id}
                                        value={formData[Field.id]}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                        sx={{
                                            textAlign: 'center',
                                            p: 0
                                        }}
                                    />
                                    <Box sx={{
                                        width: '100%',
                                        height: '15px'
                                    }}></Box>
                                </>)
                        })}

                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button type="submit" variant="outlined"  onClick={handleClick}>
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default SellerInf