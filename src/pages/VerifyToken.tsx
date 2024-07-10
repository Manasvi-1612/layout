import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'

const VerifyToken = () => {

    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-8">
                <div>
                    <h2 className="font-bold  text-neutral-800 mt-6 text-center text-3xl tracking-tight  dark:text-gray-50">
                        Verify Token
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Enter the verification token sent to your email to reset your password.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={() => navigate('/reset-password')}>
                    <div>
                        <Label htmlFor="email" className="sr-only" >
                            Verification Token
                        </Label>
                        <Input id="number" name="number" type="number" required placeholder="Enter token" />
                    </div>
                    <Button
                        className="bg-gradient-to-br relative group/btn from-black  to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type={'submit'}
                    >
                        Verify Token &rarr;
                    </Button>


                </form>
            </div>
        </div>
    )
}

export default VerifyToken
