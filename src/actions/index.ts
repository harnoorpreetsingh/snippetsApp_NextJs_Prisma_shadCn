//contains server actions meant to be used inside client components
"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippet.update({
        where: {
            id
        },
        data: {
            code
        }
    });

    redirect(`/snippet/${id}`);
}


export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id
        },

    });

    redirect(`/`);
}


export async function createSnippet(prevState: { message: string }, formData: FormData) {
    const title = formData.get("title");
    const code = formData.get("code");
    if (typeof title !== "string" || title.length<4) {
        return { message: "Title is required & must be longer." }
    }
    if (typeof code !== "string" || code.length<8) {
        return { message: "Code is required & must be longer." }
    }

    const snippet = await prisma.snippet.create({
        data: {
            title,
            code,
        }
    })
    console.log(snippet, "Created Snippet")
    redirect("/")
}