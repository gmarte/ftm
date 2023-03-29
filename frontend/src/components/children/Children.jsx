import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box, Button, IconButton } from '@material-ui/core';
import { ControlPointDuplicateRounded, Star, Delete } from '@material-ui/icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import './children.css';

const CHILDS_URL = '/api/child/';

const Children = () => {
  const [children, setChildren] = useState([]);
  const { setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    fetchChildren();
  }, []);

  const fetchChildren = async () => {
    try {
      const response = await axiosPrivate.get(CHILDS_URL);
      setChildren(response.data);
    } catch (error) {
      console.error('Error fetching children:', error);
    }
  };

  const handleNewChild = () => {
    // Logic for adding a new child
  };

  const handleDeleteChild = async (childId) => {
    try {
      await axiosPrivate.delete(`${CHILDS_URL}${childId}/`);
      fetchChildren();
    } catch (error) {
      console.error('Error deleting child:', error);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="newChildButton"
        onClick={handleNewChild}
        startIcon={<ControlPointDuplicateRounded />}
      >
        New Child
      </Button>
      <Grid container spacing={4}>
        {children.map((child) => (
          <Grid item key={child.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" component="h2">
                    {child.name}
                  </Typography>
                  <IconButton
                    className="deleteButton"
                    onClick={() => handleDeleteChild(child.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" color="textSecondary">
                    Points:
                  </Typography>
                  <Star color="primary" />
                  <Typography variant="body1">{child.points}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Children;
