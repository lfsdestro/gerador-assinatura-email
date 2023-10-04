import React from 'react'
import styled from 'styled-components'
import { useControlValue } from '../../Contexts/ControlContext'
import { InputRadio } from '../../Common/InputRadio'
import { Description } from '../../Common/Description'

export const Templates = () => {
	const { data, changeTemplate } = useControlValue()
	const templateTypes = [
		{
			label: 'Modelo de assinatura',
			name: 'template1',
		},
	]

	return (
		<StyledForm>
			<Description>Selecione o modelo</Description>
			{templateTypes.map(templateType => (
				<InputRadio
					label={templateType.label}
					name={templateType.name}
					checked={data.template}
					onChange={changeTemplate}
					key={templateType.name}
				/>
			))}
		</StyledForm>
	)
}

const StyledForm = styled.form`
	animation: flipdown 0.2s ease both;
`
