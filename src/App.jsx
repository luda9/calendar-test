import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Button, Modal, ModalDialog, ModalClose, Typography, Container } from '@mui/joy';
import Navbar from './components/Navbar';

function App() {
  const [ selectedDate, setSelectedDate ] = useState('')
  const [ openModal, setOpenModal ] = useState(false)

  const disabledDates = [
    dayjs('2025-03-22'),
    dayjs('2025-03-15'),
    dayjs('2025-04-01'),
    dayjs('2025-03-25'),
  ];

  // Función para verificar si una fecha está en la lista de deshabilitadas
  const disableSpecificDates = (date) => {
    return disabledDates.some((disabledDate) => disabledDate.isSame(date, 'day'));
  };

  const handleClick = () => {
    window.open(
      `https://wa.me/523312229746?text=Hola👋, Quisiera reservar la siguiente fecha🗓️: ${selectedDate}`,
      '_blank' // Esto abre el enlace en una nueva pestaña o ventana
    );
  };

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            disablePast
            shouldDisableDate={disableSpecificDates}
            sx={{
              '& .Mui-disabled': {
                backgroundColor: '#f0f0f0',
                pointerEvents: 'none',
              },
            }}
            onChange={(date) => setSelectedDate(date.locale('es').format('dddd DD [de] MMMM [del] YYYY'))}
          />
          {selectedDate && (
            <Button
              style={{width: 100, margin: '0 auto'}}
              color="neutral"
              onClick={() => setOpenModal(true)}
              variant="soft"
            >Continue</Button>
          )}
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
          >
            <ModalDialog>
              <ModalClose />
              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                sx={{ fontWeight: 'lg', mb: 1 }}
              >Confirmación</Typography>
              <Typography id="modal-desc" textColor="text.tertiary">
                Quiero apartar la siguiente fecha: <code>{selectedDate}</code>.
              </Typography>
              <Button
                color="danger"
                onClick={handleClick}
                variant="soft"
            >Continue</Button>
            </ModalDialog>
          </Modal>
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default App;
