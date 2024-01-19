export default interface FormData {
  placeholder?: string;
  icon: string;
  alt: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  type?: string;
}
