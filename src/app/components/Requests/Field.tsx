export default function Field({
  field,
  info,
}: {
  field: string;
  info: string;
}) {
  return (
    <>
      <div className="border p-2 bg-gray-100 rounded-lg">
        <span className="opacity-40">
          {field} : {info}
        </span>
      </div>
    </>
  );
}
