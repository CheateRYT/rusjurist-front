'use client'
import Logo from '@/app/src/components/Logo'
import Link from 'next/link'

const Header = () => {
	return (
		<>
			<header className='container mx-auto p-4 flex justify-between items-center'>
				<div className='flex items-center'>
					<Logo />
				</div>
				<div className='flex items-center justify-end'>
					<a
						href='tel:+71234567890'
						className='bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition mr-4'
					>
						Обратный звонок
					</a>
					<div className='text-right'>
						<div className='text-blue-600 font-bold text-lg'>
							+7 123 456-78-90
						</div>
						<div className='text-blue-600 font-bold text-sm mt-1'>
							example@mail.com
						</div>
						<div className='text-blue-600 font-bold text-xs text-center mt-1'>
							г. Москва, ул. Примерная, д. 1
						</div>
					</div>
				</div>
			</header>
			<div className='bg-blue-600 h-0.5 w-full' /> {/* Синяя полоска */}
			<nav className='container mx-auto pt-2 pb-4 font-bold'>
				<ul className='flex justify-between'>
					<li>
						<Link href='/problem' className='text-blue-600 hover:underline'>
							Знаю вашу проблему
						</Link>
					</li>
					<li>
						<Link href='/services' className='text-blue-600 hover:underline'>
							Услуги
						</Link>
					</li>
					<li>
						<Link href='/prices' className='text-blue-600 hover:underline'>
							Цены
						</Link>
					</li>
					<li>
						<Link href='/why-us' className='text-blue-600 hover:underline'>
							Почему мы
						</Link>
					</li>
					<li>
						<Link href='/reviews' className='text-blue-600 hover:underline'>
							Отзывы
						</Link>
					</li>
					<li>
						<Link href='/contacts' className='text-blue-600 hover:underline'>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Header
