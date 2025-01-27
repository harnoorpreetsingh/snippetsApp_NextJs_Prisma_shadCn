"use server";
import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/ui/DeleteButton";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

type SnippetParamProps = {
  params: Promise<{ id: string }>;
};
const SnippetViewPage = async ({ params }: SnippetParamProps) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) return <h1>Snippet not Found!</h1>;
  return (
    <>
        <div className="flex justify-between items-center">

      <div className="mt-4">
        <h1 className=" text-xl bg-gray-200 p-2 rounded-md">Title: {snippet?.title}</h1>
        {/* <h1 className='bg-gray-200 p-2 rounded-md'>{snippet?.title}</h1> */}
      </div>

      <div className="mt-8 flex  gap-2">
      <Link href={`/snippet/${id}/edit`}>  <Button className="bg-orange-500 hover:bg-orange-600">Edit</Button> </Link>
        {/* <Button onClick={()=>deleteSnippet(id)} className="bg-red-500 hover:bg-red-600">Delete</Button> */}
        <DeleteButton btnText="Delete" id={id}/>
      </div>

      </div>

      <div className="mt-4">
        {/* <h1 className="font-bold text-xl">Snippet Code:</h1> */}
        <h1 className="bg-gray-200 p-2 rounded-md">{snippet?.code}</h1>
      </div>

     
    </>
  );
};

export default SnippetViewPage;
