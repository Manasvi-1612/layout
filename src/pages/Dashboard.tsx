import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import TableComponent from "@/components/shared/TableComponent"

// const tabs = [
//     'Bidding',
//     'Applied',
//     'Allot',
//     'Rejected'
// ]

const Dashboard = () => {

    return (
        <section>
            <div>
                <Pagination>
                    <PaginationContent className="ml-auto">
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>


                <Tabs defaultValue="bidding">
                    <TabsList className="space-x-1 mx-2">
                        <TabsTrigger value="bidding">Bidding</TabsTrigger>
                        <TabsTrigger value="applied">Applied</TabsTrigger>
                        <TabsTrigger value="allot">Allot</TabsTrigger>
                        <TabsTrigger value="rejected">Rejected</TabsTrigger>
                    </TabsList>
                    <TabsContent value="bidding">
                        <TableComponent />
                    </TabsContent>
                    <TabsContent value="applied">
                        {/* <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card> */}
                    </TabsContent>
                    <TabsContent value="allot">


                    </TabsContent>
                    <TabsContent value="rejected">


                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Dashboard
