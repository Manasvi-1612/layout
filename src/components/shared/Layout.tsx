import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="h-[100svh] w-full flex overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <div className="flex-1 overflow-hidden">{children}</div>
            </div>
        </main>
    )
}

export default Layout
