import Layout from "@/components/shared/Layout"
import Dashboard from "@/pages/Dashboard"
import ForgetPassword from "@/pages/ForgetPassword"
import ResetPassword from "@/pages/ResetPassword"
import Signin from "@/pages/Signin"
import Signup from "@/pages/Signup"
import VerifyToken from "@/pages/VerifyToken"

const routes = [
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/',
        element: <Signin />
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },

    {
        path: '/verify-token',
        element: <VerifyToken />
    },

    {
        path: '/reset-password',
        element: <ResetPassword />
    },

    {
        path: '/dashboard',
        element: <Layout><Dashboard /></Layout>
    },


]

export { routes }