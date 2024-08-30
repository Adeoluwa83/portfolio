

const UsedTech = () => {
  return (
      <div className="py-6" id="tech">
        <h1 className="heading line-clamp-2"> My  {' '}
           <span className='text-purple'>Tools...</span>
           </h1>
      
          <div className="flex gap-3 pt-20 m-3 py-2  justify-center">
             
              <img src="./re.svg" alt="" className=" p-4 w-[90%] border border-white/0.3 rounded-lg lg:w-[10%]" />
         
              <img src="./tail.svg" alt="" className=" p-4 w-[90%] border border-white/0.3 rounded-lg  lg:w-[10%]" title="Tailwind"/>

                 <img src="./next.svg" alt="" className=" p-4 w-[90%] border border-white/0.3 rounded-lg  lg:w-[10%]" title="Next.js"/>
            
                <img src="./apx.svg" alt="" className=" p-4 w-[20%] border border-white/0.3 rounded-lg  lg:w-[10%]" title="Appwrite"/>
            
          </div>
          <div className="flex gap-3 justify-center">
                <img src="./gsap.svg" alt="" className=" p-4 w-[90%] border border-white/0.3 rounded-lg  lg:w-[10%]"  title="gsap"/>
               <img src="./three.svg" alt="" className=" p-4 md: w-[90%] border border-white/0.3 rounded-lg  lg:w-[10%]" title="Three.js"/>
        <img src="./ts.svg" alt="" className=" p-4 md: w-[90%] border border-white/0.3 rounded-lg  lg:w-[10%]" title="TypeScript"/>
          </div>
      </div>
  )
}

export default UsedTech