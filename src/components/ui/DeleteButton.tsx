"use client";
import React from 'react'
import { Button } from './button';
import { deleteSnippet } from '@/actions';

type Props = {
    id: number;
    btnText:string;
}

const DeleteButton = ({id,btnText}: Props) => {
  return (
    <Button onClick={()=>{
        deleteSnippet(id);
    }}>
        {btnText}
    </Button>
  )
}

export default DeleteButton