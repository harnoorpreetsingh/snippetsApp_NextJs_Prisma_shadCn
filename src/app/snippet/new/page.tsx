"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import * as actions from "@/actions"

import React, { useActionState } from 'react'

const CreateNewSnippet = () => {
        const [formData, serverAction] = useActionState(actions.createSnippet , {message:""});

  return (
    <>
    <form  action={serverAction}>
    <div>
        <Label>Title</Label>
    <Input type='text' name='title' id='title' />
    </div>
    <div>
        <Label>Code</Label>
    <Textarea name='code' id='code' />
    </div>
    {formData.message && <div className="bg-red-300 border-2 mt-4 p-2 rounded-md border-red-400">{formData.message}</div> }
    <Button type='submit' className='w-full mt-12 bg-green-500' >+Add New</Button>
    </form>
  </>
  )
}

export default CreateNewSnippet;