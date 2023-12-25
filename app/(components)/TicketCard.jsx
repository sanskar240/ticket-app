
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay';
import ProgressBar from './ProgressBar';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className='flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2' >
        <div className=' flex mb-3'>
        <div className='ml-auto'>
        <DeleteBlock/>
        </div>
        <PriorityDisplay/>
        </div>
        <h4>Ticket Title</h4>
        <hr className='h-px border-o bg-page mb-2'/>
        <p className='whitespace-pre-wrap'>description</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
            <div className='flex flex-col'>

            </div>
        <ProgressBar/>
        
        <StatusDisplay/>
        </div>
        </div>
  )
}

export default TicketCard;