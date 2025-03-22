import { useState } from 'react'
import 'dayjs/locale/es';
import Navbar from './components/Navbar';
import EventsCalendar from './components/EventsCalendar';
import Confirmation from './components/Confirmation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import { Button, Typography } from '@mui/joy';
import CalendarStepper from './components/CalendarStepper';
import TimePicker from './components/TimePicker';

function App() {
  const [ selectedDate, setSelectedDate ] = useState('')
  const [activeStep, setActiveStep] = useState(0);
  const [horario, setHorario] = useState('');

  const handleHorario = (value) => {
    setHorario(value)
  }

  const handleDaySelection = (value) => {
    setSelectedDate(value)
  }

  const handleClick = () => {
    window.open(
      `https://wa.me/523312229746?text=Hola👋, Quisiera reservar la siguiente fecha🗓️: ${selectedDate}`,
      '_blank' // Esto abre el enlace en una nueva pestaña o ventana
    );
  };

  const handleStep = (value) => {
    if (value) {
      setActiveStep(activeStep + 1)
    } else {
      setActiveStep(activeStep - 1)
      setSelectedDate('')
    }

  }

  let view;

  switch (activeStep) {
    case 0:
        view = <EventsCalendar handleDaySelection={handleDaySelection} />
      break;
    case 1:
      view = <TimePicker handleStep={handleStep} handleHorario={handleHorario} />
      break;
    case 2:
      view = <Confirmation handleClick={handleClick} selectedDate={selectedDate} horario={horario}/>
      break;

    default:
      break;
  }

  const handleBackIcon = () => {
    setActiveStep(activeStep - 1)
    if(activeStep == 1) {
      setSelectedDate('')
    }
  }


  return (
    <div
      style={{width: '100vw', display: 'flex', flexDirection: 'column', alignContent: 'center', height: '100vh' }}
    >
      <Navbar />
      <div
        style={{width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        {activeStep !== 0 && (
          <ArrowBackIcon
            onClick={handleBackIcon}
            sx={{alignSelf: 'start', padding: '10px 20px', position: 'absolute', top:70}}
          />
        )}
        <Typography
          component="h1"
          id="modal-title"
          level="h1"
          textColor="inherit"
          sx={{ fontWeight: 'lg', mb: 3, textAlign: 'center' }}
        >Eventos</Typography>
        <CalendarStepper activeStep={activeStep} />
        {view}
        {selectedDate && activeStep == 0 ? (
          <Button
            sx={{
              width: 100,
              margin: "0 auto",
              backgroundColor: "#ffddcf",
              color: '#000',
              "&:hover": {
                backgroundColor: "#ffddcf",
              },
              "&:focus": {
                outline: "4px auto #fd6a30",
              },
            }}
            onClick={() => handleStep(1)}
            variant="soft"
          >Continuar</Button>
        ) : ''}
      </div>
    </div>
  );
}

export default App;
