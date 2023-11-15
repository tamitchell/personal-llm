import Message from "@/type/Message.type";
import { ChatOllama } from "langchain/chat_models/ollama";
import { AIMessage, HumanMessage } from "langchain/schema";

/* Relays initial "human(?)" prompt to the AI, and returns the AI's response.
*/
async function triggerPrompt(input: string) {
    const msg: Message = {
        type: "human",
        content: input,
        timestamp: Date.now(),
        id: Math.random().toString(36).substring(7),
        model: "llama2"
    }
}