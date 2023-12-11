import Input from "./components/input";
import ReactQuillCustom from "./components/reactquill";

export default function Form() {
    return (
        <div className="h-screen w-11/12 mx-auto">
            <Input/>
            <ReactQuillCustom/>
        </div>
    )
}