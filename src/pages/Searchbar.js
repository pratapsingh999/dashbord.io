import { Container } from '@mui/material'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'



function Searchbar() {
    const [search , setSearch] =useState('')
    console.log(search);
  return (
   <>
    <div>
        <Container>
            <h1>Detailes</h1>
            <form>
                <InputGroup>
                    <Form.Control onChange={(e) =>setSearch(e.target.value)} placeholder="search id"/>
                </InputGroup>
            </form>
        </Container>
    </div>
   </>
  )
}

export default Searchbar;