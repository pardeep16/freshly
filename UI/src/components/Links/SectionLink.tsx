interface SectionLinkProps {
    label:string;
    onClick:()=> void;
}
const SectionLink = ({label,onClick}:SectionLinkProps) => {
  return (
    <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>{label}</h2>
        <button onClick={onClick} className='text-primary text-sm font-medium flex items-center'>
        View all
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        </button>
    </div>
  )
}

export default SectionLink