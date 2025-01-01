import MenuX from "../components/menu-x"

export default function Loggedin() {
	return (
		<div className='min-h-screen flex flex-col items-center bg-black text-white'>
			<div className='w-full p-5 flex'>
				<button className='hover:bg-white/40 px-5 py-2 rounded-sm' onClick={()=>{window.location.href="/"}}>
					projects
				</button>
				<div className='grow'></div>
				<button className='hidden sm:block hover:bg-white/40 px-5 py-2 rounded-sm' onClick={()=>{window.location.href="/"}}>
					projects
				</button>
				<button className='hidden sm:block hover:bg-white/40 px-5 py-2 rounded-sm' onClick={()=>{window.location.href="/"}}>
					projects
				</button>
				<button className='hidden sm:block bg-red-500 hover:bg-red-600 px-5 py-2 rounded-sm' onClick={()=>{window.location.href="/logout"}}>
					logout
				</button>
                <MenuX />
            	<div className='flex flex-col hidden'>
					
				</div>
			</div>
		</div>
  )
}
