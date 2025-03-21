import { Button, Typography } from '@mui/joy';

const Confirmation = ({ handleClick, selectedDate, horario}) => {

  console.log(horario)

  return (
    <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 20}}
    >
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          sx={{ fontWeight: 'lg', mb: 3 }}
        >Confirmación</Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          Quiero apartar la siguiente fecha y horario:
        </Typography>
        <div style={{margin: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <code style={{ margin: '10px 0', fontSize: 16}}>{selectedDate}</code>
          <code style={{ margin: '10px 0', fontSize: 16}}>{horario}</code>
        </div>

        <Button
          onClick={handleClick}
          variant="soft"
          sx={{
            backgroundColor: "#fd6a30",
            color: '#fff',
            "&:hover": {
              backgroundColor: "#fd6a30",
            },
            "&:focus": {
              outline: "4px auto #ffddcf",
            },
            "&:focus-visible": {
              outline: "4px auto #ffddcf",
            },
            "&:active": {
              backgroundColor: "#ffddcf",
            },
          }}
      >Confirmar</Button>
    </div>
  )
}

export default Confirmation
