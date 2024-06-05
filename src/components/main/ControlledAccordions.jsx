import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Register from '../header/avatar/Register.jsx';
// Mock data
const services = [
  {
    id: 1,
    avatar: '/static/images/avatar/1.jpg',
    nickname: 'John Doe',
    serviceName: 'Website Development',
    serviceType: 'Frontend',
    description: 'We offer high-quality frontend development services...',
  },
  {
    id: 2,
    avatar: '/static/images/avatar/2.jpg',
    nickname: 'Jane Smith',
    serviceName: 'API Development',
    serviceType: 'Backend',
    description: 'Professional backend services for scalable APIs...',
  },
  {
    id: 3,
    avatar: '/static/images/avatar/3.jpg',
    nickname: 'Alice Brown',
    serviceName: 'Cloud Deployment',
    serviceType: 'DevOps',
    description: 'Efficient and scalable cloud deployment services...',
  },
];

export default function ControlledAccordions({ isLoggedIn, userType }) {
  const [expanded, setExpanded] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const getButtonLabel = () => {
    if (!isLoggedIn) return 'Contratar servicio';
    if (userType === 'Empleador') return 'Contratar servicio';
    if (userType === 'Profesional') return null;
  };

  return (
    <div>
      {services.map((service, index) => (
        <Accordion
          key={service.id}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
                <Avatar alt={service.nickname} src={service.avatar} sx={{ mb: 1 }} />
                <Typography sx={{ color: 'text.secondary' }}>
                  {service.nickname}
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ flexShrink: 0 }}>
                  {service.serviceName}
                </Typography>
              </Box>
              <Button variant="outlined" sx={{ width: '100px' }}>
                {service.serviceType}
              </Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {service.description}
            </Typography>
            {getButtonLabel() && (
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={!isLoggedIn ? handleDialogOpen : undefined}
              >
                {getButtonLabel()}
              </Button>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}