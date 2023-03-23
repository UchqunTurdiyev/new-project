import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';
import TextField from '../components/text-field/textField';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/auth.context';
import { GetServerSideProps } from 'next';

const Logout = () => {
	const { isLoading, error, signUp } = useContext(AuthContext);

	const onSubmit = async (formData: { email: string; password: string }) => {
		signUp(formData.email, formData.password);
	};

	const validation = Yup.object({
		email: Yup.string().email('Enter valid email').required('Email is requared'),
		password: Yup.string().min(6, '6 minimum charakter').required('Password is required'),
	});

	return (
		<div className='relative h-screen w-screen flex flex-col md:items-center md:justify-center bg-black sm:bg-transparent'>
			<Head>
				<title>Auth</title>
				<meta name='description' content='For watching movies you should sign to app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image src={'/bg_log.jpg'} alt={'bg img'} fill className='object-cover -z-10 !hidden sm:!inline opacity-60' />

			<Image
				src={'/logo.svg'}
				alt={'Logo img'}
				width={70}
				height={70}
				className='absolute left-5 top-5 object-contain cursor-pointer'
			/>
			<div className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:w-[500px] md:px-14'>
				<h1 className='font-semibold text-4xl'>Sign Up</h1>
				{error && <p className='w-full text-red-500 font-semibold'>{error}</p>}
				<Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validation}>
					<Form>
						<div className='space-y-4'>
							<TextField name='email' placeholder='Email...' type='text' />
							<TextField name='password' placeholder='Password...' type='password' />
						</div>
						<button type='submit' disabled={isLoading} className='w-full bg-[#be264c] py-3 my-4 font-semibold'>
							{isLoading ? 'Loading...' : 'Sign Up'}
						</button>
						<div className='text-slate-500'>
							Not yet account?
							<Link href='/auth' className='text-white hover:underline pl-2'>
								Sign In
							</Link>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default Logout;

// SERVISE SITE RENDERING
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const user_id = req.cookies.user_id;

	if (user_id) {
		return {
			redirect: { destination: '/', permanent: false },
		};
	}
	return {
		props: {},
	};
};
