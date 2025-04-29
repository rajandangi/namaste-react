import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const MemoExample = () => {
    const [memoInput, setMemoInput] = useState(0);
    const [theme, setTheme] = useState("light");

    console.log("MemoExample Rendered");

    // Calculate prime directly on every render
    console.log("Calculating prime number for:", memoInput);
    // const prime = findNthPrime(memoInput); 

    const prime = useMemo(()=> {
        return findNthPrime(memoInput)
    }, [memoInput]);
    
    return (
        <div className={`border border-gray-600 p-10 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <h1 className="font-bold text-center">Use Memo Example Box</h1>
            <button
                className="bg-green-200 border-none py-2 px-4 rounded-lg cursor-pointer text-custom-gray-300 hover:bg-green-300 text-[1.1rem] font-semibold"
                onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}
            >
                Toggle Theme
            </button>
            <input
                className={`w-full border border-gray-300 rounded-lg p-2 mt-4 mb-4 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"}`}
                type="number" value={memoInput} onChange={(e) => {
                    setMemoInput(e.target.value);
                }} />
            <p>
                The {memoInput}th prime number is {memoInput ? prime : "?"}
            </p>
        </div>
    )
}

export default MemoExample