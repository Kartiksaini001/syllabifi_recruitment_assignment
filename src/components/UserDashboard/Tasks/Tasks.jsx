import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  ListItem,
} from "@material-ui/core";
import { VpnKeyRounded, InfoRounded } from "@material-ui/icons";
import useStyles from "./styles";

const Tasks = () => {
  const classes = useStyles();
  const date = "FRIDAY : 22nd March, 2021";
  

  const TooltipTitle = ({ topics }) => {
    return (
      <div>
        <Typography variant="body2">Topics :</Typography>
        {topics.map((topic) => (
          <ListItem>
            <li>{topic}</li>
          </ListItem>
        ))}
      </div>
    );
  };

  const AssignmentName = ({ id, subject, exam, topics }) => {
    return (
      <Grid container spacing={3} alignItems="center" direction="row">
        <Grid item xs={1}>
          <VpnKeyRounded color="secondary" />
        </Grid>
        <Grid container item xs={11} direction="column">
          <Grid item>{`Assignment #${id}`}</Grid>
          <Grid container item spacing={1} direction="row" alignItems="center">
            <Grid item>{subject}</Grid>
            <Grid item>{exam}</Grid>
            <Grid item>
              <Tooltip
                arrow
                placement="top-start"
                title={<TooltipTitle topics={topics} />}
              >
                <InfoRounded />
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  const AssignmentCost = ({ cost, questions }) => {
    return <div>Cost</div>;
  };
  const AssignmentTag = ({ tag, percent, rejected }) => {
    return <div>Tag</div>;
  };
  const AssignmentLink = ({ link }) => {
    return (
      <div>
        <Button
          color="primary"
          variant="outlined"
          href={link}
          className={classes.assignmentBtn}
        >
          Continue
        </Button>
      </div>
    );
  };

  const rows = [
    {
      name: (
        <AssignmentName
          id={1}
          subject="Physics"
          exam="(IITJEE)"
          tooltip={<Tooltip />}
          topics={["Weights & Measurement", "Mass, Matter", "Physical State"]}
        />
      ),
      cost: <AssignmentCost cost={25} questions={15} />,
      tag: <AssignmentTag tag="completed" percent="100" rejected="0" />,
      link: <AssignmentLink link="/" />,
    },
    {
      name: (
        <AssignmentName
          id={1}
          subject="Physics"
          exam="(IITJEE)"
          tooltip={<Tooltip />}
          topics={["Weights & Measurement", "Mass, Matter", "Physical State"]}
        />
      ),
      cost: <AssignmentCost cost={25} questions={15} />,
      tag: <AssignmentTag tag="completed" percent="100" rejected="0" />,
      link: <AssignmentLink link="/" />,
    },
    {
      name: (
        <AssignmentName
          id={1}
          subject="Physics"
          exam="(IITJEE)"
          tooltip={<Tooltip />}
          topics={["Weights & Measurement", "Mass, Matter", "Physical State"]}
        />
      ),
      cost: <AssignmentCost cost={25} questions={15} />,
      tag: <AssignmentTag tag="completed" percent="100" rejected="0" />,
      link: <AssignmentLink link="/" />,
    },
    {
      name: (
        <AssignmentName
          id={1}
          subject="Physics"
          exam="(IITJEE)"
          tooltip={<Tooltip />}
          topics={["Weights & Measurement", "Mass, Matter", "Physical State"]}
        />
      ),
      cost: <AssignmentCost cost={25} questions={15} />,
      tag: <AssignmentTag tag="completed" percent="100" rejected="0" />,
      link: <AssignmentLink link="/" />,
    },
    {
      name: (
        <AssignmentName
          id={1}
          subject="Physics"
          exam="(IITJEE)"
          tooltip={<Tooltip />}
          topics={["Weights & Measurement", "Mass, Matter", "Physical State"]}
        />
      ),
      cost: <AssignmentCost cost={25} questions={15} />,
      tag: <AssignmentTag tag="completed" percent="100" rejected="0" />,
      link: <AssignmentLink link="/" />,
    },
    {
      name: (
        <AssignmentName
          id={1}
          subject="Physics"
          exam="(IITJEE)"
          tooltip={<Tooltip />}
          topics={["Weights & Measurement", "Mass, Matter", "Physical State"]}
        />
      ),
      cost: <AssignmentCost cost={25} questions={15} />,
      tag: <AssignmentTag tag="completed" percent="100" rejected="0" />,
      link: <AssignmentLink link="/" />,
    },
  ];

  return (
    <Grid item xs={12}>
      <Paper className={classes.tasksWrapper}>
        <Typography variant="h6">
          Complete tasks to start at Syllabify!
        </Typography>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              Select one to proceed
            </Typography>
          </Grid>
          <Grid item>
            <Button color="primary">View All</Button>
          </Grid>
        </Grid>
        <Divider />
        <Typography
          variant="body1"
          color="textSecondary"
          className={classes.taskDate}
        >
          {date}
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableBody>
              {rows.map(({ name, cost, tag, link }) => (
                <TableRow key={link} className={classes.tableRow}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{cost}</TableCell>
                  <TableCell>{tag}</TableCell>
                  <TableCell align="right">{link}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};

export default Tasks;
