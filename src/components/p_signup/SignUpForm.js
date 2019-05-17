import React, { useState, useEffect } from 'react'
import { Button, withStyles, FormControl, Input, Select, InputLabel, Grid, Typography, MenuItem } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    marginTop: `30px`
  },
  textField: {
    width: 400,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  selectFiled: {
    width: 200
  }
})
const SignUpForm = (props) => {
  const { classes } = props
  const [type, setType] = useState(1)
  const [form, setForm] = useState({
    name: '',
    password: '',
    address: '',
    account: ''
  })
  function handleSelectChange(value) {
    setType(value)
  }
  function handleInputChange(key, value) {
    setForm({
      ...form,
      [key]: value
    })
  }
  function handleClick() {
    console.log('click')
  }
  return (
    <form className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography align="center" color="textPrimary" variant="h5">Sign Up</Typography>
        <FormControl>
          <InputLabel html-for="type">Type</InputLabel>
          <Select 
            id="type" 
            className={classes.selectFiled} 
            value={type} 
            onChange={e => handleSelectChange(e.target.value)}
          >
            <MenuItem value={1}>
              学生
            </MenuItem>
            <MenuItem value={2}>
              教师
            </MenuItem>
            <MenuItem value={3}>
              机构
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel html-for="account">Account</InputLabel>
          <Input id="account" className={classes.textField} value={form.account} onChange={e => handleInputChange(e.target.id, e.target.value)}/>
        </FormControl>
        <FormControl>
          <InputLabel html-for="name">Name</InputLabel>
          <Input id="name" className={classes.textField} value={form.name} onChange={e => handleInputChange(e.target.id, e.target.value)}/>
        </FormControl>
        <FormControl>
          <InputLabel html-for="password">Password</InputLabel>
          <Input id="password" className={classes.textField} type="password" value={form.password} onChange={e => handleInputChange(e.target.id, e.target.value)}/>
        </FormControl>
        <FormControl>
          <InputLabel html-for="address">Address</InputLabel>
          <Input id="address" className={classes.textField} value={form.address} onChange={e => handleInputChange(e.target.id, e.target.value)}/>
        </FormControl>
        <br/>
        <Button type="submit" color="primary" onClick={handleClick}>Submit</Button>
      </Grid>
    </form>
  )
}

export default withRouter(withStyles(styles)(SignUpForm))