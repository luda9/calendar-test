import { useState } from 'react'
import 'dayjs/locale/es';
import Navbar from './components/Navbar';
import EventsCalendar from './components/EventsCalendar';
import Confirmation from './components/Confirmation';

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


  return (
    <div
      style={{width: '100vw', display: 'flex', flexDirection: 'column', alignContent: 'center', height: '100vh' }}
    >
      <Navbar />
      <div
        style={{width: '100%', display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Typography
          component="h1"
          id="modal-title"
          level="h1"
          textColor="inherit"
          sx={{ fontWeight: 'lg', mb: 3, textAlign: 'center' }}
        >Eventos</Typography>
        <CalendarStepper activeStep={activeStep} />
        {view}
        {selectedDate && activeStep !== 2 ? (
          <Button
            sx={{
              width: 100,
              margin: "0 auto",
              backgroundColor: activeStep == 0 ? "#ffddcf" : '#dfdfdf',
              "&:hover": {
                backgroundColor: activeStep == 0 ? "#ffddcf" : '#dfdfdf',
              },
              "&:focus": {
                outline: "4px auto #fd6a30",
              },
            }}
            onClick={() => activeStep == 0 ? handleStep(1) : handleStep(0)}
            variant="soft"
          >{activeStep == 0 ? 'Continue' : 'Atrás'}</Button>
        ) : ''}
      </div>
    </div>
  );
}

export default App;
