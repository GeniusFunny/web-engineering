import React, { useState, useEffect } from 'react'
import { Button, withStyles, FormControl, Input, Select, InputLabel, Grid, Typography, MenuItem } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import ajax from '../../api/ajax'
import { throttle } from '../../util'

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
const loginForm = (props) => {
  const { classes, handleLogin } = props
  const [type, setType] = useState('student')
  const [form, setForm] = useState({
    password: '',
    account: '',
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
  function handleClick(e) {
    e.preventDefault()
    handleLogin({...form, role: type})
  }
  return (
    <form className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography align="center" color="textPrimary" variant="h5">Login In</Typography>
        <FormControl>
          <InputLabel html-for="type">Type</InputLabel>
          <Select
            id="type"
            className={classes.selectFiled}
            value={type}
            onChange={e => handleSelectChange(e.target.value)}
          >
            <MenuItem value={'student'}>
              学生
            </MenuItem>
            <MenuItem value={'teacher'}>
              教师
            </MenuItem>
            <MenuItem value={'company'}>
              机构
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel html-for="account">Account</InputLabel>
          <Input id="account" className={classes.textField} value={form.account} onChange={e => handleInputChange(e.target.id, e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel html-for="password">Password</InputLabel>
          <Input id="password" className={classes.textField} type="password" value={form.password} onChange={e => handleInputChange(e.target.id, e.target.value)} />
        </FormControl>
        <br/>
        <Button type="submit" color="primary" onClick={throttle(handleClick)}>Login</Button>
      </Grid>
    </form>
  )
}

export default withRouter(withStyles(styles)(loginForm))
