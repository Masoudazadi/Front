
function Empty() {
    return (

        <div className=" w-full flex flex-col items-center justify-center gap-3 my-[10%] ">
            <svg  xmlns="http://www.w3.org/2000/svg"
                 width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                 strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>

                 <h1 className="text-xl w-auto px-5"> Your cart is empty </h1>
                 <p className="w-auto text-center px-5"> Add products while you shop, so they'll be ready for checkout later.</p>

        </div>
    )
}

export default Empty
