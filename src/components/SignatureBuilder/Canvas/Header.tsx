import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return(
		<StyledHeader>
			<h1>Gerador de Assinatura BRy</h1>
			<p>Preencha o formulário para personalizar sua assinatura</p>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	margin-bottom: 8rem;
	text-align: center;
	font-size: 16px;
	h1 {
		font-size: 45px;
		margin: 1rem 0 0;
	}
`