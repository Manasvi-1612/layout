import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const SignupComponent = () => {
    return (
        <div className="mx-auto w-full max-w-lg space-y-3">
            <h2 className="font-bold text-xl text-neutral-800">
                Welcome,
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 ">
                Signup to admin panel
            </p>

            <form className="my-8 space-y-2 w-full">
                <div className="grid grid-cols-2 space-x-2">

                    <div>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" required />
                    </div>

                    <div>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Durden" type="text" required />
                    </div>

                </div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="projectmayhem@fc.com" type="email" required />

                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" required />


                <Button
                    className="bg-gradient-to-br relative  from-black to-neutral-600 block  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                </Button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />


            </form>

            <Link className="text-neutral-600 text-sm max-w-sm mt-2 " to={'/'}>
                Already Exists?
            </Link>
        </div>
    );
}

export default SignupComponent
