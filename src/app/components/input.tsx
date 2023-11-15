
export default function Input({defaultValue, className}: {defaultValue: string, className?: string}): JSX.Element {
  return <input className={className} placeholder={defaultValue} value="" type="text" />;
}