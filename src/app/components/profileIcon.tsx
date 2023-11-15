/* A rounded square icon that represents who is speaking, taking the first character and the last character of the name
*/
export default function ProfileIcon({ name }: { name: string }): JSX.Element {
    return <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
        <span>{name[0]}{name[name.length - 1]}</span>
    </div>
}
