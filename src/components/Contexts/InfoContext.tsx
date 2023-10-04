import React, { useState, createContext, useContext, ReactNode, FormEvent } from 'react'
import PropTypes from 'prop-types'

interface InfoContextProps {
	data: any,
	updateInfo: any,
	updateAccentColor: any,
	updateSocialColor: any, 
}

interface InfoProviderProps {
	children: ReactNode,
}

export const InfoContext = createContext<Partial<InfoContextProps>>({})

var url = 'https://news.bry.com.br/assinatura/lucas-moreno.png'

export const InfoProvider = ({ children }: InfoProviderProps) => {
	const [state, setState] = useState({
		portrait: '',
		logo: 'https://news.bry.com.br/assinatura/bry-logoeselo02.png',
		firstName: '',
		lastName: '',
		jobTitle: 'Seu Cargo',
		department: '',
		companyName: '',
		officePhone: '',
		mobilePhone: '48 3234 6696',
		websiteUrl: '',
		emailAddress: '',
		address: '',
		socialLinkedin: 'www.linkedin.com/company/brytecnologia',
		socialFacebook: 'www.facebook.com/brytecnologia',
		socialTwitter: 'www.youtube.com/@BRyTecnologia',
		socialInstagram: 'www.instagram.com/brytecnologia/',
		accentColor: '#000',
		socialColor: '#000',
	})
	return (
		<InfoContext.Provider
			value={{
				data: state,
				updateInfo: (e: FormEvent<HTMLInputElement>) => {
					setState({
						...state,
						[e.currentTarget.name]: e.currentTarget.value,
					})
				},
				updateAccentColor: (color: string) => {
					setState({
						...state,
						accentColor: color,
					})
				},
				updateSocialColor: (color: string) => {
					setState({
						...state,
						socialColor: color,
					})
				},
			}}
		>
			{children}
		</InfoContext.Provider>
	)
}

export const useInfoValue = () => useContext(InfoContext)

InfoProvider.propTypes = {
	children: PropTypes.node,
}

