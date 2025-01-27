import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

const CreateNewSnippet = () => {

    async function createSnippet(formData:FormData) {
        "use server"  //use server directive 
        const title = formData.get("title")  as string;
        const code = formData.get("code")  as string;

        const snippet = await prisma.snippet.create({
            data:{
                title,
                code,
            }
        })
        console.log(snippet,"Created Snippet")
        redirect("/")
    }

  return (
    <>
    <form  action={createSnippet}>
    <div>
        <Label>Title</Label>
    <Input type='text' name='title' id='title' />
    </div>
    <div>
        <Label>Code</Label>
    <Textarea name='code' id='code' />
    </div>
    <Button type='submit' className='w-full mt-12 bg-green-500' >+Add New</Button>
    </form>
  </>
  )
}

export default CreateNewSnippet;