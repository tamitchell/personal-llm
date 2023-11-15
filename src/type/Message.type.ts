/*
* Defines the message structure that will be sent to the AI model
*/

type Message = {
    id: string;
    /* The relayer of the message */
    type: "human" | "ai";
    /* The timestamp of the message */
    timestamp: number;
    /* The message content */
    content: string;
    /* The name of the LLM used */
    model: string;
}

export default Message;