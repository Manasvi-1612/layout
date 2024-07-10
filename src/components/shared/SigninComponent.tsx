import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const SigninComponent = () => {
    return (
        <div className="mx-auto w-full max-w-md space-y-3">
            <h2 className="font-bold text-xl text-neutral-800">
                Welcome Again,
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 ">
                Signin to admin panel
            </p>

            <form className="my-8 space-y-2 w-full">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="projectmayhem@fc.com" type="email" required />

                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" required />


                <Button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign in &rarr;
                </Button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>

            <div className='flex justify-between'>
                <Link className="text-neutral-600 text-sm max-w-sm mt-2 " to={'/forget-password'}>
                    Forget Password
                </Link>

                <Link className="text-neutral-600 text-sm max-w-sm mt-2 " to={'/signup'}>
                    Sign up
                </Link>
            </div>
        </div>
    );
}

export default SigninComponent
