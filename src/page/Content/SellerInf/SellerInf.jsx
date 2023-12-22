import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
    Button, Container,
    Typography,
    Grid,
    TextField
} from "@mui/material";
const useStyles = styled((theme) => ({
    form: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
}));

function SellerInf() {
    const classes = useStyles();
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
        // Gửi dữ liệu formData đến server hoặc thực hiện các hành động cần thiết ở đây
        console.log(formData);
        // Đặt logic gửi dữ liệu tới server ở đây
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Form
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>

                        {[{ label: 'Title', id: 'title' },
                        { label: 'Category', id: 'categories' },
                        { label: 'Price', id: 'price' },
                        { label: 'Short Description', id: 'short-desc' },
                        { label: 'Description', id: 'desc' },
                        { label: 'Banner Game', id: 'banner_url' },
                        { label: 'Game Image', id: 'img_urls' },
                        { label: 'Video Game', id: 'vid_urls' }].map((Field) => {
                            <TextField
                                key={Field.id}
                                className={classes.textField}
                                label= {Field.label}
                                name={Field.id}
                                value={formData[Field.id]}
                                onChange={handleChange}
                                fullWidth
                                required
                                pt = {2}
                            />
                        })}

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* Grid item còn lại cho các trường dữ liệu khác */}
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    Gửi
                </Button>
            </form>
        </Container>
    )
}

export default SellerInf