import ProfileIcon from "./profileIcon"

/* the display container that provides a response to the user provided input
*/
export default function Response({ modelName, response }: { response: string, modelName: string }): JSX.Element {
    return <div className="flex flex-col items-center justify-center w-full h-full">
        <ProfileIcon name={modelName} />
        <p>{response}</p>
    </div>
}