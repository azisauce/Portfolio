import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

function Experience() {
    return (
      <div className="flex flex-col h-screen">
        <h1>Experience</h1>
        <div className="flex flex-row items-center justify-start">
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi sint inventore magnam quae veritatis consequatur, repellendus tempore, ea unde, iure vero neque reiciendis voluptatibus repellat! Assumenda odio sed culpa.</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        </div>
      </div>
    )
  }
  
  export default Experience