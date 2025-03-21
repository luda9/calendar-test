import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import dayjs from 'dayjs';

const EventsCalendar = ({handleDaySelection}) => {

  const disabledDates = [
    dayjs('2025-03-22'),
    dayjs('2025-03-15'),
    dayjs('2025-04-01'),
    dayjs('2025-03-25'),
  ];

  const disableSpecificDates = (date) => {
    return disabledDates.some((disabledDate) => disabledDate.isSame(date, 'day'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disablePast
        shouldDisableDate={disableSpecificDates}
        sx={{
          '& .Mui-disabled': {
            backgroundColor: '#f0f0f0',
            pointerEvents: 'none',
          },
          '& .MuiPickersDay-root:hover': {
            backgroundColor: '#ffddcf',
          },
          '& .MuiPickersDay-root:focus': {
            backgroundColor: '#ffddcf',
            outline: '4px auto #fd6a30'
          },
          '& .Mui-selected': {
            backgroundColor: '#fd6a30 !important',
          },
          '& .Mui-selected:focus': {
            outline: '4px auto #fd6a30'
          },
        }}
        onChange={(date) => handleDaySelection(date.locale('es').format('dddd DD [de] MMMM [del] YYYY'))}
      />
    </LocalizationProvider>
  )
}

export default EventsCalendar
