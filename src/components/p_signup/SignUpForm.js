import React, { useState, useEffect } from 'react'
import { Button, withStyles, FormControl, Input, Select, InputLabel, Grid, Typography, MenuItem } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
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
const SignUpForm = (props) => {
  const { classes, handleSubmit } = props
  const [type, setType] = useState('student')
  const [form, setForm] = useState({
    name: '',
    password: '',
    address: '',
    account: '',
    school: '',
    email: ''
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
    const formData = {
      ...form,
      type
    }
    if (type === 'teacher') {
      delete form.school
    } else if (type === 'company') {
      delete form.address
      delete form.school
    }
    handleSubmit(formData)
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
          <InputLabel html-for="name">Name</InputLabel>
          <Input id="name" className={classes.textField} value={form.name} onChange={e => handleInputChange(e.target.id, e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel html-for="password">Password</InputLabel>
          <Input id="password" className={classes.textField} type="password" value={form.password} onChange={e => handleInputChange(e.target.id, e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel html-for="email">Email</InputLabel>
          <Input id="email" className={classes.textField} value={form.email} onChange={e => handleInputChange(e.target.id, e.target.value)} />
        </FormControl>
        {
          (type === 'student' || type === 'teacher') && (<FormControl>
            <InputLabel html-for="address">Address</InputLabel>
            <Input id="address" className={classes.textField} value={form.address} onChange={e => handleInputChange(e.target.id, e.target.value)} />
          </FormControl>)
        }
        {
          type === 'student' && (<FormControl>
            <InputLabel html-for="school">School</InputLabel>
            <Input id="school" className={classes.textField} value={form.school} onChange={e => handleInputChange(e.target.id, e.target.value)} />
          </FormControl>)
        }
        <br />
        <Button type="submit" color="primary" onClick={throttle(handleClick)}>Sign Up</Button>
      </Grid>
    </form>
  )
}

export default withRouter(withStyles(styles)(SignUpForm))
