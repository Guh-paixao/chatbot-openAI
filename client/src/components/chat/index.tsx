import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";

const FormSchema = z.object({
    chat: z
        .string()
        .max(160, { message: "Sua mensagem tem muitos caracteres." }),
});

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "Olá! Como posso ajudar você hoje?", sender: "bot" },
    ]);
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            chat: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const userMessage = { text: data.chat, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: data.chat }),
            });
            const result = await response.json();

            if (result && result.response) {
                setMessages((prev) => [...prev, { text: result.response.replace(/\n/g, "\n"), sender: "bot" }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { text: "Desculpe, ocorreu um erro.", sender: "bot" }]);
            console.error("Erro ao obter resposta do chatbot:", error);
        }
        setLoading(false);
        form.reset();
    }

    return (
        <div className="w-[75vw] mx-auto p-4 flex flex-col h-[75vh]">
            <Card className="flex flex-col flex-grow">
                <CardContent className="flex-grow p-4 overflow-hidden">
                    <ScrollArea className="h-[60vh] space-y-2 overflow-y-auto flex flex-col">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 my-4 rounded-xl max-w-xl text-lg font-medium w-fit whitespace-pre-line ${msg.sender === "user"
                                    ? "bg-blue-500 text-white self-end ml-auto"
                                    : "bg-gray-200 text-gray-800 self-start mr-auto"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="flex space-x-2 self-start mr-auto">
                                <Skeleton className="w-16 h-6 rounded-md" />
                                <Skeleton className="w-24 h-6 rounded-md" />
                                <Skeleton className="w-20 h-6 rounded-md" />
                            </div>
                        )}
                    </ScrollArea>
                </CardContent>
                <div className="p-4 border-t flex flex-col space-y-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                            <FormField
                                control={form.control}
                                name="chat"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ChatBot - Tópicos Especiais em IA</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Pergunte alguma coisa..."
                                                className="resize-none h-24"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full text-lg flex justify-center items-center" type="submit" disabled={loading}>
                                Enviar <SendHorizonal className="size-4" />
                            </Button>
                        </form>
                    </Form>
                </div>
            </Card>
        </div>
    );
}
