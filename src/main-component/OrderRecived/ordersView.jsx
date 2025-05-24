import React, { Fragment } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Button,
  Avatar,
  Rating,
} from '@mui/material';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Logo from '../../images/logo.svg'
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";


const SingleOrderView = () => {
  const order = {
    productName: 'Spikes All Round Performance Cricket Shoes For Men',
    image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/i/y/n/-original-imagp7snjz6xgg4w.jpeg',
    priceDetails: {
      listPrice: 2699,
      sellingPrice: 2199,
      deliveryCharge: 'Free',
      handlingFee: 70,
      platformFee: 42,
      discountNote: 'Get extra 15% off (₹200 on 50 items)',
      totalAmount: 2199,
    },
    delivery: {
      confirmedDate: 'Apr 20',
      packedDate: 'Apr 23',
      deliveredDate: 'May 5',
    },
    shippingAddress: {
      name: 'Vijay',
      address: '122, Appusamy Layout Rd, Red Fields, Race Course, Coimbatore',
      pincode: '641045',
      phone: '9080128932',
    },
    rating: 5,
    issues: [
      'Delivery delayed by 3 days',
      'Invoice was not available on time',
    ],
  };

  return (
    <Fragment>
                <HeaderTop/>
                <Navbar hclass={'wpo-site-header'} Logo={Logo} />
                <PageTitle pageTitle={'Order-Details'} pagesub={'Order-Details'} />
    <Box p={3}>
      <Grid container spacing={2}>
        {/* Left - Product Info */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    src={order.image}
                    variant="square"
                    sx={{ width: 100, height: 100 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">{order.productName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{order.priceDetails.sellingPrice.toLocaleString()}
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Timeline */}
              <Box>
                <Typography variant="subtitle1">Delivery Timeline</Typography>
                <Typography>Order Confirmed: {order.delivery.confirmedDate}</Typography>
                <Typography>Packed: {order.delivery.packedDate}</Typography>
                <Typography>Delivered: {order.delivery.deliveredDate}</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Rating */}
              <Box>
                <Typography variant="subtitle1">Your Rating</Typography>
                <Rating value={order.rating} readOnly />
                <Button variant="outlined" sx={{ mt: 1 }}>
                  Add Review
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Bottom - Recent Issues */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Recent Issues with this Order
              </Typography>
              {order.issues.length > 0 ? (
                <ul style={{ marginLeft: 16 }}>
                  {order.issues.map((issue, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{issue}</Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No issues reported for this order.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Right - Price and Address */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Shipping Details
              </Typography>
              <Typography variant="body2">{order.shippingAddress.name}</Typography>
              <Typography variant="body2">{order.shippingAddress.address}</Typography>
              <Typography variant="body2">
                Tamil Nadu - {order.shippingAddress.pincode}
              </Typography>
              <Typography variant="body2">
                Phone: {order.shippingAddress.phone}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1">Price Details</Typography>
              <Box display="flex" justifyContent="space-between">
                <Typography>List Price</Typography>
                <Typography>₹{order.priceDetails.listPrice}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Selling Price</Typography>
                <Typography>₹{order.priceDetails.sellingPrice}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Delivery</Typography>
                <Typography>{order.priceDetails.deliveryCharge}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Handling Fee</Typography>
                <Typography>₹{order.priceDetails.handlingFee}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography>Platform Fee</Typography>
                <Typography>₹{order.priceDetails.platformFee}</Typography>
              </Box>

              <Typography variant="body2" color="green" sx={{ mt: 1 }}>
                {order.priceDetails.discountNote}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Total Amount</Typography>
                <Typography variant="h6">
                  ₹{order.priceDetails.totalAmount}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    <Scrollbar/>
    </Fragment>
  );
};

export default SingleOrderView;
