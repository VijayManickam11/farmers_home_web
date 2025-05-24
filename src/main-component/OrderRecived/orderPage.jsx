import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Button,
  Chip,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';

const allOrders = [
  {
    _id: 'ODR12345',
    date: 'May 20, 2025',
    status: 'Delivered',
    total: 42999,
    product: {
      title: 'HP 15s Ryzen 5 Laptop',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/r/i/i/-original-imagtzccgyxhvbfs.jpeg?q=70',
      quantity: 1,
    },
  },
  {
    _id: 'ODR12346',
    date: 'Apr 10, 2025',
    status: 'Cancelled',
    total: 52999,
    product: {
      title: 'ASUS Vivobook Intel Core i5 Laptop',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/l/q/y/-original-imaguhzqfgykgyxh.jpeg?q=70',
      quantity: 1,
    },
  },
  {
    _id: 'ODR12347',
    date: 'Mar 1, 2025',
    status: 'Delivered',
    total: 59999,
    product: {
      title: 'Lenovo Ideapad Slim 5',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/p/w/-original-imagty9zy7fd3j3x.jpeg?q=70',
      quantity: 1,
    },
  },
];

const statusOptions = ['All', 'Delivered', 'Cancelled'];

const MyOrdersLisiting = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = allOrders.filter((order) => {
    const matchSearch = order.product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      statusFilter === 'All' || order.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <Box p={4}>
      <Typography variant="h5" mb={2}>
        My Orders
      </Typography>

      
      <Grid container spacing={3}>
        {/* ✅ Left Side Filters */}
        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Filter by Status
            </Typography>
            <List>
              {statusOptions.map((status) => (
                <ListItem disablePadding key={status}>
                  <ListItemButton
                    selected={statusFilter === status}
                    onClick={() => setStatusFilter(status)}
                  >
                    <ListItemText primary={status} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* 📦 Orders Listing */}
        <Grid item xs={12} md={9}>
          {/* Search Bar */}
      <Box display="flex" alignItems="center" mb={3} gap={2}>
        <TextField
          label="Search your orders"
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" color="primary" 
        // onClick={handleSearch}
        >
          Search
        </Button>
        <Button variant="outlined" color="secondary" 
        // onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
          {filteredOrders.length === 0 ? (

            <Typography>No orders found.</Typography>
          ) : (
            filteredOrders.map((order) => (
              <Paper
                key={order._id}
                elevation={3}
                sx={{
                  p: 3,
                  mb: 3,
                  borderRadius: 2,
                  transition: '0.3s',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  {/* Image */}
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      src={order.product.image}
                      sx={{ width: 80, height: 80 }}
                    />
                  </Grid>

                  {/* Details */}
                  <Grid item xs={6}>
                    <Typography fontWeight={600}>
                      {order.product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Order ID: {order._id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ordered on: {order.date}
                    </Typography>
                    <Typography variant="body2">
                      Qty: {order.product.quantity}
                    </Typography>
                  </Grid>

                  {/* Price + Status */}
                  <Grid item xs={2}>
                    <Typography fontWeight={600} color="success.main">
                      ₹{order.total}
                    </Typography>
                    <Chip
                      label={order.status}
                      color={order.status === 'Delivered' ? 'success' : 'error'}
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </Grid>

                  {/* View Button */}
                  <Grid item xs={2} textAlign="right">
                    <Button variant="outlined">View Details</Button>
                  </Grid>
                </Grid>
              </Paper>
            ))
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyOrdersLisiting;
