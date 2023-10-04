import React from 'react'
import styled from 'styled-components'
import { useInfoValue } from '../../Contexts/InfoContext'
import { ColorPicker } from '../../Common/ColorPicker'
import { Description } from '../../Common/Description'

export const Styles = () => {
	const { updateAccentColor, updateSocialColor, data } = useInfoValue()
	return (
		<StyledStylesContainer>
        <Description>Siga os passos para gerar sua assinatura.</Description>
        <ol>
          <li>
            Envie para dev.mkt@bry.com.br uma foto que siga o padrão BRy, conforme as instruções.
          </li>
		  <br />
          <li>
            Aguarde a aprovação do time de marketing após o envio da sua foto.
          </li>
		  <br />
          <li>
            Após receber o e-mail com a notificação de aprovação da foto, insira seu nome exatamente como informado na notificação para localizar sua foto em nosso banco de dados.
          </li>
		  <br />
          <li>
            Complete o formulário com seus dados, incluindo seu cargo conforme a norma da BRy.
          </li>
        </ol>
		</StyledStylesContainer>
	)
}

const StyledStylesContainer = styled.form`
	animation: flipdown 0.2s ease both;
  display: block;
  padding: 10px 20px;
  margin-bottom: 0;
      
`

