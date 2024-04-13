import CheckboxInput from "./components/CheckboxInput";
import Button from "./components/Button";



export default function Home() {
  return (
    <div className="bg-white max-w-[370px] p-5 mx-auto shadow-custom-dark border mt-[85px] rounded-md ">
      <CheckboxInput id="all-pages" label="All pages" />
      <hr className="w-full border-custom border-custom-gray py-2.5 px-3.5 mt-2.5"></hr>
      <CheckboxInput id="page-1" label="Page 1" />
      <CheckboxInput id="page-2" label="Page 2" />
      <CheckboxInput id="page-3" label="Page 3" />
      <CheckboxInput id="page-4" label="Page 4" />
      <hr className="py-3"></hr>
      <Button text="Done" />
    </div>
  );
}
