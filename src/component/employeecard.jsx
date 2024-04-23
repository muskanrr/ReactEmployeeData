import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ForestIcon from '@mui/icons-material/Forest';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function MediaCard({employee}) { 
  console.log(employee[0]);
  return (
    <Card sx={{ maxWidth: 345, margin: 10, padding: 2}}>
      <Box sx={{ textAllign: "center"}}>
      <CardMedia
        sx={{ height: 200 , backgroundSize:"contain",  Margin: "1", justifyContext: "Center"}}
        image={employee[0].image}
        title="profile"/>
     </Box>

      <CardContent>
        <ForestIcon/>
        <Typography gutterBottom variant="h5" component="div">
          {employee[0].firstName} {employee[0].lastName}
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee[0].department } 
        </Typography>
        <Typography variant="body2" color="text.secondary"> 
          {employee[0].position}
        </Typography>
      </CardContent>
      <Stack direction="row" spacing={1}>
      <Chip label="Active" />
      <Chip label="Hours = 20" variant="outlined" />
    </Stack>
      <CardActions>
      </CardActions>
    </Card>
  );
}



