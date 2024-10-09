import { CheckCircle2 } from "lucide-react"
import codeImg from '../assets/assets/code.jpg'
import { checklistItems } from "../constants"

const WorkFlow = () => {
  return (
    <div className="mt-20">

        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tex tracking-wide">
    Accelrate your 
    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">{' '}coding workFlow</span>
        </h2>
      <div className="flex flex-wrap justify-center">

        <div className=" p-2 w-full  lg:w-1/2">
        <img src={codeImg} alt="codeImg" />

        </div>
        <div className="p-12 w-full lg:w-1/2">
     {checklistItems.map((checklistItem, index)=>(
        <div key={index} className="flex mb-12">
            <div className="text-green-400 bg-neutral-900  mx-6 items-center rounded-full h-10 w-10 p-2 justify-center">
  <CheckCircle2/>
            </div>
            <div>
                <h2 className="mt-1 mb-2 text-xl">
                    {checklistItem.title}

                </h2>
                <p className="text-md text-neutral-500">
     {checklistItem.description}
                </p>
            </div>

        </div>
     ))}
        </div>

      </div>
    </div>
  )
}

export default WorkFlow
