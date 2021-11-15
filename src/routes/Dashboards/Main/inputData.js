import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createCoreData } from '../../../graphql/mutations';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function DataInput() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [stage, setStage] = useState('');

  const handleChange = event => {
    setStage(event.target.value);
  };

  const handleSubmit = () => {
    putData();
  };

  const putData = async () => {
    const input = {
      name: name,
      address: address,
      email: email,
      type: type,
      Stage: stage,
    };

    console.log(input);

    await API.graphql(graphqlOperation(createCoreData, { input }));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" onChange={event => setName(event.target.value)} defaultValue={name} />{' '}
      <br />
      <TextField
        id="standard-basic"
        label="address"
        onChange={event => setAddress(event.target.value)}
        defaultValue={address}
      />
      <br />
      <TextField id="standard-basic" label="Email" onChange={event => setType(event.target.value)} defaultValue={type} />
      <br />
      <TextField id="standard-basic" label="type" onChange={event => setEmail(event.target.value)} defaultValue={email} />
      <br />
      <InputLabel id="demo-simple-select-label">STAGE</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={stage} onChange={handleChange}>
        <br />
        <MenuItem value={'starting'}>Starting</MenuItem>
        <MenuItem value={'inProgress'}>IN PROGRESS</MenuItem>
        <MenuItem value={'done'}>DONE </MenuItem>
      </Select>
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Create
      </Button>
    </form>
  );
}
