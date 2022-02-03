import { withZod } from '@remix-validated-form/with-zod'
import { useEffect, useRef } from 'react'
import { ActionFunction, json, LoaderFunction, MetaFunction, useActionData, useLoaderData, useTransition } from 'remix'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { z } from 'zod'
import About from '~/components/About'
import Contact from '~/components/Contact'
import Hero from '~/components/Hero'
import { Input, SubmitButton, Textarea } from '~/components/Input'
import Projects from '~/components/Projects'
import { sendEmail } from '~/utils/send'

export const validator = withZod(
	z.object({
		name: z.string().nonempty('Please enter your name'),
		email: z
			.string()
			.nonempty('I need to know where to reach you!')
			.email("Uh oh, that doesn't look like an email address..."),
		message: z.string().nonempty('You need to send me a message!')
	})
)

type LoaderData = {
	defaultValues: {
		name: string
		email: string
		message: string
	}
}

export const loader: LoaderFunction = () =>
	json({
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	})

export const action: ActionFunction = async ({ request }) => {
	const fieldValues = validator.validate(await request.formData())
	if (fieldValues.error) return validationError(fieldValues.error)
	const { name } = fieldValues.data

	try {
		await sendEmail(fieldValues.data)
		return { successMessage: `Thank you for reaching out, ${name}. I will get back to you asap!` }
	} catch (e) {
		return { errorMessage: `Sorry ${name}, something went wrong. Please try again later 😔` }
	}
}

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => ({
	title: 'Oliver Cederborg - Front-end developer',
	description: "Hi, I'm Oliver Cederborg, a front-end developer from Denmark."
})

// https://remix.run/guides/routing#index-routes
export default function Index() {
	const { defaultValues } = useLoaderData<LoaderData>()
	const actionData = useActionData()
	const transition = useTransition()
	const formRef = useRef<HTMLFormElement>(null)
	const nameInputRef = useRef<HTMLInputElement>(null)
	const emailSent = transition.state === 'loading' && transition.type === 'actionReload'

	useEffect(() => {
		if (emailSent) {
			formRef.current?.reset()
			nameInputRef.current?.focus()
		}
	}, [emailSent])

	return (
		<main>
			<Hero />
			<Projects />
			<About />
			<Contact>
				<ValidatedForm
					formRef={formRef}
					validator={validator}
					replace
					method='post'
					defaultValues={defaultValues}
					resetAfterSubmit
					className='space-y-10'
				>
					<Input ref={nameInputRef} name='name' label="What's your name?" placeholder='Elon Musk' required />
					<Input name='email' label='Where can I reach you?' placeholder='elon@tesla.com' required />
					<Textarea
						name='message'
						label="What's your message?"
						placeholder="Hi Oliver, let's work!"
						required
					/>
					<SubmitButton>{transition.state === 'submitting' ? 'Sending...' : 'Send it'}</SubmitButton>

					{actionData?.successMessage && <p className='text-green-500'>{actionData.successMessage}</p>}
					{actionData?.errorMessage && <p className='text-red-500'>{actionData.errorMessage}</p>}
				</ValidatedForm>
			</Contact>
		</main>
	)
}
