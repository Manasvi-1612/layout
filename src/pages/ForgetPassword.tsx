import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'

const ForgetPassword = () => {

    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 ">
            <div className="mx-auto w-full max-w-md space-y-8">
                <div>
                    <h2 className="font-bold  text-neutral-800 mt-6 text-center text-3xl tracking-tight ">
                        Forgot your password?
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 ">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={() => navigate('/verify-token')}>
                    <div>
                        <Label htmlFor="email" className="sr-only">
                            Email address
                        </Label>
                        <Input id="email" name="email" type="email" autoComplete="email" required placeholder="Email address" />
                    </div>

                    <Button
                        className="bg-gradient-to-br relative group/btn from-black  to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type={'submit'}
                    >
                        Reset Password &rarr;
                    </Button>


                </form>
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900"

                    >
                        Back to login
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default ForgetPassword
