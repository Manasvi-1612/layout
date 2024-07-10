import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Input } from "../ui/input";


const SearchBox = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden rounded-lg bg-grey-50 px-4 border border-gray-300 focus-within:bg-gray-100">
            <MagnifyingGlassIcon className="size-5 " />
            <Input
                type="text"
                className="border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-gray-100"
            />
        </div>
    )
}

export default SearchBox
