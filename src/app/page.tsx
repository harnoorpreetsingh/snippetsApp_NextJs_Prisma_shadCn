import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
export default async function Home() {

  const snippets = await prisma.snippet.findMany();
  console.log(snippets)
  return (
    <div className="">
      <div className="flex justify-between items-center ">
    <h1>Snippets</h1>
     <Link href={"/snippet/new"}> <Button>New</Button></Link>
      </div>

    {snippets.map((e)=>{
      return(
        <div key={e.id} className="flex justify-between bg-gray-200 hover:bg-gray-300 rounded-md mt-4 p-2 items-center">
          
          <h1>{e.title}</h1>
          
          {/* <Link href={`/e/${e.id}`}> <Button>View</Button> </Link> */}
          <Link href={`/snippet/${e.id}`}> <Button>View</Button> </Link>
        </div>
      )
    })}

    </div>
  );
}
