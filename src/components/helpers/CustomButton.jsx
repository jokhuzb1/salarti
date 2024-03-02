import { Button } from 'flowbite-react'

const CustomButton = ({title}) => {
  return (
    <Button className='w-fit text-primary border border-primary rounded-3xl px-5 py-1'>{title}</Button>
  )
}

export default CustomButton