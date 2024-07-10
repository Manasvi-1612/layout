
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import SearchBox from "./SearchBox"
import { Bars3Icon, BellIcon } from "@heroicons/react/16/solid"

const Header = () => {
    return (
        <section className="flex items-center justify-between p-2 shadow-sm">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center justify-center gap-2">
                <SearchBox />

                <Separator orientation={'vertical'} className="border border-gray-300 mx-2 h-10" />

                <Button variant={'outline'} size={'icon'}>
                    <BellIcon className="size-4" />
                </Button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>


        </section>
    )
}

export default Header
