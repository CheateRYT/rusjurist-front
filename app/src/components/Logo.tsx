'use client'

import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/' className='flex items-center text-2xl font-bold'>
			<span className='text-blue-600'>русский</span>
			<span className='text-red-600'> юрист</span>
		</Link>
	)
}

export default Logo
