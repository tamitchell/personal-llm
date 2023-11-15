import { ChatOllama } from "langchain/chat_models/ollama";
import Form from './components/form'
import { useEffect, useState } from "react";
import Message from "@/type/Message.type";
import { AIMessage, HumanMessage } from "langchain/schema";

export default function Home() {
  const [ollama, setOllama] = useState<ChatOllama>();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    //Set Ollama to a new instance of the ChatOllama class
    setOllama(new ChatOllama({
      baseUrl: "http://localhost:11434",
      model: "llama2", //will change
    }));
  }, []);


/* Relays initial "human(?)" prompt to the AI, and returns the AI's response.
*/
  async function triggerPrompt(input: string) {
  if(!ollama) throw new Error("Ollama not initialized");
  //Initialize the object that will be sent to the AI
  const msg: Message = {
      type: "human",
      content: input,
      timestamp: Date.now(),
      id: Math.random().toString(36).substring(7),
      model: "llama2"
  }

    //Adds the message to the messages array
    messages.push(msg);

    //Maps over each message and in depending on the message type, transforms it into a human or ai message.
    //These messages are then sent to the AI model.
    const stream = await ollama.stream(messages.map((m) => m.type === "human" ? new HumanMessage(m.content) : new AIMessage(m.content)));

    //
}
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="capitalize text-white font-medium text-lg">How to get started </h1>

      {/**
       * Adjust form style to be a dark color with an inner shadow that has a light color border like an off grey
       */}
      <Form className='flex items-center justify-between w-1/2' />
    </main>
  )
}
