import "../../app/globals.css"

export default function (){
    const repeatedContent = Array.from({ length: 100 }, (_, index) => (
        
        <p key={index}  className=" hover:text-primary cursor-pointer text-slate-500  px-[5px]">hello</p>
        
      ));
    return(
        <>
            <div className="bg-slate-100 py-10">
                <div className="container-wrapper">
                    <p className="text-md font-semibold">Manali Package</p>
                    <div className="text-para flex flex-wrap mt-3">
                        {repeatedContent}    
                    </div>
                </div>

            </div>
        </>
    )

}