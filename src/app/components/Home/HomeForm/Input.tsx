import Image from "next/image";
import { ChangeEvent } from "react";

export default function Input({
  placeholder,
  icon,
  alt,
  value,
  type,
  setObject,
}: {
  placeholder: string;
  icon: string;
  alt: string;
  value: string;
  type: string;
  setObject: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <div className="relative">
        <span className="absolute flex inset-y-0 left-0 pl-2">
          <Image priority src={icon} alt={alt} />
        </span>
        <input
          className="bg-special-gray w-[416px] h-[52.39px] rounded-lg pl-8 z-10 border-[1px] border-special-slate focus:outline-none"
          placeholder={placeholder}
          type={type}
          value={value}
          min={0}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setObject(event.target.value)
          }
        />
      </div>
    </>
  );
}
