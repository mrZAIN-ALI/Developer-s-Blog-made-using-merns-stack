import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-3xl  text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Cutting Edge Technologies?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with 100 Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded'>
                <a href="https://github.com/mrZAIN-ALI/" target='_blank' rel='noopener noreferrer'>
                    Resources Link
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://d2ms8rpfqc4h24.cloudfront.net/5_industrial_metaverse_29ef98dfae.jpg" />
        </div>
    </div>
  )
}