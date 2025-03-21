import { Button, Modal, ModalDialog, ModalClose, Typography } from '@mui/joy';

const TimePicker = ({handleStep, handleHorario}) => {

  const handleData = (horario) => {
    handleStep(1)
    handleHorario(horario)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 20}}>
      <div>
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          sx={{ fontWeight: 'lg', mb: 3 }}
        >Selecciona un horario</Typography>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 15, margin: '15px 0', height: '250px'}}>
        <Button
          color="primary"
          onClick={() => handleData('9:00 a.m. a 12:00 p.m.')}
          variant="soft"
        >
          <code>9:00 a.m. a 12:00 p.m.</code>
        </Button>
        <Button
          color="primary"
          onClick={() => handleData('1:00 p.m. a 4:00 p.m.')}
          variant="soft"
        >
          <code>1:00 p.m. a 4:00 p.m.</code>
        </Button>
        <Button
          color="primary"
          onClick={() => handleData('6:00 p.m. a 9:00 p.m.')}
          variant="soft"
        >
          <code>6:00 p.m. a 9:00 p.m.</code>
        </Button>
      </div>
    </div>
  )
}

export default TimePicker
