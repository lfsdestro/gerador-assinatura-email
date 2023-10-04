import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useControlValue } from '../../Contexts/ControlContext'
import { Button } from '../../Common/Button'
import { TemplateOne } from '../../Templates/Template-1'
import { copyToClipboard } from '../../Common/CopyToClipboard'

interface PreviewProps {

}

export const Preview = () => {
	const { data } = useControlValue()

	const currentTemplate = () => {
		switch (data.template) {
			
			default:
				return <TemplateOne />
		}
	}

	return (
		<Fragment>
			<StyledPreview id="signatureMarkup">{currentTemplate()}</StyledPreview>
			<Button onClick={() => copyToClipboard('signatureMarkup')}>
				Copiar HTML
			</Button>
		</Fragment>
	)
}

const StyledPreview = styled.article`
	margin-bottom: 3rem;
`