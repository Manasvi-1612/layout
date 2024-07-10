import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-8">
                <div>
                    <h2 className="font-bold  text-neutral-800 mt-6 text-center text-3xl tracking-tight  dark:text-gray-50">
                        Reset Password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Enter a new password to reset your account.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={() => navigate('/dashboard')}>
                    <div className='space-y-2'>
                        <Label htmlFor="password">New Password</Label>
                        <Input id="password" placeholder="Enter new password" type="password" required />
                    </div>

                    <div>
                        <Label htmlFor="password">Confirm Password</Label>
                        <Input id="password" placeholder="Confirm new password" type="password" required />
                    </div>
                    <Button
                        className="bg-gradient-to-br relative group/btn from-black  to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type={'submit'}
                    >
                        Reset Password &rarr;
                    </Button>


                </form>
            </div>
        </div>
    )
}

export default ResetPassword
