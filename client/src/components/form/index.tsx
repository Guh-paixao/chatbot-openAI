"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { SendHorizonal } from 'lucide-react';

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
    chat: z
        .string()
        .min(3, {
            message: "Mensagem muito curta.",
        })
        .max(160, {
            message: "Sua mensagem tem muitos caracteres.",
        }),
})

export function TextareaForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            chat: "",
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("Event has been created", {
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        })

        form.reset();
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="chat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ChatBot - TOPICOS ESPECIAIS EM INTELIGENCIA ARTIFICIAL</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Pergunte alguma coisa..."
                                    className="resize-none h-32"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Sua mensagem deve ter entre 3 e 160 caracteres.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="flex w-full text-lg justify-center items-center" type="submit">
                    Enviar
                    <SendHorizonal color="#000" className="size-4" />
                </Button>
            </form>
        </Form>
    )
}
