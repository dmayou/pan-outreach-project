import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import AdminNav from '../AdminNav/AdminNav';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class AdminSchools extends Component {
  state = {
    edit: false,
    person: {
      id: 0,
      username: null,
      password: null,
      school_name: null,
      open: false,
      hidden: false,
      active: this.props.active
    }
  }

logState = () => {
  console.log(this.state.person)
}

  //new school handlers
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleName = (event) => {
    this.setState({
      school_name: event.target.value
    })
  }
  handleClick = () => {
    this.props.dispatch({ type: 'POST_PERSON', payload: this.state })
    this.setState({ open: false });
  }
  //switch active handlers
  handleReady = () => {
    this.setState({
      state: {...this.state, active: true}    
    })
    this.handleUpdate()
  }
  //slider handlers
  handleHiddenChange = (event, hidden) => {
    this.setState(state => ({
      hidden,
      // hidden implies !open
      open: hidden ? false : state.open,
    }));
  };

  handleSliderChange = () => {
    this.setState({
      active : false,
    });
  }
 //dialog handlers
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  //handle delete
  deleteSchool = (row) => {
    this.props.dispatch({ type: 'DELETE_PERSON', payload: row.id })
  }
  //edit funcs
  handleChange = (property) => (event) => {
    this.setState ({
        person: {...this.state.person, [property]: event.target.value }
    })
    // console.log(this.state.person);
  }
  handleUpdate = () => {
    this.props.dispatch({
      type: 'UPDATE_PERSON',
      payload: {state: this.state.person}
    })
  }
  editSchool = (row) => {
     console.log('editSchool:', row.id)
     this.setState({
      id : row.id
    })
    this.setState({
      edit: true
      })
  console.log('hit editSchool');
  }

  render() {
    const { hidden } = this.state;
    return (
      this.state.edit ? 
      <Dialog
      open={this.state.edit}
      onClose={this.editSchool}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit School</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit an existing school
                  </DialogContentText>
        {/* Username input for new school */}
        <TextField
          autoFocus
          margin="dense"
          id="newUsername"
          label="Username"
          type="text"
          onChange={this.handleChange('username')}
          value={this.state.username}note
          fullWidth
        />

        {/* password input for new school */}
        <TextField
          autoFocus
          margin="dense"
          id="newPassword"
          label="Password"
          type="password"
          onChange={this.handleChange('password')}
          value={this.state.password}
          fullWidth
        />
        {/* input for new schools name */}
        <TextField
          autoFocus
          margin="dense"
          id="newName"
          label="School Name"
          type="text"
          onChange={this.handleChange('school_name')}
          value={this.state.school_name}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.editSchool} color="primary">
          Cancel
                  </Button>
        <Button onClick={() => this.handleUpdate()}color="primary">
          Submit
                  </Button>
      </DialogActions>
    </Dialog>
      :
      <div>
        <AdminNav />
        <div>
          <h1 className="heading">
            Schools
        </h1>
          <center>
            {/* start add school */}
            <div >
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                Add New School
                        </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Add School</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add a new school
                            </DialogContentText>
                  {/* Username input for new school */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="newUsername"
                    label="Username"
                    type="text"
                    onChange={this.handleUsername}
                    value={this.state.username}
                    fullWidth
                  />

                  {/* password input for new school */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="newPassword"
                    label="Password"
                    type="password"
                    onChange={this.handlePassword}
                    value={this.state.password}
                    fullWidth
                  />
                  {/* input for new schools name */}
                  <TextField
                    autoFocus
                    margin="dense"
                    id="newName"
                    label="School Name"
                    type="text"
                    onChange={this.handleName}
                    value={this.state.school_name}
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                            </Button>
                  <Button onClick={() => this.handleClick()} color="primary">
                    Submit
                            </Button>
                </DialogActions>
              </Dialog>
            </div>
            {/* end add school */}
            <Paper>
              <Table className="adminTable">
                <TableHead>
                  <TableRow>
                    <TableCell>School Name</TableCell>
                    <TableCell>Date Created</TableCell>
                    <TableCell align="center">Active?</TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.reduxStore.personReducer.map((row) => {
                    if (row.admin === false) {
                      return (
                        <TableRow key={row.id}>
                          <TableCell align="left">{row.school_name}</TableCell>
                          <TableCell align="left">{row.creation_date}</TableCell>
                          <TableCell align="left">
                            <Switch
                              id={row.id}
                              checked={row.active}
                              onClick={() => this.handleReady()}
                              value={this.state.active}
                              color="primary"
                            />
                          </TableCell>
                          <TableCell align="left"><Button onClick={() => this.editSchool(row)}>Edit</Button></TableCell>
                          <TableCell align="left"><Button onClick={() => this.deleteSchool(row)}>Delete</Button></TableCell>
                        </TableRow>
                      )
                    }
                  })}
                </TableBody>
              </Table>
            </Paper>
            <button onClick={() => this.logState()}>log state</button>
          </center>
        </div>
      </div>
    )
  }
};

const mapStateToProps = reduxStore => ({
  reduxStore,
});

export default withStyles(styles)(connect(mapStateToProps)(AdminSchools))