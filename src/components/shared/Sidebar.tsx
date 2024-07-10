import { LayoutGrid, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { Bars3Icon } from "@heroicons/react/16/solid"
import { Separator } from "@/components/ui/separator"


export function Sidebar() {
    return (
        <div className="w-56 relative flex flex-col bg-gradient-to-br bg-gray-100">
            <div className="space-y-4 px-4 py-4">

                <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center justify-center gap-2">
                        <img src={'/assets/logo.svg'} alt="logo" width={32} />
                        <h3 className="text-xl font-medium">Logo</h3>
                    </div>
                    <Button variant={'outline'} className="bg-transparent border-gray-600" size={'icon'}>
                        <Bars3Icon className="size-4" />
                    </Button>
                </div>

                <div className="space-y-1">
                    <h2 className="text-sm font-semibold tracking-tight text-gray-600">
                        Lorem
                    </h2>
                    <div>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LayoutGrid className="mr-2 h-4 w-4 text-gray-500" />
                            Browse
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LayoutGrid className="mr-2 h-4 w-4 text-gray-500" />
                            Browse
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LayoutGrid className="mr-2 h-4 w-4 text-gray-500" />
                            Browse
                        </Button>
                    </div>
                </div>

                <Separator className="border-[3/4px] border-gray-400" />

                <div className="space-y-1">
                    <h2 className="text-sm font-semibold tracking-tight text-gray-800">
                        Lorem
                    </h2>
                    <div>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LayoutGrid className="mr-2 h-4 w-4 text-gray-500" />
                            Browse
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LayoutGrid className="mr-2 h-4 w-4 text-gray-500" />
                            Browse
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LayoutGrid className="mr-2 h-4 w-4 text-gray-500" />
                            Browse
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-auto p-4">
                <Button variant={'default'} className="text-red-600 bg-transparent hover:bg-transparent">
                    <LogOut />
                    Logout
                </Button>
            </div>
        </div >
    )
}

export default Sidebar