import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setNameGlobal } from '../store/slice/nameUser.slice'
import { useNavigate } from 'react-router-dom'

const InputHome = () => {

  const { handleSubmit, reset, register, formState:{errors}} = useForm()

  const dispach = useDispatch()

  const navigate = useNavigate()

  const submit = data => {
    dispach(setNameGlobal(data.nameUser)),
      reset({ nameUser: '' })
    navigate('/Pockedex')
  }

  return (
    <>
      <form className='form-home' onSubmit={handleSubmit(submit)}>
        <input className='input-home' autoComplete='off' type="text" placeholder='Your name'
          {...register('nameUser', {
            required: {
              value: true,
              message: 'We need to know your name coach'
            },
            minLength:{
              value:4,
              message:"This doesn't seem to be a coach's name :c"
            }})} />
        <button className='button-home'>Go!</button>
      </form>
      {errors.nameUser && <span className='textError'>{errors.nameUser.message}</span>}

    </>
  )
}

export default InputHome